/* The map() function is similar to forEach, but does not modify the original array.
    map() takes in an array and a callback function as an argument and returns a new array where
    the callback function was called on each array element from the original argument */

// Set original array. This array will not be tampered with
let originalArr = [5, 10, 15, 20, 30];
console.log("The original array we will pass in:");
console.dir(originalArr);

// Call back function to return the result of a number + 3
function callbackAddThree(number) {
    return number + 3;
}

// A my map function that takes in an array, performs a callback function on every element, and creates a new array from the results
// Though it's not necessary to pass in the function, it's good experimentation
function myMap(callback, originalArr) {
    let temp = [];
    // Loop through the original array, call the callback function every time
    for(let i = 0; i < originalArr.length; i++) {
        temp[i] = callback(originalArr[i]);
    }

    // Return a new array
    return temp;
}

console.log("\nProcessing...\n");

// Make a new array equal the temporary array returned by the myMap() function
let newArr = myMap(callbackAddThree, originalArr);

console.log("Original array: The original array is untouched here ");
console.dir(originalArr);

console.log("Resulting Array: The resulting array is NOT the original array, but it is populated with modified numbers from the original, hence map()")
console.dir(newArr);