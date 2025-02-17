// Original object
const originalPerson = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'traveling', 'coding']
  };
  
  // Shallow copy using Object.assign
  const shallowCopyPerson = Object.assign({}, originalPerson);
  
  // Deep copy using JSON methods
  const deepCopyPerson = JSON.parse(JSON.stringify(originalPerson));
  
  // Modify the hobbies array in shallow copy
  shallowCopyPerson.hobbies.push('photography');
  
  // Log all three objects
  console.log('Original Person:', originalPerson);
  console.log('Shallow Copy Person:', shallowCopyPerson);
  console.log('Deep Copy Person:', deepCopyPerson);
  