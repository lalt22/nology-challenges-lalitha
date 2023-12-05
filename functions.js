/*Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
moonOrbits(54) => 2
moonOrbits(365) => 13.359
*/

function moonOrbits(orbits) {
    return (orbits/27).toFixed(3);
}

console.log(moonOrbits(54));
console.log(moonOrbits(365));


/*
Write a function that takes the radius of a circle and return its area.
Write a function that takes the radius of a circle and return its perimeter.
circleArea(10) => 314.16
circlePerimeter(10) => 62.83
*/

function circleArea(radius) {
    return (Math.PI * (radius**2)).toFixed(2);
}

function circlePerimeter(radius) {
    return (2 * Math.PI * radius).toFixed(2);
}

console.log(circleArea(10));
console.log(circlePerimeter(10));


/*
Create a function that takes your age in years and returns your age in days.
Create a function that takes your age in years and returns your age in seconds.
ageInDays(32) => 11680
ageInSeconds(32) => 1009152000
*/

//WHAT ABOUT LEAP YEARSSSSSSSSS
function ageInDays(year) {
    return 32*365;
}

function ageInSeconds(year) {
    return (32*365*24*60*60);
}

console.log(ageInDays(32));
console.log(ageInSeconds(32));

/*
There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. 
Return that value.

remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
*/

function remainder(num1, num2) {
    return num1%num2;
}

console.log(remainder(1, 3));

console.log(remainder(3, 4));

console.log(remainder(-9, 45));

console.log(remainder(5, 5));

/*
MVP
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
find the final points for the team and return that value.
*/

function numPoints(num2Pointers, num3Pointers) {
    return (2*num2Pointers) + (3*num3Pointers);
}

console.log(numPoints(2, 4));
console.log(numPoints(1,1));


/*
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true
*/

function lessThan100(num1, num2) {
    if (num1 + num2 < 100) {
        return true;
    }
    else return false;
}

console.log(lessThan100(22,15));
console.log(lessThan100(83,34));
console.log(lessThan100(3,77));