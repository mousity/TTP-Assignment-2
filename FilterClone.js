/* Filter() is a function that returns a shallow copy of the input array that has filters applied to it.
    For example, if the original array is a set of numbers, and the filter is that the number must be more than 6, the shallow
    copy will only be filled with numbers that meet that criteria. */


// Initialize and print original array
let originalArr = [90, 20, 40, 30, 80, 20];
let originalStrArr = ['Gouda', 'Havarti', 'Swiss', 'Parmesan'];
console.log("Original num array:");
console.dir(originalArr);
console.log("Original string array:");
console.dir(originalStrArr);

// Custom function to filter according to callback function
function myFilter(callback, arr) {
    let temp = Array.from(arr); // Creates a shallow copy of the original array

    // Filter starts here
    for(let i = 0; i < temp.length; i++) {
        // If numbers are more than 30, continue. Else, get rid of the number over 30
        // Replacing the callback argument with any other function also works
        if(callback(temp[i])) {
            continue;
        } else {
            temp.splice(i, 1);
        }
    }
    // Return edited shallow copy array
    return temp;
}

// Custom callback function
function callbackOverThirty(num) {
    if(num > 30) {
        return true;
    } else {
        return false;
    }
}

// Function to test string arrays
function callbackWordOver6(str) {
    if(str.length > 6) {
        return true;
    } else {
        return false;
    }
}

console.log("\nProcessing...\n");

let filteredArr = myFilter(callbackOverThirty, originalArr);
let filteredStrArr = myFilter(callbackWordOver6, originalStrArr);

// Final result, expected result is an array with all values only over 30
console.log("Result of the copy of the num array, which only includes elements over 30 (Filter condition: x > 30)");
console.dir(filteredArr);
console.log("Result of the copy of the string array, which only includes elements over length of 6 (Filter condition: x > 6)");
console.dir(filteredStrArr);
