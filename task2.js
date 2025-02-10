const words = ["hello", "world", "hardik", "helloworld", "patel"];

let i = 0;

//while loop start here 
while (i < words.length) {
    
    if (words[i].length > 8) {
        break;
    }
    //foreach loop start from here 
    [words[i]].forEach(word => {
        console.log(word + "!");
    });

     i++;
}






