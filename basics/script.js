let string = "helloXYZABCSushjV";

console.log(string[string.length-1])

let loggedIn = true;
let isMember = true;

let str = loggedIn && isMember ? "Access granted" : "Access denied";
console.log(str);

for (let i = 1; i<16; i++) {
    if (i % 5 == 0) console.log("ASAP FRONTEND");
    else if (i % 2 == 0) console.log("ASAP");
    else console.log("FRONTEND");
}

for (let i = 0; i<string.length; i++) {console.log(string[i])}

function convertUSDToAUD(USD){
    return USD * 1.5;
}

//arrow func

let convertUsdToAud = (USD) => {
    return USD * 1.5;
}
console.log(convertUsdToAud(100)); 
console.log(convertUSDToAUD(100));

let array = [50, 70, 5, 8 , 7, 90];
console.log(array[0]);
console.log(array[array.length-1]);
console.log(array);


// array 2 and array 3 will have the same elements

let array2 = array.filter((element) => {
    if (element > 10) return true;
});
console.log(array2);

array3 = [];
array.filter((element)=>{
    if (element > 10) array3.push(element);
});
console.log(array3);

ages = [20,22,26,16,20]

let permitted = ages.filter((age) => {
    if (age >= 18) return true;
})
console.log(permitted);

USD = [1,5,10,20,100,500]
let AUD = USD.map((element)=>{
    return element * 1.5;
});
console.log(AUD)

let users = []

function signup (email,password,name,discord,subscription,lessonsCompleted) {
    let userobj = {
        email : email,
        password : password,
        name : name,
        discord : discord,
        subscription : subscription,
        lessonsCompleted : lessonsCompleted
    }
    users.push(userobj);
}

signup("abc@gmail.com","abcd1234","Kevin","Kev98","VIP",[1,2,3]);

console.log(users)



//DOM

console.log(document.querySelector("#firsth1"));
console.log(document.getElementById("secondh1"));

function change() {
    document.querySelector("#firsth1").innerHTML = "Learning WEB DEV for the 4th time";
    document.querySelector("#firsth1").style.color = "red";
    document.querySelector("#firsth1").style.fontSize = "50px";
    document.querySelector("#firsth1").style.border = "solid black 5px";
    document.querySelector("#firsth1").style.padding = "20px";
    document.querySelector("#firsth1").style.margin = "20px";
    document.querySelector("#firsth1").style.background = "blue";
    document.querySelector("button").style.backgroundColor = "lightgreen"
};


// rest paramater
function grantAccess(role, ...names) {
    names.forEach((name) => {
        console.log(`Access granted to ${name} with role ${role}`);
    });
}
grantAccess("admin","Kevin","Sushant","Alice","Bob");

function getLabelsHtml(text, sender, ...staff) {
    const labelsHtml = staff.map((staffMember) => {
        `<div class="label">
            <h1>${text}</h1>
            <p>From: ${sender}</p>
            <p>To: ${staffMember}</p>
        </div>`
    }).join('')
    return labelsHtml;
}

// Aynchronous JS
/*
API - application programming interface
used to connect our program with someone else's program

// fetch request

fetch(full_url)
.then(response => response.json())
.then(data => {
    const imageElement = document.createElement('img')
    imageElement.src = data.message
    imageElement.alt = "This is an image of:"
    document.getElementById('img-container').appendChild(imageElement)
    })

async function fetchData() {
    const response = await fetch(full_url)
    const data = await response.json()
    console.log(data)
}

// Promises
fetch(full_url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
.finally(() => console.log('Fetch attempt finished.'))


POST request
try {
const response = await fetch('https://example.com/api/data', {
    method: 'POST',
    body: JSON.stringify({
    title: 'hi',
    body: 'hello world',
    userId: 1}),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    }
})


const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Simulate success or failure
    if (success) {
        resolve('Operation was successful!');
    }
    else {
        reject('Operation failed.');})

anonymous function
// IIF
// declaration 
(function () {
console.log("Anonymous function executed");
})

//invoke: add two brackets at the end of the declaration with/without parameters

(function () {
console.log("Anonymous function executed");
})();

// adding properties to objects

// create object
let person = {
    name: "John"
};

// adding using dot notation
person.age = 30;

// adding using bracket notation
person["city"] = "New York";
person["country"] = "USA";

console.log(person.keys); // property names
console.log(person.values); // property values
console.log(person.keys.length); // number of properties
console.log(person.hasOwnProperty("city")); // true/false based on the presence of property
Object.assign(target, source) // copies properties from source to target object
person.delete("age") // deletes the specified property from the object
Object.freeze(person) // prevents any modifications to the object

// objects in array

const userObj = [
{name: "Alice", age: 25},
{name: "Bob", age: 30},
{name: "Charlie", age: 35}
];


// for each -> makes a new array or gives updated values without modifying the original array
let numbers = [1,2,3,4]
const doubled = numbers.forEach((num) => {
    num * 2})

// map
const doubledMap = numbers.map((num) => {
    return num * 2})

// reduce -> returns a single value after iterating through the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue}, 0)


// find -> returns the first element that satisfies the condition
const found = numbers.find((num) => {
    return num > 2})

// filter -> returns a new array with all elements that satisfy the condition
const filtered = numbers.filter((num) => {
    return num > 2})

// To dynamically inject HTML content into a webpage using javscript
1. select the target element using document.querySelector or document.getElementById
2. create new HTML elements using document.createElement
3. set the content and attributes of the new elements
4. append the new elements to the target element using appendChild or innerHTML 

// Step 1: Define the extractAuthors function with arrow syntax
const extractAuthors = (books) => {
  // Step 2: Check if any book object is missing the 'author' property
  // Use the 'some' method to perform this check
  // If a book is missing the 'author' property, throw an error
  if (books.some(book => !book.hasOwnProperty('author'))) {
    throw new Error("Invalid book object - 'author' property missing");
  }

  // Step 3: Use the 'map' method to transform the array of book objects
  // Extract only the 'author' property from each book
  return books.map(book => book.author);
};

// Example usage:
const libraryBooks = [
  { title: 'Brave New World', author: 'Aldous Huxley' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];

// Step 4: Test the function with the example array
console.log(extractAuthors(libraryBooks)); // Expected output: ['Aldous Huxley', 'J.D. Salinger']

// Additional test cases to demonstrate error handling:
try {
  const invalidBooks = [
    { title: 'Valid Book', author: 'Valid Author' },
    { title: 'Invalid Book' } // Missing author property
  ];
  console.log(extractAuthors(invalidBooks));
} catch (error) {
  console.log(error.message); // Output: "Invalid book object - 'author' property missing"
}

// Test with empty array
console.log(extractAuthors([])); // Output: []

// Test with books that have null/undefined authors
try {
  const booksWithNullAuthor = [
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: null }
  ];
  console.log(extractAuthors(booksWithNullAuthor)); // Output: ['Author 1', null]
} catch (error) {
  console.log(error.message);
}


traversing the dom

const childEl = document.querySelector('.child-class');
const parentEl = childEl.parentNode;
const grandParentEl = parentEl.parentNode;

const pareEl = document.querySelector('.parent-class');
const firstChildEl = pareEl.childNodes[0]; // First child node
const secondChildEl = pareEl.childNodes[1]; // Second child

creating a new element

function createNewElement(newTask) {
    const taskEl = document.createElement('div');
    taskEl.setAttribute('class', 'task');
    const taskContentEl = document.createTextNode(newTask);
    taskEl.appendChild(taskContentEl);
}

*/