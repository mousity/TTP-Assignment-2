/* the range() functi0on is a function that takes in a starting number,an ending number, and an optional parameter of 'step'. The range function
    will start at the start number and end at the end number, returning an array that holds all numbers in between. The optional third parameter is used
    to 'skip' index and can be used in our calculation */

// Beginning of the range function
function myRange(start, end, step) {
    // Declare temporary array and the current number counter
    let temp = [];
    let currentNum = start;

    // If step is not included in the arguments, initialize step appropriately
    if(arguments.length == 2 && start < end) {
        step = 1;
    } else if (arguments.length == 2 && start > end){
        step = -1;
    }

    // While the counter has no passed the end number, push the current number to an array to return
    while((start < end && currentNum <= end) || (start > end && currentNum >= end)) {
        temp.push(currentNum);
        currentNum += step;
    }
    return temp;
}

// this function takes the array returned by our range function and uses it to find the sum of all numbers
function mySum(rangeFunc) {
    let arr = rangeFunc;
    let sum = 0;
    for(let i of arr) {
        sum += i;
    }
    return sum;
}

// storing ranges for testing and later use
let range1 = myRange(1, 10);
let range2 = myRange(10, 1);
let range3 = myRange(10, 1, -2);
let range4 = myRange(12, 2, -3);

console.log("Checking our initial function ranges...");

console.log(range1);
console.log(range2);
console.log(range3);

// using already tested range functions to confirm our sum function works as intended
console.log("\nTesting our sum function...");
let m = mySum(myRange(1, 10));
let n = mySum(myRange(12, 2, -3));
console.log("The sum of " + range1 + " is : " + m);
console.log("The sum of " + range4 + " is : " + n);
