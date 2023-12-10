// function encryptString(stringToEncrypt) {
//     if (!stringToEncrypt) {
//         return "";
//     }

//     const substrings = [];
//     let currentSubstring = "";

//     //Get our array of substrings
//     for (let i = 0; i < stringToEncrypt.length; i++) {
//         currentSubstring += stringToEncrypt[i];

//         if (currentSubstring.length == 3 || i === stringToEncrypt.length -1) {
//             substrings.push(currentSubstring);
//             currentSubstring = "";
//         }
//     }

//     let newString = "";
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < substrings.length; j++) {
//             newString += substrings[j].charAt(i);
//         }
//     }

//     return newString;
// }

// console.log(encryptString("encrypted"));
// console.log(encryptString("hippopotomonstrosesquippedaliophobia"));
const coaches = ["Andy", "Bex", "Calum", "Charlie", "Matt", "Ollie", "Sam"];
const items = ["Apple", "Orange", "Pear"];

function reverseOrder (toReverseArr) {
    const newArr = [...toReverseArr];

  return newArr.reverse();
};


console.log(reverseOrder(coaches));
console.log(reverseOrder(coaches)[0]);

console.log(reverseOrder(items));