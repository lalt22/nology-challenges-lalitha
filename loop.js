/*
Create a function with a for loop that will add all the numbers up to n

You should create a variable to set the upper limit of your loop
Your loop should increment by 1 on each iteration
Your loop should print the final result
sum(10) => 55
Bonus:
Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)
*/

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <=n; i++) {
        sum += i;
    }  
    return sum;
}

console.log(sumTo(10));
console.log(sumTo(11));

function sumToNoLoop(n) {
    return (n*(n+1))/2;
}

console.log(sumToNoLoop(10));
console.log(sumToNoLoop(11));
