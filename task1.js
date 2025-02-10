let numbers = [1, 2, "3", 4, 5, 6, 7, 8];

console.log("Before applying break and continue:");
console.log(numbers);

console.log("\nAfter applying break and continue:");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 3) {
        console.log("Skipping 3...");
        continue; 
    }

    if (numbers[i] > 5) {
        console.log("stopping the loop.");
        break;
    }

    console.log(numbers[i]);
}