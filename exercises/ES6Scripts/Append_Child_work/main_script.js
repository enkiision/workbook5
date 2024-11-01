"use strict"

const plusSizeWebsites = [
        {
          name: "Torrid",
          website: "https://www.torrid.com",
          sizes: "10-30 (3X-6X)",
          description: "Trendy, plus-size clothing and accessories with options for work, casual, and formal wear."
        },
        {
          name: "Lane Bryant",
          website: "https://www.lanebryant.com",
          sizes: "10-40 (3X-6X)",
          description: "A variety of plus-size fashion, including bras, activewear, and professional clothing."
        },
        {
          name: "Eloquii",
          website: "https://www.eloquii.com",
          sizes: "14-32 (3X-5X)",
          description: "Fashion-forward clothing, from casual to formal, designed specifically for plus-size women."
        },
        {
          name: "Universal Standard",
          website: "https://www.universalstandard.com",
          sizes: "00-40 (3X-5X)",
          description: "Inclusive brand offering minimalist, high-quality wardrobe essentials in an extensive size range."
        },
        {
          name: "Ashley Stewart",
          website: "https://www.ashleystewart.com",
          sizes: "12-36 (3X-6X)",
          description: "Bold and stylish plus-size clothing, known for bright colors and body-positive styles."
        },
        {
          name: "Fashion to Figure",
          website: "https://www.fashiontofigure.com",
          sizes: "12-28 (3X-4X)",
          description: "Trendy and affordable plus-size clothing, including activewear and stylish casual options."
        },
        {
          name: "Avenue",
          website: "https://www.avenue.com",
          sizes: "14-32 (3X-5X)",
          description: "Casual and professional plus-size clothing and shoes, focusing on comfort and affordability."
        },
        {
          name: "Catherines",
          website: "https://www.catherines.com",
          sizes: "0X-5X",
          description: "Plus-size fashion that emphasizes comfort and fit, particularly for mature women."
        },
        {
          name: "Dia & Co",
          website: "https://www.dia.com",
          sizes: "14-32 (3X-5X)",
          description: "Personal styling service and plus-size fashion, offering both subscription and one-time options."
        },
        {
          name: "Girlfriend Collective",
          website: "https://www.girlfriend.com",
          sizes: "XXS-6XL",
          description: "Sustainable activewear made from recycled materials, available in an inclusive range of sizes."
        }
      ];
      
let companyTbody = document.querySelector("#companyTbody"); //review this syntax  querySelector and the "#"

// KEY |A| short/effcient method , |B| long way is useful to know , |W| working , |NW| not working

function buildTableRow(information) {
      // let tr = document.createElement("tr"); // not showing anything until... I had to fix the tBody name it was from my example. Should be companyTbody|B|
    // companyTbody.appendChild(tr)||B||
    let tr = companyTbody.insertRow(); //|A||W|

    // let td1 = document.createElement("td");||B||
    // td1.innerText = information.name; // the ConstVariable.tableHeading||| no uppercase name because that isn't the name in the Array. ||long way|||B|
    // tr.appendChild(td1); // |W|||B||
    let td1 = tr.insertCell();//|A| |NW|, how to fix:
    td1.innerText = information.name//|A| function wasn't complete. function name(params) {} missing curly braces || |W|

    // let td2 = document.createElement("td"); //code running is aware of order because it goes in acending, then left to right. You don't need something explicitly saying I'm placing content under Websites ||long way|||B|
    // td2.innerText = information.website; // does not need to be the exact wording but stay consistant website>> Websites both work||long way||
    // tr.appendChild(td2); //this now works |B|
    let td2 = tr.insertCell();// inputs the heading which is Website |A|
    td2.innerText = information.website // adds the rest of the information |A||W|


    // let td3 = document.createElement("td");
    // td3.innerText = information.sizes;
    // tr.appendChild(td3);|W|
    let td3 = tr.insertCell();//|A|
    td3.innerText = information.sizes // |A||W|

    // let td4 = document.createElement("td");
    // td4.innerText = information.description; // make sure to match the heading named in the ARRAY 
    // tr.appendChild(td4); |B||W|
    let td4 = tr.insertCell();//|A|
    td4.innerText = information.description// |A||W|
}

console.log(companyTbody); //nothing showing in body on html yet, Inspect Console recognizes theres a companyTbody to be input
for (const website of plusSizeWebsites) { // when you pass a variable > it becomes an argument which is website and information is a parameter. One is being copied into another (maybe being renamed) these aren't the same thing
  buildTableRow(website)
}
//all of this works for setting up the table. Try to practice find first filter and sort. for extra learn how to apply active links to the websites.

//I want to create a dropdown list. directions to how to: 1). create a const for content like sizes Offered 2). 3). 4).

// Start HERE
const sizesOffered = [
  {id: 1, name:"Torrid", "	10-30 (3X-6X) " },
  {id: 2, name:"Lane Bryant", " 10-40 (3X-6X) " },
  {id: 3, name:"Eloquii", " 14-32 (3X-5X) " },
  {id: 4, name:"Universal Standard", " 00-40 (3X-5X) "},
  {id: 5, name:"Ashley Stewart", " 12-36 (3X-6X) "},
  "12-28 (3X-4X) ",
  "14-32 (3X-5X) ",
  "0X-5X ",
  "14-32 (3X-5X)",
  " XXS-6XL "
];

const sizeOffersDropdown = document.querySelector("#sizeOffersDropdown"); // Step 2

for (const sizeOffered of sizesOffered) { // I did this first which is wrong this is 3rd step, Identify the query selector and use [] instead of {}. This isn't an array=[] these are strings of information for my dropdown list
  let option = document.createElement("option")
  option.value = sizeOffered;
  option.innerText = sizeOffered;
  let td3 = document.getElementById("sizesOffered"); //not right this messes up the script
  sizeOffersDropdown.appendChild(option) // error on append child
  // {id: 1, name:"Torrid", }
  // {id: 2, name:"Lane Bryant", }
  // {id: 3, name:"Eloquii", }
  // {id: 4, name:"Universal Standard", }
  // {id: 5, name:"Ashley Stewart", }
  // {id: 6, name:"Fashion to Figure", }
  // {id: 7, name:"Avenue", }
  // {id: 8, name:"Catherines", }
  // {id: 9, name:"Dia & Co", }
  // {id: 10, name:"Girlfriend Collective", } //this I got confused with the list of const above is correct
}
