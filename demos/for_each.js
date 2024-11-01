"use strict"

let kids = [
    { first: "Natalie", last: "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
];

//anon function as a call back function to forEach function 
kids.forEach(function (kid) {
    console.log(kid.first, kid.last);
});

//arrow function as a call back function passed to forEach function 
kids.forEach((kid) => console.log(kid.first, kid.last)); //added , kid.last for further example
