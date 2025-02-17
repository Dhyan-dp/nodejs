const person = {
    name: "Dhyan",
    age: 22,
    
    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Calling the method
person.introduce();
