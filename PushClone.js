/* push() is a function that appends however many elements to the end of an array. */

// Initialize test array to add on to
let arr = [1, 2, 3];

// Take in array and however many arguments
function push(arr, ...args) {
    let index = arr.length;
    // For every element in args, add to end of the array
    for(let i of args) {
        arr[index] = i;
        index++;
    }
}

// Push all these elements into the array
push(arr, 3, 4, 5, 6, 7, 8, 9, 0);
// Print result of the push
console.dir(arr);