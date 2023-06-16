/* lastIndexOf() is a function that finds the last index of the latest instance of the element. This means that if a number appears
    three times in an array, then the index returned will be the index of the third time. Similar to indexOf(), lastIndexOf() also
    uses -1 as a sentinel value */

// Declare test arrays
let numArr = [1, 3, 1, 3, 1, 5];
let strArr = ['cat', 'mouse', 'dog', 'mouse', 'bird'];

// Take in array, target, and start of search index
function myLastIndexOf(arr, target, startIndex) {
    let i = arr.length;
    let last = -1;
    // If the last argument is passed, start from it. Otherwise, start = last index
    if(arguments.length === 3) {
        i = startIndex;
    }

    // Move backwards through the array
    for(i; i >= 0; i--) {
        if(arr[i] == target) {
            last = i;
            return last;
        }
    }
    return last;
}

console.log("\nProcessing...\n");

// Variables to store results
let whereThree = myLastIndexOf(numArr, 3);
let whereThreeFromIndex = myLastIndexOf(numArr, 3, 2);
let whereMouse = myLastIndexOf(strArr, 'mouse');

// Output
console.log("Where can I find the last instance of 3? --- At index: " + whereThree);
console.log("Where can I find the last instance of 3 starting from index 2? --- At index: " + whereThreeFromIndex);
console.log("Where can I find the last instance of 'mouse'? --- At index: " + whereMouse);