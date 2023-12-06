/*
Create an array with 3 of your hobbies
Print in the console the first hobby in the array
Remove that first hobby from the array and store that hobby in a variable
Store the length of the array in a variable
Add another hobby at the end of the array
Print that last hobby in the console
Bonus:

Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")
*/

const hobbies = ["dancing", "gaming", "exercising"];

console.log("First hobby: " + hobbies[0]);
const firstHobby = hobbies.shift();
const arrayLength = hobbies.length;
hobbies.push("cooking");
console.log("New last hobby: " + hobbies[hobbies.length-1]);

let stringHobbies = "My hobbies are: " + hobbies.join(", ");

console.log(stringHobbies);

/*
Create an array containing 5 grocery items you often buy
Log this list to the console, make sure the output is pipe delimited
['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'
*/

const groceries = ["coffee", "carrots", "chicken", "chocolate", "eggs"];

let stringGroceries = groceries.join("|");

console.log(stringGroceries);