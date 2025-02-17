const calculator = {
    x: 10,
    y: 5,

    calculate(operation) {
        switch (operation) {
            case "add": return this.x + this.y;
            case "subtract": return this.x - this.y;
            case "multiply": return this.x * this.y;
            case "divide": return this.x / this.y;
            default: return "Invalid operation";
        }
    }
};
console.log(calculator.calculate("add"));  // Output: 15
console.log(calculator.calculate("subtract"));
console.log(calculator.calculate("multiply"));
console.log(calculator.calculate("divide"));
