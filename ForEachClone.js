/* forEach is a function that performs a callback function once per element in an array */

// Declare a test array and print out initial values
let testArr = [1, 2, 3, 4, 5];
console.log("Initial values");
console.log(testArr);

// Make the "myEach" function
// For each element in the passed array, do ___
function myEach(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = callbackDouble(arr[i]);
    }
}

// Call back function to add to the custom forEach function
function callbackDouble(number) {
    return number * 2;
}

// Call myEach on our test array
myEach(testArr);
// Expected result is each number to be doubled from the original input
console.log("Expected values: Each value should be double the value in the previous version of the array")
console.log(testArr);