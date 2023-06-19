/* moveZeros() is a function that will mutate an array by taking all zeros and putting them in the back of the array */

function moveZeros(arr) {
    // create a value for the original length of the array so we know when the zeros started being added to the back
    let originalLen = arr.length;
    for(let i = 0; i < originalLen; i++) {
        if(arr[i] == 0) {       // If this element is 0
            arr.splice(i, 1);   // get rid of it
            arr.push(0);        // push a 0 to the end of the array
            i--;                // go back to the original index to check is a zero moved back
            originalLen -= 1;   // decrease the length by one as we have moved the zero to the end
        }
    }
}

// Test array showing before and after results
let arr = [1, 0, 0, 2, 0, 0, 3, 0, 4, 5];
console.log("Before: ");
console.dir(arr);
moveZeros(arr);
console.log("After: ");
console.dir(arr);