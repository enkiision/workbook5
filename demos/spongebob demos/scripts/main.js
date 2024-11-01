"use strict";

const spongebobCharacters = [
  {
    name: "SpongeBob SquarePants",
    species: "Sea Sponge",
    occupation: "Fry Cook",
    favoriteActivity: "Jellyfishing",
    friendGroup: "Main Characters",
  },
  {
    name: "Patrick Star",
    species: "Starfish",
    occupation: "Unemployed",
    favoriteActivity: "Eating and sleeping",
    friendGroup: "Main Characters",
  },
  {
    name: "Squidward Tentacles",
    species: "Octopus",
    occupation: "Cashier",
    favoriteActivity: "Playing the clarinet",
    friendGroup: "Main Characters",
  },
  {
    name: "Mr. Krabs",
    species: "Crab",
    occupation: "Restaurant Owner",
    favoriteActivity: "Counting money",
    friendGroup: "Bikini Bottom Business Owners",
  },
  {
    name: "Sandy Cheeks",
    species: "Squirrel",
    occupation: "Scientist/Inventor",
    favoriteActivity: "Karate and science experiments",
    friendGroup: "Main Characters",
  },
  {
    name: "Plankton",
    species: "Plankton",
    occupation: "Restaurant Owner",
    favoriteActivity: "Stealing the Krabby Patty formula",
    friendGroup: "Bikini Bottom Business Owners",
  },
  {
    name: "Mrs. Puff",
    species: "Pufferfish",
    occupation: "Boating School Instructor",
    favoriteActivity: "Teaching and avoiding SpongeBob",
    friendGroup: "Educators",
  },
  {
    name: "Gary the Snail",
    species: "Snail",
    occupation: "Pet",
    favoriteActivity: "Meowing and eating",
    friendGroup: "Main Characters",
  },
  {
    name: "Larry the Lobster",
    species: "Lobster",
    occupation: "Lifeguard",
    favoriteActivity: "Weightlifting and staying fit",
    friendGroup: "Sports and Fitness Enthusiasts",
  },
  {
    name: "Karen Plankton",
    species: "Computer",
    occupation: "Plankton's Wife/Assistant",
    favoriteActivity: "Calculating and assisting Plankton",
    friendGroup: "Bikini Bottom Business Owners",
  },
  {
    name: "Pearl Krabs",
    species: "Whale",
    occupation: "Student",
    favoriteActivity: "Shopping and hanging out with friends",
    friendGroup: "Teenagers of Bikini Bottom",
  },
  {
    name: "Mermaid Man",
    species: "Human",
    occupation: "Retired Superhero",
    favoriteActivity: "Fighting crime",
    friendGroup: "Superheroes",
  },
  {
    name: "Barnacle Boy",
    species: "Human",
    occupation: "Retired Superhero Sidekick",
    favoriteActivity: "Being grumpy",
    friendGroup: "Superheroes",
  },
  {
    name: "Flying Dutchman",
    species: "Ghost",
    occupation: "Ghostly Pirate",
    favoriteActivity: "Scaring people and collecting souls",
    friendGroup: "Otherworldly Characters",
  },
  {
    name: "Bubble Buddy",
    species: "Bubble",
    occupation: "Friend of SpongeBob",
    favoriteActivity: "Floating around and having fun",
    friendGroup: "Main Characters",
  },
];

const friendGroups = [
  "Main Characters",
  "Bikini Bottom Business Owners",
  "Educators",
  "Sports and Fitness Enthusiasts",
  "Teenagers of Bikini Bottom",
  "Superheroes",
  "Otherworldly Characters",
];

//load friend group dropdown
const friendGroupsDropdown = document.querySelector("#friendGroupsDropdown");

for (const friendGroup of friendGroups) {
  let option = document.createElement("option");
  option.value = friendGroup;
  option.innerText = friendGroup;
  friendGroupsDropdown.appendChild(option);
}

// //load the characters table
// // let charactersTBody = document.getElementById("charactersTBody");
// let charactersTBody = document.querySelector("#charactersTBody");

// for (const character of spongebobCharacters) {
//   let tr = document.createElement("tr");
//   charactersTBody.appendChild(tr);

//   let td1 = document.createElement("td");
//   td1.innerText = character.name;
//   tr.appendChild(td1);

//   let td2 = document.createElement("td");
//   td2.innerText = character.species;
//   tr.appendChild(td2);

//   let td3 = document.createElement("td");
//   td3.innerText = character.occupation;
//   tr.appendChild(td3);

//   let td4 = document.createElement("td");
//   td4.innerText = character.favoriteActivity;
//   tr.appendChild(td4);

//   let td5 = document.createElement("td");
//   td5.innerText = character.friendGroup;
//   tr.appendChild(td5);
// }

// function filterByFriendGroup() {
//   let selectedFriendGroup = friendGroupsDropdown.value;
//   let filteredCharacters = spongebobCharacters.filter((character)=> character.friendGroup = selectedFriendGroup)
//   charactersTBody.innerHTML = "";

//   for (const character of filteredCharacters) {
//     let tr = document.createElement("tr");
//     charactersTBody.appendChild(tr);
  
//     let td1 = document.createElement("td");
//     td1.innerText = character.name;
//     tr.appendChild(td1);
  
//     let td2 = document.createElement("td");
//     td2.innerText = character.species;
//     tr.appendChild(td2);
  
//     let td3 = document.createElement("td");
//     td3.innerText = character.occupation;
//     tr.appendChild(td3);
  
//     let td4 = document.createElement("td");
//     td4.innerText = character.favoriteActivity;
//     tr.appendChild(td4);
  
//     let td5 = document.createElement("td");
//     td5.innerText = character.friendGroup;
//     tr.appendChild(td5);
//   }

// }
