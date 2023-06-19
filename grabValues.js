/* grabValues() will be a function that iterates through an object and returns all values. It will work similarly to our previous function, but will only grab values instead of keys */

// Beginning of function embedded into the prototype of object
Object.prototype.grabValues = function (obj){
    // Variable declaration for iterator and array to return
    let j = 0;
    let arr = [];
    // for all items in our passed objects, as long as the key name is not the same as the function name, we'll grab the value
    for(let i in obj) {
        if(i != "grabValues"){
            arr.push(obj[[i]]);    // push value to the array and increment our counter
            j++;
        }
    }
    // return to main
    return arr;
}

// making the same test object as the grabKeys() function
let obj = {key: 'lock', pet: 'dog', color: 'blue'};
let arr = Object.grabValues(obj);

// User output
console.log("The following array elements are all of our values: ");
console.dir(arr);