// Creating the student object
const student = {
    name: 'John Doe',
    age: 20,
    grades: [85, 92, 78, 94, 88],
  
    // Method to calculate the average of the grades
    calculateAverage: function() {
      const total = this.grades.reduce((sum, grade) => sum + grade, 0);
      return total / this.grades.length;
    }
  };
  
  // Iterating through the object properties using a for...in loop
  for (let key in student) {
    if (student.hasOwnProperty(key)) {  // Ensures only own properties are logged
      console.log(`${key}: ${student[key]}`);
    }
  }
  
  // Calling the calculateAverage method and logging the result
  const average = student.calculateAverage();
  console.log(`Average Grade: ${average}`);
  