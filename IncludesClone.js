/* includes() is a function that checks to see if a specific element is included within an array. If the element is
    present anywhere in the array, a 'true' value is returned, and 'false' is returned when the element is not found */

let numArr = [1, 2, 4, 16, 32, 64];
let stringArr = ['cat', 'dog', 'bird', 'mouse'];

// Function to find element in array
function myIncludes(searchElem, arr) {
    
    // Loop through array until element found
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == searchElem) {
            return true;
        }
    }
    // If element not found, return false
    return false;
}

// Shows the starting arrays to allow comparison and accuracy in the final answer
console.log("Our starting arrays (number and string)");
console.dir(numArr);
console.dir(stringArr);

console.log("\nProcessing...\n");

// Declare variables to hold flags for each case
let hasTwo = myIncludes(2, numArr);
let hasFive = myIncludes(5, numArr);
let hasMouse = myIncludes('mouse', stringArr);

// Results
console.log("Does our number array have the number 2? --- " + hasTwo);
console.log("Does our number array have the number 5? --- " + hasFive);
console.log("Does our string array have the word 'mouse'? --- " + hasMouse);
