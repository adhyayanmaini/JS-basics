console.log("Learning JavaScript Basics!");

let x;
let y;

//each var has unique name and cant be same and reused
//two var types: declared and assignment
//declared variable is a variable that has been declared but not assigned a value

x = 100; //we can assign value later

console.log(x);

let age = 25;

console.log("Age:", age); //"," used to seperate and use var with a text string

//another usage;
console.log(`You are ${age} years old`);

// typeoff keyword is used to detemine the type of a variable
console.log(typeof age); //number
console.log(typeof x); //number
console.log(typeof "Hello"); //string

//strings:

let firstname = "Bro";
console.log(typeof firstname);
console.log(`You Nigga name is ${firstname}`);

let favoritefood = "Chicken";
console.log(typeof favoritefood);
console.log(`Your favorite food is ${favoritefood}`);


//⚠️string can contain numbers! but cant be used for math

//boolean: True or Flase
let online = false
console.log(typeof online);
console.log(`User is online: ${online}`);


//Arrays For js 
console.log("-------------------");
console.log("Learning Arrays Now:");

//array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // answer will be undefined as nothing exits in the list above in the fruits

//changing arrays value at 0:
fruits[0] = "Coconut"; //apple will be swapped by Coconut
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//to add new new elemnts let say at 3:
fruits[3] = "Mango"; //we can add new elemnts to the array by using the index number
console.log(fruits[3]); //Mango will be added at index 3

//built-in method for array: push()
fruits.push("Pineapple"); //adds a new element to the end of the array
console.log(fruits); //will show the array with the new element added
fruits.pop(); //removes the last element from the array
console.log(fruits); //will show the array without the last element

//unshift() and shift() methods
fruits.unshift("Strawberry"); //adds a new element to the beginning of the array
console.log(fruits); //will show the array with the new element added at the beginning
fruits.shift(); //removes the first element from the array

//length of an array
let numofFruits = fruits.length; //length of the array
console.log(`Number of fruits: ${numofFruits}`); //will show the number of elements in the array

//indexing in arrays starts from 0, so the first element is at index 0, second at index 1, and so on
let index = fruits.indexOf("Banana"); //finds the index of the element "Banana" in the array
console.log(`Index of Banana: ${index}`); //will show the index of the element "Banana"

//to loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); //will show each fruit in the array with its index

}

//--> Added in Line⚠️ | To sort we use arrayname.sort(); it sorts aplhabetically
fruits.sort(); //sorts the array in alphabetical order
fruits.sort().reverse(); //reverses the order of the array


//shortcut: for loop
for(let fruit of fruits) {
    console.log(fruit); //will show each fruit in the array

}


//objects in js
console.log("-------------------");
console.log("Learning Objects Now:");

//object = a variable that can hold multiple values in the form of key-value pairs

const person = {
    name: "Adhyayan",
    age: 15,
    employed: false,
    Hobbies: ["Coding", "Gaming", "Eating"],
    address: {
        city: "Jammu",
        Country: "India"
    },
    favoritechar: function(){console.log("My favorite character is Ghost from COD")}
};

console.log(`Name: ${person.name}, age: ${person.age}, Employed: ${person.employed}, hobbies: ${person.Hobbies}, Address: ${person.address.city}, ${person.address.Country}`);
person.favoritechar(); //calling the function inside the object

//functions in js

function happybirthday(username, age) {
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`You are now ${age} years old!`);
}

happybirthday("Nigga", 15);
happybirthday("BroCode", 25);

//reutrn methods in functions

function add(x, y){
    let result = x + y;
    return result; // reutn x + y; //this will return the result of the addition
}

let answer = add(2, 4);
console.log(answer); //will show the result of the addition

function subsctract(a, b){
    let result = a - b;
    return a - b; // return a - b; //this will return the result of the subtraction
}

let answer2 = subsctract(10, 5);
console.log(answer2); //will show the result of the subtraction

//number even or odd?

function iseven(number) {
    if(number % 2 === 0){
        console.log(`${number} is an even number`);
        return true; // returns true if the number is even
    }else{
        console.log(`${number} is an odd number`);
        return false; // returns false if the number is odd
    }

}
//we can also use the function for return like this with itenary function ?
//return number % 2 === 0 ? true : false;

console.log(iseven(10)); //will show true as 10 is even
console.log(iseven(11)); //will show false as 11 is odd

console.log("-------------------");
console.log("Learning Arrow Functions Now:");

const hello = (name, age) => {
    console.log(`Hello ${name}!`);
    console.log("Welcome to the world of JavaScript!");
    console.log(`You are ${age} years old.`);
};

hello("Adhyayan", 15);

setTimeout(HelloHI, 2000);

function HelloHI() {
    console.log("Hello HI!, its all delayed by 2 seconds"); //this will run after 2 seconds
}


//setTimeout(() => console.log("Hello"), 3000);

//Last Topic - Destructuring
function startnewtopic(){
    console.log("----------------")
    console.log("Starting Destructuring");
};

startnewtopic();

let arr = [3, 5];
let [a, b] = arr;
console.log(`a: ${a}, b: ${b}`); //will show a: 3, b: 5

