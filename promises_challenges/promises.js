/*Delayed inc/dec

1. Create a function called `delayedIncDec(n, mode, timeout)`

- n: Initial number
- mode: A string - either "inc" or "dec"
- timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
  `delayedIncDec` returns a promise that resolves to the initial number increment or decremented - think about what might cause this promise to reject

2. Call this function three times with different values of n, modes, and timeouts
3. Log each value to the console.
*/

// function delayedIncDec(n, mode, timeout=2500) {
//     const resPromise = new Promise(function(resolved, rejected) {
//         setTimeout(() => {
//             if (timeout < 0)  {
//                 rejected(new Error("Invalid timeout!"));
//             }
//             else if (mode !== "inc" && mode !== "dec") {
//                 rejected(new Error("Invalid mode!"));
//             }
//             else {
//                 resolved(mode === "inc" ? n+1: n-1);       
//             }
//         }, timeout);
//         })
       
//     return resPromise;
// }

// delayedIncDec(5, 'inc')
//   .then(result => {
//     console.log('Incremented value:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

// delayedIncDec(10, 'dec', 3000)
//   .then(result => {
//     console.log('Decremented value:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

// delayedIncDec(8, 'invalidMode', 1000)
//   .then(result => {
//     console.log('Result:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

//   delayedIncDec(8, 'dec', -1)
//   .then(result => {
//     console.log('Result:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });
  
/*
# Delayed filter

1. Create a function called `delayedFilter(array, callback, timeout)`

- n: Initial Array
- callback: a filter function
- timeout: delay time in ms - should have a default time of 2.5 seconds if not provided
  `delayedFilter` returns a promise that resolves to the filtered array- think about what might cause this promise to reject

2. Call this function three times with different values of array, callback, timeout
3. Log each result to the console.
*/

function delayedFilter(array, callback, timeout=2500) {
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            if (timeout < 0) {
                rejected(new Error("Invalid timeout!"));
            }
            try {
                const filteredArr = array.filter(callback);
                resolved(filteredArr);
            } catch(error) {
                rejected(error);
            }
        }, timeout);
    });
}

// Example 1 - num Array, all valid. No timeout given
const array1 = [1, 2, 3, 4, 5];
const func1 = (num) => num > 2;
delayedFilter(array1, func1)
  .then((result) => console.log('Example 1:', result))
  .catch((error) => console.error('Example 1 Error:', error));

// Example 2 - fruit Array, invalid filter
const array2 = ['apple', 'banana', 'cherry', 'date'];
const func2 = (fruit) => a;
delayedFilter(array2, func2, 3000)
  .then((result) => console.log('Example 2:', result))
  .catch((error) => console.error('Example 2 Error:', error));

// Example 3 - num Array, valid filter, invalid timeout
const array3 = [10, 20, 30, 40, 50];
const func3 = (num) => num < 30;
delayedFilter(array3, func3, -1)
  .then((result) => console.log('Example 3:', result))
  .catch((error) => console.error('Example 3 Error:', error));