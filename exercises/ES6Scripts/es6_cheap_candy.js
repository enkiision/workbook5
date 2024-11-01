"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];
   // 1| Which candies costs less than $4.00? for filter I know because the js needs to filter the prices out.
   // 2| Which candies has "M&M" its name? >> filter Multiple is key << we need to locate and return the products with m&m in it try to use arrow
   // 3| Do we carry "Swedish Fish"? find first boolean. Do we = true vs. false, We need to find the swedish fish first and display that it is there and true

    //  1| 
    let inexpensiveProducts = products.filter(function(product){ // we want filter because its multiple and filter needsa a condition
        return product.price < 4.00;
    }) 
    console.log(inexpensiveProducts);
    

    //  2| 
    let mmProducts = products.filter(function(product){ // we want filter because its multiple and filter needsa a condition
        return product.product == " M&Ms";
    }) 
    console.log(mmProducts);  
