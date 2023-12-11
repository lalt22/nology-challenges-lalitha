/* JS5 builds on the previous challenges and adds the use of MORE Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that uses the REDUCE array iterator to total an array of scores.
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [7, 7, 6, 2, 3, 2, 3]
 * @return {number} 30
 */

 export const totalScoresArr = (scoresArr) => {
    return scoresArr.reduce((accArr, curr) => accArr + curr);
  };
  
  /**
   * A function that turns a string into an array and uses a ARRAY ITERATOR to reverse it.
   * It will need to keep spaces between words.
   * Once reversed it will need to turn the array back into a string.
   *
   * @param {string} toReverse "reverse"
   * @return {string} "esrever"
   */
  
  export const reverseString = (toReverse) => {
      let stringArr = toReverse.split("");
      let reversedArr = stringArr.reverse();
    return reversedArr.join("");
  };
  
  /**
   * A function that arranges an array of characters alphabetically.
   * Each character will need to be lowercase.
   * A to Z case insensitive.
   *
   * @param {string[]} charcterArr ["X", "B", "B", "b", "g", "l", "n", "x"]
   * @return {string[]} ["b", "b", "b", "g", "l", "n", "x", "x"]
   */
  
  export const sortCharactersAlphabetically = (charcterArr) => {
      let lowerArr = charcterArr.map((element) => element.toLowerCase());
    return lowerArr.sort();
  };
  
  /**
   * Intemediate Challenges
   */
  
  /**
   * A function that arranges an array of numbers highest to the lowest number.
   *
   * @param {number[]} numberArr [6, 9, 55, 2, 9190, .5]
   * @return {number[]} [9190, 55, 9, 6, 2, 0.5]
   */
  
  export const sortNumbersHighToLow = (numberArr) => {
    return numberArr.sort(function(a, b){return b-a});
  };
  
  /**
   * A function that checks if a given item is 'instock'.
   * You have been given a 'stocklist' in the function body.
   *
   * If the item is in the stocklist you need to return its index in the following string format.
   * "ITEM is instock, it is on aisle INDEX."
   *
   * If the item is not in the stocklist you need to return the following string format.
   * "Sorry ITEM is not instock."
   *
   * @param {string} toCheck orange
   * @return {string} "orange is instock, it is on aisle 2."
   */
  
  export const checkItemInstock = (toCheck) => {
    const stockList = [
      "apple",
      "banana",
      "orange",
      "coconut",
      "strawberry",
      "lime",
      "grapefruit",
      "lemon",
      "kumquat",
      "blueberry",
      "melon",
    ];
    const indexOfItem = stockList.indexOf(toCheck);
    if (indexOfItem == -1) {
        return `Sorry ${toCheck} is not instock.`;
    }

    return `${toCheck} is instock, it is on aisle ${indexOfItem}.`;
  };
  
  /**
   * A function that takes an array of colours and checks if EVERY colour is a primary colour.
   * The primary colours are ["red", "blue", "yellow"].
   * It will return true if they are ALL primary.
   * It will return false if they are NOT ALL primary.
   *
   * @param {string[]} coloursArr ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
   * @return {boolean} false
   */
  
  export const checkPrimaryColours = (coloursArr) => {
    const primaryColours = ["red", "blue", "yellow"];
    let mappedArray = coloursArr.map((element) => primaryColours.includes(element) ? "true" : "false");

    return mappedArray.includes("false") ? false : true;
  };
  
  /**
   * Advanced Challenges
   */
  
  /**
   * A function that takes a strings and checks to see if it is a palindrome.
   * PALINDROME - a word, phrase, or sequence that reads the same backwards as forwards.
   * It will return true or false depending if it is a palindrome or not.
   *
   * @param {string} stringOne racecar
   * @return {boolean} true
   */
  
  export const checkStringPalindrome = (stringOne) => {
      const arrayValues = stringOne.split("");
      const reverseArrayValues = arrayValues.reverse();
      const reverseString = reverseArrayValues.join("");
      

    return reverseString === stringOne;
  };
  
  /**
   * A function that totals a nested array of scores arrays.
   * It only needs to total each nested array.
   * e.g. [[1, 2], [2, 3]] = [3, 5]
   * The scores will be numbers.
   *
   * @param {number[]} numberArr [[7, 7, 6], [2, 3, 2], [3]]
   * @return {number[]} [20, 7, 3]
   */
  
  export const totalNestedScoresArr = (scoresArr) => {
      //scoresArr.map iterates over every sub-array in scoresArr
      //subArray.reduce adds all the values in the subArray
    return scoresArr.map((subArray) => subArray.reduce((accArr, val) => accArr + val, 0));
  };
  
  /**
   * Expert Challenge
   */
  
  /**
   * This is the same challenge as advanced JS4, can you implement it differently.
   * Can you complete this challenge using the REDUCE iterator?
   *
   * A function that takes a string and creates a simple encrypted message.
   *
   * The string will be broken into 3 lists.
   * The first three letters will go into their own list.
   * The next three letters will follow this pattern.
   * Joining the first three letters in each of their list.
   * The rest of the letter's will follow this pattern.
   * Each list will be joined together and returned as an encrypted message.
   *
   * The word "encrypted" would be broken into:
   *
   * e r t
   * n y e
   * c p d
   *
   * and joined together as ert + nye + cpd
   *
   * @param {string} toEncrypt "encrypted"
   * @return {string} "ertnyecpd"
   */
  
  export const encryptString = (toEncrypt) => {
      const characters = toEncrypt.split("");

      //use reduce with accumulation array (accArr)
      const encryptedMessage = characters.reduce((accArr, char, index) => {
        // Will create lists with indexes 0, 1, 2
          const listIndex = index % 3;
          //If the array doesn't already exist, make it
          if (!accArr[listIndex]) {
              accArr[listIndex] = [];
          }
          //Otherwise push char to associated list
          accArr[listIndex].push(char);
          return accArr;
      }, [])
      //Also map lists so that list strings join together
      .map((list) => list.join(""))
      .join("");
    return encryptedMessage;
  };