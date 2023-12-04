console.log(typeof 15);
console.log(typeof 5.5);
console.log(typeof NaN);
console.log(typeof (1 !=2));

console.log("hamburger" + "s");

//NOTE: Addition symbol will concatenate numbers expressed in strings:
/*
    "1" + "1" = 11
    "1" + 1 = 11
    1 + 1 = 2
*/
console.log("1" + "3");

//All other operations (-, /, *) will do the numeric operation, regardless of whether
//wrapped as string or not
/*
    "1" - "3" = -2
    "1" - 3 = -2
    1 - 3 = -2
*/
console.log("1" - "3");
console.log("johnny" - 5);
console.log(99 * "luftbaloons")

// ========  VARIABLES ========
var firstName;
var lastName;
var age;
var ageFloat;
var addString;

firstName = "Lalitha";
lastName = "Seshadri";
age = "22";
ageFloat = "22.9";
addString = 15;

console.log("Hi my name is " + firstName + " " + lastName + " and I am " + age + " years old");


//To get the integer value of a number string, use parseInt for whole numbers
age = parseInt(age);
console.log(age + addString);

//To get float/decimal value of a number string, use parseFloat for decimal numbers
ageFloat = parseFloat(ageFloat)
console.log(ageFloat + addString);


