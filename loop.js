// /*
// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result
// sum(10) => 55
// Bonus:
// Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)
// */

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <=n; i++) {
//         sum += i;
//     }  
//     return sum;
// }

// console.log(sumTo(10));
// console.log(sumTo(11));

// function sumToNoLoop(n) {
//     return (n*(n+1))/2;
// }

// console.log(sumToNoLoop(10));
// console.log(sumToNoLoop(11));



// // Recap exercises (loops and methods)
// const pets = ["pixie", "claude", "sebastian", "bug"];
// // -> 1. ['claude', 'sebastian', 'bug', 'pixie']
// // -> 2. ['pixie', 'bug', 'sebastian', 'claude']
// // -> 3. ['bug', 'sebastian', 'pixie']
// // -> 4. ['Bug', 'Sebastian', 'Pixie]
// // -> 5. ['Bug', 'Seb', 'Pix']




// //1.

// let removedElem = pets.shift();
// pets.push(removedElem);
// console.log(pets);

// pets.reverse();
// console.log(pets);

// pets.pop();
// let removedElem2 = pets.shift();
// pets.push(removedElem2);
// console.log(pets);

// for (let i = 0; i < pets.length; i++) {
//     pets[i] = pets[i].charAt(0).toUpperCase() + pets[i].substring(1);
// }
// console.log(pets);

// for (let i = 0; i < pets.length; i++) {
//     pets[i] = pets[i].substring(0,3);
// }
// console.log(pets);


/*
MVP
Using a while loop generate a list of 10 random unique numbers
Each number must be between 0 and 15
Tips
You may need to google how to generate, you can use the Math.random() API
*/

const randNums = [];
while (randNums.length < 15) {
    let randNum = Math.floor(Math.random()*16)
    if (!randNums.includes(randNum)) {
        randNums.push(randNum);
    }
}
console.log(randNums);


/*
Challenge: generateNumbers function
MVP
Create a function that returns a list of random whole numbers given a range

Create a function called generateNumbers
This function should take in 2 numbers
n being the number of numbers to be generated
r being the max range
E.g: n: 10, r: 20: function will generate 10 random numbers between 0 and 20
Function should return n numbers in range 0 <= n < r
Bonus
Add an argument to your function called isUnique
If this is set to true, there should be no duplicate numbers in the output
Bonus
Add validation to your function to prevent negative values for n and r
Add validation to ensure n < r when isUnique is true
*/

function generateRandomNums(num, range, isUnique) {
    if (isUnique) {
        if (num > range) {
            return "Invalid inputs: range must be higher than num";
        }
    }
    if (num < 0 || range < 0) {
        return "Invalid inputs: num and range must be positive numbers";
    }

    let numCount = 0;
    const randNums = [];
    while (numCount < num) {
        randNum = Math.floor(Math.random()*(range+1));
        if (isUnique) {
            if (!randNums.includes(randNum)) {
                randNums.push(randNum);
                numCount++;
            }
        }
        else {
            randNums.push(randNum);
            numCount++;
        } 
    }
    return randNums;
}

console.log(generateRandomNums(10, 10, false));
console.log(generateRandomNums(10, 10, true));

console.log(generateRandomNums(-1, 2, true));
console.log(generateRandomNums(4, 2, true));


function filterString(string) {
    const trimmedString = string.replace(/[^a-zA-Z]/ig, "");
    console.log(trimmedString);
    const stringArr = trimmedString.split("");

    return stringArr.map((element, index) => index % 2 == 0 ? element.toUpperCase() : element.toLowerCase());
}

console.log(filterString('898    te%^$£"&*()st str3552621ing'));