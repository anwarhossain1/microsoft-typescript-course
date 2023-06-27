function addNumbers(x:number, y:number) {
    return x + y;
}
console.log(addNumbers(3, 6));
let ab =5

ab = 10

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

let unknown: unknown = 10
unknown = true
unknown = 'sp'
unknown = 12

if(typeof unknown==='string'){
    console.log((unknown as string).toUpperCase())
}
else{
    console.log('Error')
}

//unions

function add(a:number | string ,b: number | string ){
    if(typeof a==='number' && typeof b==='number'){
        return a+b
    }
    if(typeof a==='string' && typeof b==='string'){
        return a.concat(b)
    }
    throw new Error('String or number required')
}

console.log(add('one', 'two'));
console.log(add(1, 2));
console.log(add('one', 2));

//intersection

interface Owner {
    ownerShip : boolean,
    amount:number
}

interface CTO{
    responsibility : boolean
}

type ctoComeOwner = Owner & CTO

let nipon :ctoComeOwner = {
    ownerShip:true,
    amount:50,
    responsibility:true
}
console.log(nipon.amount)

//literal types

type fixedType = 'yes' | 'no'

let isActive: fixedType
isActive = 'yes'
isActive = 'no'

//tuples


let numbers : number[] = []
numbers = [1,2]
numbers = [52, 25]

let numbersWithGeneric : Array<number> =[]
numbersWithGeneric = [54,254]

let tuplesWithDiffTypes : [number, string] = [54, 'anwar']


