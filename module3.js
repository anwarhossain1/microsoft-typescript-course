//class practice
var Car = /** @class */ (function () {
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++;
    }
    Object.defineProperty(Car.prototype, "make", {
        // Accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return 'The color of the car is ' + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if ((doors % 2) === 0) {
                this._doors = doors;
            }
            else {
                throw new Error('Doors must be an even number');
            }
        },
        enumerable: true,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return this.worker() + " is accelerating to " + speed + " MPH.";
    };
    Car.prototype.brake = function () {
        return this.worker() + " is braking with the standard braking system.";
    };
    Car.prototype.turn = function (direction) {
        return this.worker() + " is turning " + direction;
    };
    // This function performs work for the other method functions
    Car.prototype.worker = function () {
        return this._make;
    };
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    Car.numberOfCars = 0; // New static property
    return Car;
}());
var myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object with all parameters
var myCar2 = new Car('Cool Car Company', 'red', 4);
console.log(myCar1.color);
console.log(myCar1.brake());
console.log(Car.getNumberOfCars());
