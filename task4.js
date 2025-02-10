// var is function-scoped and can be redeclared
var x = 10;
var x = 20; // Allowed
console.log(x); // 20

// block-scoped
let y = 10;
y = 20; 
console.log(y); 

// const is block-scoped and must be initialized
const z = 30;
console.log(z); 

// let and const are block-scoped
if (true) {
    var a = 'var inside block';
    let b = 'let inside block';
    const c = 'const inside block';
}

console.log(a); // output
// console.log(b); // Error (block-scoped)
// console.log(c); // Error (block-scoped)
