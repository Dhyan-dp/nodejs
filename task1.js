let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Before applying break and continue:");
console.log(numbers);

console.log("\nAfter applying break and continue:");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 3) {
        console.log("Skipping 3..."); // Skips the number 3 and continues with the next iteration
        continue; 
    }

    if (numbers[i] > 5) {
        console.log("Stopping the loop."); // Stops the loop when the number is greater than 5
        break;
    }

    console.log(numbers[i]); // Prints the number if it is not skipped or stopping condition is not met
}
