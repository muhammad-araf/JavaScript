function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.displayInfo = function() {
    console.log("This car is a " + this.brand + " " + this.model);
};
let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");
car1.displayInfo();
car2.displayInfo();
