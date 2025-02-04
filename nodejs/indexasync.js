const http = require("http");
const fs = require("fs");
const { URL } = require("url");

const fileName = "users.json";

// Function to initialize the JSON file if it does not exist
const initializeFile = () => {
    if (!fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, JSON.stringify([]), "utf8");
    }
};

// Function to read users from JSON file
const readUsersFromFile = () => {
    initializeFile();
    const data = fs.readFileSync(fileName, "utf8");
    return JSON.parse(data);
};

// Function to write users to JSON file
const writeUsersToFile = (data) => {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2), "utf8");
};

// Create HTTP Server
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    // Read users from file
    let users = readUsersFromFile();

    // Handle Routes
    if (method === "GET" && pathname === "/users") {
        res.writeHead(200);
        res.end(JSON.stringify(users, null, 2));
    } 
    else if (method === "POST" && pathname === "/users") {
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            const newUser = JSON.parse(body);
            newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
            users.push(newUser);
            writeUsersToFile(users);
            res.writeHead(201);
            res.end(JSON.stringify({ message: "User added", user: newUser }));
        });
    } 
    else if (method === "PUT" && pathname.startsWith("/users/")) {
        const userId = parseInt(pathname.split("/")[2]);
        let body = "";
        req.on("data", chunk => (body += chunk));
        req.on("end", () => {
            const updatedUser = JSON.parse(body);
            const index = users.findIndex(user => user.id === userId);
            if (index === -1) {
                res.writeHead(404);
                res.end(JSON.stringify({ message: "User not found" }));
            } else {
                users[index] = { ...users[index], ...updatedUser };
                writeUsersToFile(users);
                res.writeHead(200);
                res.end(JSON.stringify({ message: "User updated", user: users[index] }));
            }
        });
    } 
    else if (method === "DELETE" && pathname.startsWith("/users/")) {
        const userId = parseInt(pathname.split("/")[2]);
        const filteredUsers = users.filter(user => user.id !== userId);
        if (filteredUsers.length === users.length) {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "User not found" }));
        } else {
            writeUsersToFile(filteredUsers);
            res.writeHead(200);
            res.end(JSON.stringify({ message: "User deleted" }));
        }
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

// Start the server on localhost:3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
    initializeFile(); // Ensure the file is created on server start
});
