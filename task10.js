// Initialize an array with the days of the week
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log("Initial array:", week);

// Add 'Saturday' and 'Sunday' at the end (push)
week.push('Saturday', 'Sunday');
console.log("After push:", week);

// Remove the last day (pop)
week.pop();
console.log("After pop:", week);

// Remove the first day (shift)
week.shift();
console.log("After shift:", week);

// Add 'Sunday' at the beginning (unshift)
week.unshift('Sunday');
console.log("After unshift:", week);

// Find the index of 'Wednesday'
let index = week.indexOf('Wednesday');
console.log("Index of Wednesday:", index);
