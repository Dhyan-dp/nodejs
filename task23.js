// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding the greet method to the prototype of Person
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Calling the greet method on both instances
  person1.greet();  
  person2.greet();  
  