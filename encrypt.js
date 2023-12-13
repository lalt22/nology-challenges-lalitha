function encryptString(toEncrypt) {
  const characters = toEncrypt.split("");
    
  let modulus = 3;
  let accArrays = new Array(Number(modulus)).fill([]);
  console.log(accArrays);
  console.log(accArrays[0]);
  //use reduce with accumulation array (accArr)
  const encryptedMessage = characters.reduce((accArr, char, index) => {
    // Will create lists with indexes 0, 1, 2
      const listIndex = index % modulus;
      //Otherwise push char to associated list
      accArr[listIndex].push(char);
      return accArr;
  }, accArrays)
  //Also map lists so that list array elements join together
  .map((list) => list.join(""))
  //join all list arrays together
  .join("");
return encryptedMessage;
}

console.log(encryptString("encrypted"));
console.log(encryptString("hippopotomonstrosesquippedaliophobia"));
// const coaches = ["Andy", "Bex", "Calum", "Charlie", "Matt", "Ollie", "Sam"];
// const items = ["Apple", "Orange", "Pear"];

// function reverseOrder (toReverseArr) {
//     const newArr = [...toReverseArr];

//   return newArr.reverse();
// };


// console.log(reverseOrder(coaches));
// console.log(reverseOrder(coaches)[0]);

// console.log(reverseOrder(items));