const originalObject = {
    name: "Alice",
    age: 25
};

const modifiedObject = originalObject; // Assigning by reference
modifiedObject.age = 30; // Modifying property in modifiedObject

console.log("Original Object:", originalObject);
console.log("Modified Object:", modifiedObject);
