// let n = 6;

// if (n%2 === 0) {
//     console.log("n is even");
// }
// else {
//     console.log("n is odd");
// }


//CHALLENGE: Comparing Numbers
// var x = 1000;
// var y = 2245;

// if (x > y) {
//     console.log(`${x} is greater than ${y}`);
// }
// else if (x < y) {
//     console.log(`${x} is smaller than ${y}`);
// }

// else {
//     console.log(`${x} is equal to ${y}`);
// }

//CHALLENGE: User Input Type
// var userInput = prompt("Say something: ");
// var toNum = Number(userInput);

// if (isNaN(toNum)) {
//     console.log(userInput);
    
// }
// else if (!isNaN(toNum)) {
//     console.log(userInput**2);
// }
// else {
//     console.log("Invalid Input");
// }

//CHALLENGE: Tell Me The Day

// MVP:
// Create a switch block that will log a string for each day of the week.
// Create a variable called day
// The switch will be given a number and return the matching days of the week
// e.g. if day = 2, the switch should print Today is Tuesday in the console.
// Your switch block should also handle numbers out of range

var day = 0;

switch (day) {
    case 1:
        console.log("Today is Monday");
        break; 
    case 2:
        console.log("Today is Tuesday"); 
        break;
    case 3:
        console.log("Today is Wednesday"); 
        break;
    case 4:
        console.log("Today is Thursday"); 
        break;
    case 5:
        console.log("Today is Friday"); 
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid number"); 
}


// //CHALLENGE: Eye Color
// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, 
//for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the following image as a reference
// Bonus:
// Store the value of the child’s eye colour and write a switch statement 
//- depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

var parent1 = "green";
var parent2 = "blue";
var blueChance;
var brownChance;
var greenChance;
var child;

switch (parent1) {
    case "brown":
        if (parent2 == "brown") {
            blueChance = 6.25;
            brownChance = 75;
            greenChance = 18.75
            child = "brown";
            break;
        }
        else if (parent2 == "blue") {
            blueChance = 50;
            brownChance = 50;
            greenChance = 0;
            child = "brown";
            break;
        }
        else if (parent2 == "green") {
            blueChance = 12.5;
            brownChance = 50;
            greenChance = 37.5;
            child = "brown";
            break;
        }
        
    case "green":
        if (parent2 == "brown") {
            blueChance = 12.5;
            brownChance = 50;
            greenChance = 37.5;
            child = "brown";
            break;
        }
        else if (parent2 == "blue") {
            blueChance = 50;
            brownChance = 0;
            greenChance = 50;
            child = "green";
        }
        else if (parent2 == "green") {
            blueChance = 25;
            brownChance = "<1";
            greenChance = 75;
            child = "green";
        }
        break;
            
    case "blue":
        if (parent2 == "brown") {
            blueChance = 50;
            brownChance = 50;
            greenChance = 0;
            child = "brown";      
        }
        else if (parent2 == "blue") {
            blueChance = 99;
            brownChance = 0;
            greenChance = 1;
            child = "blue";
        }
        else if (parent2 == "green") {
            blueChance = 50;
            brownChance = 0;
            greenChance = 50;
            child = "blue";
        }
        break;          
}
console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is ${blueChance}%, brown is ${brownChance}% and green is ${greenChance}%`);
switch (child) {
    case "brown":
        console.log("Your child has my favourite eye color");
        break;
    case "green":
        console.log("Your child has a mediocre eye color (LOL)");
        break;
    case "blue":
        console.log("Your child has my least favourite eye color");
        break;
}