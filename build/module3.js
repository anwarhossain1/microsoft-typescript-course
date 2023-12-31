"use strict";
//class practice


class Car {
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++;
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
}
Car.numberOfCars = 0; // New static property
let myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object with all parameters
let myCar2 = new Car('Cool Car Company', 'red', 4);
console.log(myCar1.color);
console.log(myCar1.brake());
console.log(Car.getNumberOfCars());
