let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "Mango") {
        console.log("Found Mango! Stopping the loop.");
        break; 
    }
    console.log(fruits[i]);
}
