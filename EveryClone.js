/* every() is a function similar to some(), but instead, it checks to see if ALL passed values are true.
    If even one passed value is false, every() will return false. */

// Two test arrays to test both cases
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 7];

// myEvery() start
function myEvery(callback, arr) {
    // Goes through entire array. If any value returns false from the callback function, the myEvery() will also be false
    for(let i = 0; i < arr.length; i++) {
        if(!callback(arr[i])) {
            return false;
        } else {
            continue;
        }
    }
    // Return true is no value returned false
    return true;
}

// Checks to see if the passed number is below 6; returns boolean
function callbackUnderSix(num) {
    if(num < 6) {
        return true;
    } else {
        return false;
    }
}

console.log("\nProcessing...\n");

let flag1 = myEvery(callbackUnderSix, arr1); // First array has values only under 6 and should come back true (all values in arr1 are less than 6)
let flag2 = myEvery(callbackUnderSix, arr2); // Second array has one value over 6 and this flag should come back false (at least 1 value in arr1 is more than 6)

// Printout of the results of both arrays when inserted in myEvery()
console.dir(arr1);
console.log("Are all the values in arr1 less than 6?: " + flag1 + "\n");
console.dir(arr2);
console.log("Are all the values in arr2 less than 6?: " + flag2);