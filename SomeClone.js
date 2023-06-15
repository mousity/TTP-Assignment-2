/* some() is a function that takes an array and returns true if any value in the array fits the criteria.
    If no value fits the criteria, some() returns false instead */

// Declare two different arrays to test for both outputs of mySome()
let arr1 = [2, 5, 18, 3, 28];
let arr2 = [3, 5, 7, 55, 77];

// Beginning of mySome()
function mySome(callback, arr) {
    // Loop through entire array
    for(let i = 0; i < arr.length; i++) {
        // If callback() is false, keep searching for truthy value
        if(!callback(arr[i])) {
            continue;
        } else {
            return true;
        }
    }
    // If no truthy value is found, return false
    return false;
}

// This callback function checks if the number given is even
function callbackIsEven(num) {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let flag1 = mySome(callbackIsEven, arr1); // First array is mixed and should come back true (some value in arr1 is even)
let flag2 = mySome(callbackIsEven, arr2); // Second array is only odd and this flag should come back false (there is no even value in arr2)

// Printout of the results of both arrays when inserted in mySome()
console.dir(arr1);
console.log("Does arr1 have an even value?: " + flag1 + "\n");
console.dir(arr2);
console.log("Does arr2 have an even value?: " + flag2);
