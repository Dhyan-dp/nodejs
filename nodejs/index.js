const http = require("http");
const fs = require("fs").promises; // Use fs.promises for async operations
const { URL } = require("url");

const fileName = "users.json";

// Function to initialize the JSON file if it does not exist
const initializeFile = async () => {
    try {
        await fs.access(fileName); // Check if the file exists
    } catch (err) {
        // If file doesn't exist, create it with an empty array
        await fs.writeFile(fileName, JSON.stringify([]), "utf8");
    }
};

// Function to read users from JSON file
const readUsersFromFile = async () => {
    await initializeFile();
    const data = await fs.readFile(fileName, "utf8");
    return JSON.parse(data);
};

// Function to write users to JSON file
const writeUsersToFile = async (data) => {
    await fs.writeFile(fileName, JSON.stringify(data, null, 2), "utf8");
};

// Create HTTP Server
const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    try {
        // Read users from file
        let users = await readUsersFromFile();

        // GET - Fetch all users
        if (method === "GET" && pathname === "/users") {
            res.writeHead(200);
            res.end(JSON.stringify(users, null, 2));
        } 
        
        // POST - Add a new user
        else if (method === "POST" && pathname === "/users") {
            let body = "";
            req.on("data", chunk => (body += chunk));
            req.on("end", async () => {
                const newUser = JSON.parse(body);
                newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
                users.push(newUser);
                await writeUsersToFile(users);
                res.writeHead(201);
                res.end(JSON.stringify({ message: "User added", user: newUser }));
            });
        } 
        
        // PUT - Update an existing user
        else if (method === "PUT" && pathname.startsWith("/users/")) {
            const userId = parseInt(pathname.split("/")[2]);
            let body = "";
            req.on("data", chunk => (body += chunk));
            req.on("end", async () => {
                const updatedUser = JSON.parse(body);
                const index = users.findIndex(user => user.id === userId);
                if (index === -1) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ message: "User not found" }));
                } else {
                    users[index] = { ...users[index], ...updatedUser };
                    await writeUsersToFile(users);
                    res.writeHead(200);
                    res.end(JSON.stringify({ message: "User updated", user: users[index] }));
                }
            });
        } 
        
        // DELETE - Remove a user
        else if (method === "DELETE" && pathname.startsWith("/users/")) {
            const userId = parseInt(pathname.split("/")[2]);
            const filteredUsers = users.filter(user => user.id !== userId);
            if (filteredUsers.length === users.length) {
                res.writeHead(404);
                res.end(JSON.stringify({ message: "User not found" }));
            } else {
                await writeUsersToFile(filteredUsers);
                res.writeHead(200);
                res.end(JSON.stringify({ message: "User deleted" }));
            }
        } 
        
        // Handle unknown routes
        else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: "Route not found" }));
        }

    } catch (err) {
        console.error("Server error:", err);
        res.writeHead(500);
        res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
});

// Start the server on localhost:3000
server.listen(3000, async () => {
    console.log("Server running at http://localhost:3000/");
    await initializeFile(); // Ensure the file is created on server start
});
