
// Hoisting with var
function hoistingVar() {
    console.log(hoistedVar); // Undefined
    var hoistedVar = 'I am hoisted';
    console.log(hoistedVar); 
}
hoistingVar();

// Hoisting with let
function hoistingLet() {
    // console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
    let hoistedLet = 'I am also hoisted but in Temporal Dead Zone';
    console.log(hoistedLet); 
}
hoistingLet();

// Hoisting inside a block
if (true) {
    console.log(hoistedInsideBlockVar); // Undefined (hoisted but not initialized)
    var hoistedInsideBlockVar = 'I am hoisted inside block';
    
    // console.log(hoistedInsideBlockLet); // Error: Cannot access 'hoistedInsideBlockLet' before initialization
    let hoistedInsideBlockLet = 'I am block-scoped';
    console.log(hoistedInsideBlockLet); // 'I am block-scoped'
}

console.log(hoistedInsideBlockVar); // Works (function-scoped)
// console.log(hoistedInsideBlockLet); // Error (block-scoped)
