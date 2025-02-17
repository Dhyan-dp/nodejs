function Car(brand) {
    this.brand = brand;
    this.carInfo = {
        displayInfo: function(model) {
            console.log(`Car Brand: ${this.brand}, Model: ${model}`);
        }.bind(this) // Binding 'this' to ensure it refers to the Car instance
    };
}

// Creating an instance of Car
const myCar = new Car("Toyota");

// Calling the displayInfo method
myCar.carInfo.displayInfo("Corolla");
