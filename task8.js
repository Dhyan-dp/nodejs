const MAX_USERS = 100;

//  MAX_USERS = 200; // Error: Assignment to constant variable.


let counter = 1;
counter = 1; // Valid operation
console.log(counter); // 2


function test() {
    if (true) {
        var message = "Hello";
    }
    console.log(message); // Accessible outside the block due to function-scoping
}
test();


console.log(a); // undefined (due to hoisting)
var a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;


const user = { name: "dhyan", age: 22 };
user.age = 31; // Allowed
console.log(user.age); // 31

// user = {}; // Error: Assignment to constant variable.


