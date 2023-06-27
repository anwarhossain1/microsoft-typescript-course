//interface

interface IceCream {
    flavor: string;
    scoops: number;
    instructions?:string
}
let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

console.log(myIceCream.flavor);
function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

//interface extend

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

//indexable types

interface IceCreamArray {
    [index: number]: string;
}

let myIceCream2: IceCreamArray;
myIceCream2 = ['5', 'vanilla', 'strawberry'];
let myStr: string = myIceCream2[2];
console.log(myStr);