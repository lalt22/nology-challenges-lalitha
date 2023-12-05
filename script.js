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

firstName = parseInt(firstName);
console.log(firstName);


//====== OPERATORS =======



// 2 == "2"; //true
// 2 === 2; //true
// 2 === "2"; //false - different types
// "2" + 3 == 23; //true
// "2" + 3 === 5; //false - string concat w +
// 10 % 3; //1
// 10 % 3 === 1; //true
// (100 % 7) % 5; // 2 % 5 ==> 2
// (100 % 7) % 5 !== 0; //true
// (100 % 7) % 9 == 2; // (100%7) == 2 ==> 2 % 9 == 2 ==> 2==2 ==>  true
// !(10 % 2); // 10 % 2 = 0 ==> !(0) = NOT FALSE ==> true
// !!!!((10 % 7) % 3); // 10 % 7 = 3 ==> 3 % 3 = 0 ==> !(0) = 1 ==> !(1) = 0 ==> !(0) = 1 ==> !(1) ==> 0 ==> false
// 10 % 3 === -1 % 2; // LHS: 10 % 3 = 1  ==> RHS: 1 ==> true
//(892783 != "89278" + 3) == 0; //true ==> string concat means the bracket statement is false (thus == 0). Then we compare if it equal to 0. 0 == 0, thus false

// true && false; //false ==> both values must be true when using && for the result to be true
// false || true; //true ==> only one value needs to be true when using || for the result to be true
//For these two, looking at bitwise operations and binary logic helps with understanding and making this more intuitive
//https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/ just look at the bitwise AND and bitwise OR explanations, everything
//else is really out of scope haha

// true || false; //true 
// true || false; //true
// true || false + true; // false + true == 0 + 1 = 1 == true ==> true
// true * false && false + true; //LHS: true * false == 0 * 1 = 0 == false ==> RHS: false + true == 0 + 1 = 1 == true ==> false && true == false
//Continuation of above

//10 && 123 && -1 && 3; //true, value 3 ==> negative numbers (other than -0) are truthy values. Last truthy value taken
//10 && 123 && 0 && 3; //false ==> 0 is a falsy value
console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1); //FALSE ==> 
/*  (123 || "") = 1 (equivalent to 1 || 0 as seen above). 
    (10 && (123 || "")) == (10 && 1) == (1 && 1) == 1
    parseInt("Roisin") = NaN == "falsy"
    (10 && (123 || "") && parseInt("Roisin")) == (1 && 0) == 0
    23/23-1 == 23/22 == truthy (non-zero number) == 1
    (10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1 == (0 || 1) == 1
    Thus, since final evaulation = 1, result is true

    THATS WRONG ^^^^
    THIS IS CORRECT vvvv

    (123 || "") = 123 (truthy)
    (10 && 123) = 123 (truthy)
    parseInt("Roisin") = NaN (falsy)
    23 / 23 - 1 = (23/23) - 1 = (1) -1 = 0
    (truthy && truthy && falsy) || 0 = falsy || 0 = 0
    Final evaluation = 0

*/


// 3 && "Calum" && ("" || 26); //true
/*
    3 = 1
    "Calum" = 1
    "" = 0
    26 = 1

    3 && "Calum"  == 1 && 1 == 1
    "" || 26 == 0 || 1 == 1
     3 && "Calum" && ("" || 26) == 1 && 1 == 1
    
     Final evaluation = 1, result is true

    ====== NEW =======
    ("" || 26) = 26 (truthy)
    "Calum" = "Calum" (truthy)
    3 = 3 (truthy)
    3 && "Calum" && 26 = 26 (truthy) ==> again, last truthy value
*/
// 3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); //true
/*
    3 = 1
    "Remi" = 1
    null = 0
    86*0 = 0
    "" + 1= 0 (string concat, turns this into "1" which is now truthy)
    "Cat" + "Dog" = 1

    Working brackets first
    "" + 1 && "Cat" + "Dog" = 1 && 1 == 1
    null || 86 * 0 || ("" + 1 && "Cat" + "Dog") = 0 || 0 || 1 == 1
    3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")) == 1 && 1 && 1 == 1

    Therefore, final eval = 1, result is true

    ====== NEW ======
    ("" + 1) = 1 (truthy)
    ("Cat" + "Dog") = "CatDog" (truthy)
    ("" + 1 && "Cat" + "Dog") = "CatDog" ==> last element of &&

    null and 86*0 are both falsey values, but since "CatDog" is truthy, the (null || 86 * 0 || ("" + 1 && "Cat" + "Dog"))
    expression evaluates to "CatDog"

    3 && "Remi" && "CatDog" = "CatDog" ==> last element of &&
*/

