//map vs for-each
"use strict"

//NOTES: Map holds key-value pairs where the keys can be any data type.-A Map remembers the original insertion order of the keys.

//array of objects that represent a kid
let kids = [
    { first: "Natalie", last: "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
];

//array of strings that reresent the fullname of a kid
let kidNames = kids.map(function (kid) {
    return kid.first + " " + kid.last;
});

console.log(kidNames);


// //practice of writing of setting up a function
// function (){

// }
// function(){

// }
// function(){

// }
// //arrow functions with bodies 
// ()=>{}
// ()=>{}
// ()=>{}

// //arrow functions without bodies if the code is only one line it does not need brackets
// ()=>
