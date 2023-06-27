"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
let a = 5;
a = 10;
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
