"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
let ab = 5;
ab = 10;
let b = 42;
b = 5;
b = 50;
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
let num = 10;
num = 'string';
num = 54;
let unknown = 10;
unknown = true;
unknown = 'sp';
unknown = 12;
if (typeof unknown === 'string') {
    console.log(unknown.toUpperCase());
}
else {
    console.log('Error');
}
//unions
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('String or number required');
}
console.log(add('one', 'two'));
console.log(add(1, 2));
console.log(add('one', 2));
let nipon = {
    ownerShip: true,
    amount: 50,
    responsibility: true
};
console.log(nipon.amount);
let isActive;
isActive = 'yes';
isActive = 'no';
//tuples
let numbers = [];
numbers = [1, 2];
numbers = [52, 25];
let numbersWithGeneric = [];
numbersWithGeneric = [54, 254];
let tuplesWithDiffTypes = [54, 'anwar'];
