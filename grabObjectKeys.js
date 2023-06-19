/* grabKeys() will be a function that iterates through an object and returns all keys */

// Beginning of function embedded into the prototype of object
Object.prototype.grabKeys = function (obj){
    // variable declaration for iterator and array to return
    let j = 0;
    let arr = [];
    // for all items in our passed objects, as long as the key name is not the same as the function name
    for(let i in obj) {
        if(i != "grabKeys"){
            arr.push(i);    // push to the array and increment our counter
            j++;
        }
    }
    // return to main
    return arr;
}

// making a test object
let obj = {key: 'lock', pet: 'dog', color: 'blue'};
let arr = Object.grabKeys(obj);

// user output
console.log("The following array elements are all of our keys: ");
console.dir(arr);