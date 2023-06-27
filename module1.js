function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
var a = 5;
a = 10;
var b = 42;
b = 5;
b = 50;
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
var num = 10;
num = 'string';
num = 54;
var un = 10;
un = 'sp';
console.log(un.toUpperCase());
