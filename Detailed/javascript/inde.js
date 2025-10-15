//console.log("Hello");
//console.log("How are you?");

//to print on the webpage and not on the console use
//document.getElementById("myh1").textContent = "Wassup"; //myh1 is an id of h1 tag in inde.html
//document.getElementById("myp").textContent = "This is a paragraph";

//window.alert("This is an alert!!");

//this is a comment just like in C
/*this is also a comment*/

/*document.getElementById("myh1").textContent = "Wassup"; //myh1 is an id of h1 tag in inde.html
document.getElementById("myp").textContent = "This is a paragraph";
let x; //declaration
x = 10; //initialization
let y = 20; //declaration and initialization
console.log(x , y);
let age = 25;
let gpa = 9.87;
console.log(`You are ${age} years old`);
console.log(`Your GPA is ${gpa}`);

let fname = "John";
let lname = "Doe";
console.log(`Your full name is ${fname} ${lname}`);

let online = true;
console.log(`Am i online? ${online}`);


let age = 18;
let fname = "Aayushmaan";
let student = true;

document.getElementById("p1").textContent = `Your name is ${fname}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Are you a student? ${student}`;

//let stu = 30;
//stu = stu ** 3; //operators same as other languages
//console.log(stu)
*/


//USER INPUT
//Easy way -- window prompt
//let username = window.prompt("Enter username: ")
//professional way -- html button
let username;

document.getElementById("sub").onclick = function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hello ${username}`
}

//type conversion
let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(age);

//constants
const pi = 3.1415;
let radius , circum;
radius = window.prompt("Radius? ");


document.getElementById("circle").onclick=function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circum = 2*pi*radius;
    console.log(`Circumference = ${circum}`);
    document.getElementById("myh3").textContent = `${circum}`; 

}

/* Math functions
Math.PI
Math.E - euler's number
Math.round(x)
Math.floor(x)
Math.ceil(x)
Math.trunc(x)
Math.pow(x,y)
Math.sqrt(x)
Math.abs(x)
Math.sin(x), Math.cos(x), Math.tan(x)
Math.sign(x) - gives sign -1 or 1 or 0 (signum)
Math.max(a,b,c,...)
Math.min(a,b,c,...)
Math.random() 

if(condition){
    block
}
else if(condition){
    block
}
else{
    block
}

operators:
&& - and 
|| - or
! - not

var dogHungry = true;
console.log("Dog is hungry: ",dogHungry); //Dog is hungry:  true
console.log("Dog is hungry: ",!dogHungry); //Dog is hungry:  false
dogHungry = !dogHungry; //value of DogHungry is false now

== --> equality check , no datatype check
=== --> strict equality check , datatype check
1984 != "1984" // inequality operator gives false
1984 !== "1984" // strict inequality operator gives true


var myAge = 18;
var isEven = my age % 2 == 0;
console.log(isEven);

switch(value){
case: condition1
    block1
    break;
case: condition2
    block2
    break;
default:
    block3
}

loops:

1. for loop
for(let i=0; i<5; i++){
    console.log(i);
}

2. while loop

var i = 200;
while(i<=250){
    console.log(i);
    i++;
}

functions

var colors = ['red','orange','green','blue','black','white','yellow']; //array of colors

function printColors(array){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
printColors(colors)


object literals

dot notation

var hero = {
    name: "Hero",
    power: "Strength",
    age: 18,
    isHero: true,
}
    console.log(hero.name);
    hero.age+=1;
    console.log(hero.age);

bracket notation
var castle{}
castle["price"] = 2000000;
castle["location"] = "Mountain range";
castle["hasFireplace"] = true;

var key = "price";
console.log(castle[key]); //prints 2000000

arrays
array.push(<new  element>); //adds an element to the end of the array
array.pop(); //removes the last element from the array
array.shift(); //removes the first element from the array
array.unshift(<new element>); //adds an element to the beginning of the array
array.length;//gives length of the array
array.indexOf("value");//gives index of the element named value in the array
array.splice(<index>,<no of values>); //removes <no of values> values from the array starting at index <index>
array.slice(<index>,<no of values>); //returns a new array containing <no of values> values



var hotel = {
    name: "Hotel California",
    rooms: 150,
    star: 5,
    isFull: false
}

hotel.details = function(){
conssole.log("This is a 5 star hotel");
}

error handling
function addTouristSurcharge(payment) {

    try {
        if (typeof (payment) != 'number') {
            throw new ReferenceError('payment is not a number')
        }
        else {
            console.log(payment + 10)
        }
    }
    catch(err) {
        console.log('Error: ' + err)
    }
    
}

addTouristSurcharge(60)

typeof(var) //used to check the datatype of variable var



constructor

function Cons(price,quantity){
this.price = price;
this.quantity = quantity;
}

const obj1 = new Cons(5000,4);


class

class Books{
constructor(title,author,isAvailable){
this.title = title;
this.author = author;
this.isAvailable = isAvailable;
}
toggleisAvailable(){ //function inside a class does not need function keyword
this.isAvailable =!this.isAvailable;}}

const book1 = new Book("1984","George Orwell",true);


superclass
class Book {
    constructor(title, author, isInStock) {
        this.title = title;
        this.author = author;
        this.isInStock = isInStock;
    }
    toggleIsInStock() {
        this.isInStock = !this.isInStock;
    }
    getPrototype() {
        console.log(Object.getPrototypeOf(this))
    }
}

class RareBook extends Book {
    constructor(title, author, isInStock, location, isVerified) {
        super(title, author, isInStock)
        this.location = location;
        this.isVerified = isVerified;
    }
    getLocation() {
        console.log(this.location)
    }
    toggleIsVerified() {
        this.isVerified = !this.isVerified;
        if (this.isVerified) {
            console.log(`${this.title} has been verified by an independent expert.`)
        }
        else {
            console.log(`${this.title} has not been verified by an independent expert.`)
        }
    }
    toggleIsInStock() {
        super.toggleIsInStock()
        if (this.isInStock) {
            console.log(`${this.title} is in stock.`)
        }
        else {
            console.log(`${this.title} is not in stock.`)
        }
    }
}

const book3 = new RareBook('Romeo and Juliet', 'William Shakespeare', false, 'London', false)
book3.toggleIsInStock()

for of loop
const colors = ['red', 'blue', 'green', 'yellow', 'black'];

for(let color of colors){
    console.log(color);
}

const person = {name: 'John Doe', age: 30, city: 'New York'};
console.log(Object.keys(person)); //prints a list of keys

const personValues = Object.values(person);//prints a list of valuea

const personEntries = Object.entries(person); //prints a list of key-value pairs


arrow functions 
syntax: (parameter)=>code

const sum = (a, b) => console.log(a + b);
const multiply = (a, b) => console.log(a * b);
const greet = (name) => console.log(`Hello, ${name}!`);
greet("Aayushmaan");
sum(5,5);
multiply(40,50);


forEach():

syntax: array.forEach(function) //used to appply the function to all elements of the array
phoneNumbers.forEach(function(num){
     numbersWithInternationalCode.push(`+44 ${num}`)
map():

syntax: array.map(function) //used to create a new array with the results of calling the function on every element in the array
eg: const phoneNumbers = ['7876519385', '7583958601', '715902367', '7563829046', '7567231983']
    const numbersWithInternationalCode = phoneNumbers.map(function(num){
    numbersWithInternationalCode.push(`+44 ${num}`)
})
or
const numbersWithInternationalCode = phoneNumbers.map(function(num){
    return `+44 ${num}`
})

filter():

syntax: array.filter(function) //used to create a new array with all elements that pass the test implemented by the provided function
eg:const validatedPhoneNumbers = phoneNumbers.filter(function(num){
    return num.length == 10
})

console.log(validatedPhoneNumbers)
//prints ['7876519385', '7583958601', '7563829046']


reduce(): reduce the elements of array to a single element
const prices = [5,10,15,30,50,100];
const total = prices.reduce(sum);

console.log(`$${total}`);

function sum(accumulator, currentValue) {
  return accumulator + currentValue; //adds all elements
}


DATA STRUCTURE
1. MAP

const dinnerGuests = new Map()
dinnerGuests.set(1, "Tom");
dinnerGuests.set(2, "Jane");
dinnerGuests.set(3, "John");

console.log(dinnerGuests.get(2)); //prints "Jane"


2. SET
const dates = ['2003', '2004', '2004', '2006', '2008', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2015', '2017', '2018', '2020', '2020', '2020', '2022'];
const UniqueDates = new Set(dates);


spread operator[...]
const oscarWinnersOne = {2018: 'Green Book', 2017: 'The Shape of Water', 2016: 'Moonlight'};
const oscarWinnersTwo = {2021: 'Nomadland', 2020: 'Coda', 2019: 'Parasite'};
let oscarWinner = {...oscarWinnersOne, ...oscarWinnersTwo};
oscarWinner.2015 = "Spotlight";
console.log(oscarWinner);

rest operator...
function openFridge(...foods){
console.log(fridge);}
openFridge("apple", "banana", "orange");//any no of arguements can be given



string manipulation
let username = "Username0019alright";
console.log(username.charAt(0));//prints char at index 0
console.log(username.indexOf("a"));//prints index of a
console.log(username.length);//prints length of username
console.log(username.trim());//trims whitespaces at both ends
console.log(username.toUpperCase());//converts to upper case
console.log(username.toLowerCase());//converts to Lower case
console.log(username.repeat(x));//repeats the string x times
console.log(username.startsWith("value"));//returns true or false
console.log(username.endsWith("value"));//returns true or false
console.log(username.includes("value"));//returns true or false
console.log(username.split(""));//splits the string into an array of characters
console.log(username.replace("value", "newvalue"));//replaces the first occurrence of value with newvalue
console.log(username.slice(0,5));//returns a new string from index 0 to index 4
console.log(string.padStart(15,'0'));//makes the string 15 characters long by preceding with 0
console.log(string.padEnd(15,'0'));//makes the string 15 characters long by appending with 0



method chaining
console.log(username.trim().charAt(0).toUpperCase());


callbacks
a function passed as an argument to another function
to guarantee a particular order of execution

function Hello(){
setTimeout(() => {
    console.log("Hello from setTimeout");
}, 2000);}
function Goodbye(){
console.log("Goodbye");}

the above code will display goodbye before hello 
so to correct it we use callbacks as


Hello(Goodbye);
function Hello(callback){
setTimeout(() => {
    console.log("Hello from setTimeout");
}, 2000);
callback();}
function Goodbye(){
console.log("Goodbye");}



getter //special method that makes a property readable
setter //special method that makes a property writable

class Rect{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
    if(newWidth > 0){
        this._width = newWidth;
    }else{
        console.log("Invalid width. Width should be a positive number.");
    }
    }
    set height(newHeight){
    if(newHeight > 0){
        this._height = newHeight;
    } else{
        console.log("Invalid height. Height should be a positive number.");
    }}
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    }
const rect = new Rect(4,8);

console.log(rect.width);
console.log(rect.height);


destructuring: //basically unpacking an array
let a = 1, b = 2;
[b , a] = [a , b];

const colors = ["red","blue","green","white","black"];
[colors[0],colors[4]] = [colors[4],colors[0]];


array of objects

fruits = [{name: "apple", color: "red", calories: 95},
          {name: "banana", color: "yellow", calories: 195},
          {name: "orange", color: "orange", calories: 55},
          {name: "mango", color: "yellow", calories: 205}];
console.log(fruits[0].name) //prints apple
and so on

fruits.push(name: "grapes", color: "green", calories: 70);


sorting
sort()-> used to sort an array in place in lexicographical order and not in
         alphabetical order. lexicographical order = number + alphabet + strings in order.


let num = [1,2,10,3,4,5,7,8,9,6];
num.sort();
console.log(num); //prints [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
to fix use- 
num.sort((a,b) => a - b); //prints [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num.sort((a,b)=>b-a); //prints [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
array.sort((a,b)=>a.name.localCompare(b.name)); //sorting strings lexicographically
for reverse- b.name and a.name interchange


DATE OBJECTS
const date = new Date();
console.log(date);//prints the current date and time

Date(year,month,day,hour,minute,second,ms) //can use integer declaration
Date("2024-01-02T12:00:00Z") //string value

date.getFullYear() //year
date.getMonth() //0-11
date.getDate() //the date
date.getHour() //hour
date.getMinutes() //minute
date.getSeconds() //second
date.getDay()//0-6 day of the week

date.setFullYear(2924) //sets year to 2924
date.setMonth(11) //sets month to December
date.setDate(31) //sets date to 31st
date.setHours(23) //sets hour to 23
date.setMinutes(59) //sets minute to 59
date.setSeconds(59) //sets second to 59
date.setMilliseconds(999) //sets milliseconds to 999




Closures
function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        return outerVariable + innerVariable;
    }
}
innerFunction can access everything of outerFunction

function createGame(){

let score = 0;
function increaseScore(points){
score += points;
console.log(`+${points}pts`);}

function decreaseScore(points){
score -= points;
console.log(`-${points}pts`);}

function getScore(points){
return score;
}
return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(100);
game.decreaseScore(50);
console.log(game.getScore()); //prints 50



setTimeout() //delay for x milliseconds

function Hello(){
window.alert("Hello!");}

setTimeout(Hello , 5000); //prints Hello after 5s
clearTimeout(timeoutID);//cancels the timeout function including 
                          the printing entire function



ES6 modules- external file that contains reusable codes and can be
             imported in other js files

Synchronous - executes line by line in a sequential manner
              waits for the previous lines to finish execution

Asynchronous - allows multiple lines to be executed concurrently
              does not wait for the previous lines to finish execution
setTimeout() is asynchronous



Error Handling:
try{} - write the code which can generate an error inside this block
catch(error){} - catch the error and handle it inside this block
finally{} - this block will always execute, regardless of whether an error occurred or not


DOM - Document object Model
it provides an API to interact with the webpage dynamically
console.log(document) //displays the html code
console.dir(document) //displays the properties of the document

we can dynamically change the properties of the document as
document.title = "Hello World!";
document.body.style.backgroundColor = "black";



Element Selectors:
method used to target and manipulate HTML elements
They allow you to interact with one or multiple HTML elements from the DOM
you can dynamically change the properties of the elements using the css methods like
element.style.property = "value";

document.getElementbyId("") //returns the element or NULL(only for ID)
document.getElementsByClassName() //html collection
document.getElementsByTagName() //html collection
document.querySelector() //returns the first matching element(for ID, class, all of them)
document.querySelectorAll() //returns all matching elements

html methods dont have a forEach(). to use forEach()-
Array.from(html_collection).forEach(value => {
    value.style.backgroundColor = "blue";})




DOM Navigation: the process of navigating through the structure of an HTML document using javascript

.firstElementChild //first element in the particular container
.lastElementChild //last element in the particular container
.nextElementSibling //next element in the particular container
.previousElementSibling //previous element in the particular container
.children //returns a live HTMLCollection of child elements (use index for particular element)
.parentElement //returns the parent element of the current element



classList

const mybutton = document.getElementById("mybutton");
mybutton.classList.add("enabled"); //adds the class "enabled" to the button
mybutton.classList.remove("enabled"); //removes the class "enabled" from the button
and so on you can add a class to any html object dynamically if its declared in css



Promises:
An object that manages asynchronous functions
Wrap a promise object around {async code}
"I promise to return a value"
pending -> resolved or rejected
new promise((resolve,reject) => {async code});

Do these in order
1. walk the dog
2. clean the kitchen
3. take out the trash


function walkdog(callback){
setTimeout(() => {
    console.log("Task 1 is done");
    },2000);
}

function cleankitchen(callback){
setTimeout(() => {
    console.log("Task 2 is done");
    },4000);
}

function trashout(callback){
setTimeout(() => {
    console.log("Task 3 is done");
    },1000);
}

walkdog(()=>{               //this thing becomes complex so we use promises
    cleankitchen(()=>{      //so we put the async code of each function in promises
        trashout(()=>{
            console.log("All tasks are done");
        });
    });
})

//code with promises
//if anyone is rejected, all other following it are not executed

function walkdog(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Task 1 is done");
    },2000);
});
}

function cleankitchen(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Task 2 is done");
    },4000);
});
}

function trashout(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Task 3 is done");
    },1000);
});
}
walkdog().then(value => {console.log(value);return cleankitchen()})
         .then(value => {console.log(value);return trashout()})
         .then(value => {console.log(value);console.log("All tasks finished")}); 



as an alternative we can use async/await
async - makes an async function return a promise
await - makes an async function wait for a promise

function walkdog(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Task 1 is done");
    },2000);
});
}

function cleankitchen(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Task 2 is done");
    },4000);
});
}

function trashout(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Task 3 is done");
    },1000);
});
}

async function doTasks(){

const dogwalk = await walkdog();
console.log(dogwalk);

const kitchenclean = await cleankitchen();
console.log(kitchenclean);

const outtrash = await trashout();
console.log(outtrash);

console.log("All tasks done");

}


JSON (JavaScript Object Notation) FILES:
Data interchange format, used to interchange data between a server
and a web application
{key:value} or {value1 , value2 , ...}
JSON.stringify() - JS object to JSON string
JSON.parse() - JSON string to JS object

const names = ["spongebob","patrick","squidward","Mr.Krabs"];
const namesinjson = JSON.stringify(names);

title = "" in html tags shows the text within quotes when you hover over that element


DOM objects-
document.body.innerHTML = 'ok'; //changes the body of the webpage to 'ok'
document.title = 'ok'; //changes the title of the webpage to 'ok'


.innerHTML : gives the html object of the selected element without the tags

onkeydown = "event.key" //gives the key pressed using the keyboard [in html]
*/



