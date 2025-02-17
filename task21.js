// Creating two objects with similar properties
const user1 = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  };
  
  const user2 = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  };
  
  // Function to compare two objects
  function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // First, check if the number of properties is the same
    if (keys1.length !== keys2.length) {
      console.log('Objects are not equal');
      return;
    }
  
    // compare each property and its value
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        console.log('Objects are not equal');
        return;
      }
    }
  
    // If all properties are equal
    console.log('Objects are equal');
  }
  
  // Testing the function with user1 and user2
  compareObjects(user1, user2);  // Output: Objects are equal
  