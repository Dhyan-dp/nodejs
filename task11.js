// // let aaray=[1,2,3,4,5,6]
// // let squared=aaray.map(num=>num*num);

// // console.log(aaray);
// // console.log(squared);


// const numbers = [10, 20, 30, 40];

// const modifiedArray = numbers.map(function(currentValue, index, array) {
//     console.log(`Value: ${currentValue}, Index: ${index}, Original Array: ${array}`);
//     return currentValue + index; // Modifying value based on index
// }, this);

// console.log(modifiedArray); 
// // Output: [10, 21, 32, 43]



const data=[
    {
            name:"dhyan",
            numbers:[1,12,13]
    },
    {
        name:"jay",
        numbers:[2,4,5]
    }
];

let square=data.map(a=>
{
    return{
    
        n: a.name, 
        squaredarray: a.numbers.map(n=>n*n)
    }
    
    
}
)
// console.log(n);
console.log(square);

