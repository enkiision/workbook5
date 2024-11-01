"use strict"

function compareAscendingNumber(a, b) {
    if (a < b) return -1; // right order
    else if (a == b) return 0; // same values
    else return 1; // swap, wrong order
   }
   let numbers = [3, 27, 400, 1, 111, 5];
   numbers.sort(compareAscendingNumber);
   

   //seperate learned 
//    For anyone who wants the bubbleSort algo. I got you.

// function sort(array){
// for(let I = 0; I < array.length; I++){
// let j=1;
// while(j >0 && array[j] < array[j-I]){
// let temp = array[j];
// array[j] = array[j-I]
// array[j-I] = temp
// j--
// }
// }
// return array
// }

// console.log(sort[2,1,4,7,5,9,8])
   