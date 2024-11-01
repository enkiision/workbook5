"use strict";

const spongebobCharacters = [
  {
    name: "SpongeBob SquarePants",
    species: "Sea Sponge",
    occupation: "Fry Cook",
    favoriteActivity: "Jellyfishing",
  },
  {
    name: "Patrick Star",
    species: "Starfish",
    occupation: "Unemployed",
    favoriteActivity: "Eating and sleeping",
  },
  {
    name: "Squidward Tentacles",
    species: "Octopus",
    occupation: "Cashier",
    favoriteActivity: "Playing the clarinet",
  },
  {
    name: "Mr. Krabs",
    species: "Crab",
    occupation: "Restaurant Owner",
    favoriteActivity: "Counting money",
  },
  {
    name: "Sandy Cheeks",
    species: "Squirrel",
    occupation: "Scientist/Inventor",
    favoriteActivity: "Karate and science experiments",
  },
  {
    name: "Plankton",
    species: "Plankton",
    occupation: "Restaurant Owner",
    favoriteActivity: "Stealing the Krabby Patty formula",
  },
  {
    name: "Mrs. Puff",
    species: "Pufferfish",
    occupation: "Boating School Instructor",
    favoriteActivity: "Teaching and avoiding SpongeBob",
  },
  {
    name: "Gary the Snail",
    species: "Snail",
    occupation: "Pet",
    favoriteActivity: "Meowing and eating",
  },
  {
    name: "Larry the Lobster",
    species: "Lobster",
    occupation: "Lifeguard",
    favoriteActivity: "Weightlifting and staying fit",
  },
  {
    name: "Karen Plankton",
    species: "Computer",
    occupation: "Plankton's Wife/Assistant",
    favoriteActivity: "Calculating and assisting Plankton",
  },
  {
    name: "Pearl Krabs",
    species: "Whale",
    occupation: "Student",
    favoriteActivity: "Shopping and hanging out with friends",
  },
  {
    name: "Mermaid Man",
    species: "Human",
    occupation: "Retired Superhero",
    favoriteActivity: "Fighting crime",
  },
  {
    name: "Barnacle Boy",
    species: "Human",
    occupation: "Retired Superhero Sidekick",
    favoriteActivity: "Being grumpy",
  },
  {
    name: "Flying Dutchman",
    species: "Ghost",
    occupation: "Ghostly Pirate",
    favoriteActivity: "Scaring people and collecting souls",
  },
  {
    name: "Bubble Buddy",
    species: "Bubble",
  },
];


// let charactersTBody = document.getElementById("charactersTBody");
let charactersTBody = document.querySelector("#charactersTBody");
console.log(charactersTBody);


for (const character of spongebobCharacters) {

  let tr = document.createElement("tr");
  charactersTBody.appendChild(tr)

  let td1 = document.createElement("td");
  td1.innerText = character.name;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = character.species;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = character.occupation;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.innerText = character.favoriteActivity;
  tr.appendChild(td4);
  
 

}
