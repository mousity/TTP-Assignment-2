/* reduce() is a function that takes an array of values and returns their sum into a single value.
    reduce() takes in an array and its callback function normally takes in an accumulator and the current value of the array */

let arr = [1, 2, 3, 4, 10];
let initial;

// myReduce() function to take in a callback and initial argument
function myReduce(callback, arr, initial) {
    // Declare accumulator variable to return at the end and iterator for loop
    let toReturn;
    let i;

    if(initial === undefined) { // If the initial value argument is NOT defined
        toReturn = arr[0];      // The accumulator will be the first array element
        i = 1;                  // And the loop will start from the second element instead
    } else {                    // Else...
        toReturn = initial;     // If initial is defined, our myReturn variable will be equal to it
        i = 0                   // And we start the loop from the beginning
    }
    for(i; i < arr.length; i ++) {
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
let val = myReduce(callbackReducer, arr, 10); 
let val2 = myReduce(callbackReducer, arr, initial); 

// Show results for both cases
console.log("\nProcessing...\nFrom our array, with an initializer of 10, we get the reduced value below")
console.dir(arr);
console.log(val);

console.log("When our initializer is undefined, we start within the array and get the following value instead");
console.log(val2);