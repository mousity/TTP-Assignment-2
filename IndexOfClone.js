/* indexOf() is a function that takes in either one or two parameters and find the first target element from the start index.
    If no element is found, the function will simply return -1, otherwise, it will return the first index that the element was
    present at */

// Declare two arrays for testing
let strArr = ['whoppers', 'skittles', 'raisins'];
let numArr = [1, 5, 10, 15, 20, 1];

// start of myIndexOf to search for the first instance of an element
function myIndexOf(arr, searchElem, startIndex) {
    let i = 0;
    // If the last argument is not included, keep i at 0
    if(arguments.length == 3) {
        i = startIndex; // Otherwise, i will equal the passed third argument
    }

    // Loop through array to find matching index
    for(i; i < arr.length; i++) {
        if(arr[i] == searchElem) {
            return i;
        }
    }
    // Otherwise, return sentinal value (-1)
    return -1;
}

// Store results of all called functions
let whereRaisins = myIndexOf(strArr, 'raisins');
let whereFirstOne = myIndexOf(numArr, 1);
let whereSecondOne = myIndexOf(numArr, 1, 3);
let whereTwo = myIndexOf(numArr, 2);

// Print results
console.log("Where can I find the first instance of 'raisins'? --- At index: " + whereRaisins)
console.log("Where can I find the first instance of 1? --- At index: " + whereFirstOne)
console.log("Where can I find the second instance of 1? --- At index: " + whereSecondOne)
console.log("Where can I find the first instance of 2? --- At index: " + whereTwo)