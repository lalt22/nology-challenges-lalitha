function encryptString(stringToEncrypt) {
    if (!stringToEncrypt) {
        return "";
    }

    const substrings = [];
    let currentSubstring = "";

    //Get our array of substrings
    for (let i = 0; i < stringToEncrypt.length; i++) {
        currentSubstring += stringToEncrypt[i];

        if (currentSubstring.length == 3 || i === stringToEncrypt.length -1) {
            substrings.push(currentSubstring);
            currentSubstring = "";
        }
    }

    let newString = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < substrings.length; j++) {
            newString += substrings[j].charAt(i);
        }
    }

    return newString;
}

console.log(encryptString("encrypted"));
console.log(encryptString("hippopotomonstrosesquippedaliophobia"));