// 1.//let and const can't be redeclared and const can't be reassigned;both have block scope
let price = 15;
price = 18;
const name = 'alim';
//2.temaplate string 
//2.a: use variable 
//2.b: use object property
const age = 20;
const products = {
    name: 'samsung galaxy', price: 15000, color: 'black',
    name: 'oppo', price: 18000, color: 'silver',
    name: 'vivo', price: 25000, color: 'lightblue',
};
const description = `His name is munir. He is ${age} years old. 
He has a ${products.name} phone and the price of the phone is ${products.price}. phone color is ${products.color}`;
console.log(description);
//3.arrow function 
//3.a.with one parameter.wil return the number after dividing by 5.
const divisibleByFive = x => x / 5;
console.log(divisibleByFive(10));
//3.b.with two parameters. will add two to each number and then multiply the result.
const addAndMultiply = (x, y) => (x + 2) * (y + 2);
console.log(addAndMultiply(2, 3));
//3.c.three parameters.will multiply all three parameters
const multiplyAll = (x, y, z) => x * y * z;
console.log(multiplyAll(1, 2, 3));
//3.d.two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
const addAndMultiply2 = (x, y) => {
    const addition1 = x + 2;
    const addition2 = y + 2;
    const multiply = addition1 * addition2;
    return multiply;
}
console.log(addAndMultiply2(2, 3));
//4.normal function vs arrow function
//in arrow function,we don't need use function keyword and function declaration name,curly brackets and return statement(when single line calculation)
//5.array of numbers. and then map to get each elements multiplied by 5.(must use arrow function)
//map methods call the function for each an every array elements and returns a new array(result are stored in a new array and then return)
//but foreach method doesn't stored the result in a new array.when we don't need to return from the function we can use foreach method
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const multiplyAllNumbers = allNumbers.map(x => x * 5);
console.log(multiplyAllNumbers);
//6.numbers of array. get odd numbers by using filter with arrow function
const numbersAll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbersAll.filter(x => x % 2);
console.log(oddNumbers);
// or getting even numbers 
const evenNumbers = numbersAll.filter(x => x % 2 == 0);
console.log(evenNumbers);
//filter returns all the matched elements in a new array by checking condition which is provided by the function
//7.array of objects. (example:products).use find to get the object with price 5000.
const allProducts = [
    { name: 'samsung galaxy', price: 15000, color: 'white' },
    { name: 'vivo', price: 10000, color: 'black' },
    { name: 'oppo', price: 5000, color: 'lightblue' },
    { name: 'lenovo', price: 8000, color: 'black' },
];
const productPrice = allProducts.find(x => x.price == 5000);
console.log(productPrice);/*find returns the only one and first elements from an array by checking condition which provided by the function*/
//8.you have an object.Now use destructuring to create a simple variable of any property of the object.
const shirt = {
    color: 'black', type: 'cotton', size: 'M'
}
//extract properies of an object and bind them to a variables
const { color, type, size } = shirt;
console.log(color);
//9.you have an array.Now use destructuring to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
const myArray = [1, 5, 9, 19, 49, 5];
const [, , three] = myArray;
console.log(three);
//10.just write a function with three parameters and the last parameter will have a default paremeters with value 7. this function will take three parameters and wil return the sum of all the three parameters.
const sum = (x, y, z = 7) => x + y + z;
console.log(sum(2, 3));
//11.declare a nested object.and the one property should be an array.
const nested = {
    chips: { name: 'potato', weight: '25 gm', size: 'small' },
    banana: { color: 'yellow', weight: '100gm', size: 'big' },
    apple: { weight: '50gm', size: 'medium', colors: ['red', 'darkred', 'yellow', 'lightyellow'] },
}
//destructuring nested object
// const { weight, colors } = nested.apple
// console.log(colors);
// or 
const { apple: { colors: x } } = nested;
console.log(x);
//12.optional chaining 
//when the properties might be missing in object and if the property is missing ;it returns undefined instead of throwing error
console.log(nested?.halua?.name);

// //javascript class for create objects
// class Car {
//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//     }
//     getDescription() {
//         console.log(this.name, 'is a fantastic car');
//     }
// }
// const bmw = new Car('bmw', 2017);
// console.log(bmw);
// bmw.getDescription();
// const ferrari = new Car('ferrai', 2019);
// console.log(ferrari);
// ferrari.getDescription();

//class inheritance 
//inherits all the method and property from one class to another class by extends keyword
//constructor method initialize the properties of object
//new keyword call constructor method automatically for creating object
//use this for access the property of object in a class;
//super call the parent constructor method and get access to the methods and properties 
class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    getDescription() {
        console.log(this.name, 'is a fantastic car');
    }
}

class Bmw extends Car {
    constructor(name, model, price) {
        super(name, model);
        this.price = price;
    }
}
const bmw = new Bmw('bmw', 2017, '10 millons');
console.log(bmw);
bmw.getDescription();

//prototype 
//code this in a browser to see prototype property of any function
//console.dir() is the upgraded version of console.log()
const f = function () { };
console.dir(f);
//so prototype  is a property of every function;which points to an object. When we create a function using javascript; the javascript engine adds a prototype property inside a function. Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.
//when we use class methods in js and when we inherits the methods and properties from one class to another class;the js exactly inherits the methods and properties prototypically.js protopically inherits the methods and properties from prototype object to another objects.