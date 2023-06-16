/* reduce() is a function that takes an array of values and returns their sum into a single value.
    reduce() takes in an array and its callback function normally takes in an accumulator and the current value of the array */

let arr = [1, 2, 3, 4, 10];

// myReduce() function to take in a callback and initial argument
function myReduce(callback, arr) {
    // Declare accumulator variable to return at the end
    let toReturn = 0;
    for(let i = 0; i < arr.length; i ++) {
        // Keep adding the value of the callback function (accumulator) and the current variable to our value
        toReturn = callbackReducer(toReturn, arr[i]);
    }
    return toReturn;
}

// Callback function to take in a value and add it to the previous return value
function callbackReducer(accumulator, currentVal) {
    return accumulator += currentVal;
}

// Set a value to store the result of our function
let val = myReduce(callbackReducer, arr);

console.log("\nProcessing...\nFrom our array, we get the reduced value below")
console.dir(arr);
console.log(val);