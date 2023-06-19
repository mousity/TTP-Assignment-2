/* reverseArray() and reverseArrayInPlace() are functions that will do as the name implies: reverse an array. The reverseArray() function will make an
    entirely new array and return it as a reversed version of the array that was passed in. reverseArrayInPlace(), however, will mutate the same passed array  
    instead of creating a new one. Both functions only take a suingle array as an argument. */


// The beginning of the reverse array function, which simply takes elements starting from the last element of the passed array, and pushes them into a new one
function reverseArray(arr) {
    let reverse = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

// Function to reverse in place. Uses half the array's length and a backwards iterator to swap the first and last elements, while both counters head towards the middle
function reverseArrayInPlace(arr) {
    let halfLength = Math.floor(arr.length / 2);
    let j = arr.length - 1;
    let temp;
    for(let i = 0; i < halfLength; i++) {
        temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
        j--;
    }
}

// Testing array one and showing that the state of array one never changes
let arr1 = ['cat', 'mouse', 'dog', 'bird'];
let arr1Reverse = reverseArray(arr1);
console.log("Reversing normally\nThe first array has not changed at all: ");
console.dir(arr1);
console.log("While the reverse array is entirely different: ");
console.dir(arr1Reverse);

let arr2 = ['art', 'music', 'science', 'math'];

// Testing array 2 before and after the function to show that it is reversed in place, and is mutated after the function
console.log("Reversing in place\nThe original array is here: ");
console.dir(arr2)

reverseArrayInPlace(arr2);

console.log("And this is the same array after using the in place reversal function: ");
console.dir(arr2);