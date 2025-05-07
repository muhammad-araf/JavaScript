// function user(name,id){
//     this.name = name;
//     this.id = id;
//     this.print = function(marks){
//         console.log(`name : ${name}\n Id : ${id}\n marks : ${marks}`);
        
//     }
// }
// const student = new user("araf",991);
// student.print(90);

// Define a class (OOP-style)
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`This car is a ${this.brand} ${this.model}`);

    }
}

let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");

    car1.displayInfo();
    car2.displayInfo();
