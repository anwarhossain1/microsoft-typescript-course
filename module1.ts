function addNumbers(x:number, y:number) {
    return x + y;
}
console.log(addNumbers(3, 6));
let a =5

a = 10

let b = 42
b = 5
b = 50

enum ContractStatus {
    Permanent,
    Temp,
    Apprentice
}
let employeeStatus = ContractStatus.Temp
console.log(employeeStatus)

let num:any = 10
num = 'string'
num = 54

let un: unknown = 10
un = 'sp'
console.log((un as string).toUpperCase())
