function allowedInPub() {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const queryAge = document.getElementById("age");
        const age = parseInt(queryAge.value);
        if (age >= 18) {
            submitButton.classList.remove("red");
            submitButton.classList.add("green");
        }
        else {
            submitButton.classList.remove("green");
            submitButton.classList.add("red");
        }
    })
    
}

const person = {name: "Allen"};
console.log(`${('' + person.age).slice(4,6)}nance`)

const firstName = "Aiden";
let i = 0;
let byteSum = 0;

// while (i < firstName.length) {
//     byteSum += firstName.charCodeAt(i);
//     i++;
// }
// console.log(byteSum)


const coordinates = [];
function getCoordinates(n){
    while (coordinates.length < n+1) {
        const coord = Math.floor(Math.random() * 45);
        if (coordinates.includes(coord)) continue;
        coordinates.push(coord);
    }
    return coordinates
}

console.log(getCoordinates(10));
// console.log(getCoordinates(45));
console.log(getCoordinates(23));