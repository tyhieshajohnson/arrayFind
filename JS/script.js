// Write a JavaScript function to find the unique elements from two arrays.
console.log(difference([1, 2, 3], [100, 2, 1, 10]))
// callback function used to find the unique elements
// function name taken from console test 
function difference(array1, array2) {
    let arrayOne = JSON.stringify(array1, true);
    let arrayTwo = JSON.stringify(array2, true);

    // create a new array -  keep track of the elements that are present in the first array
    let newArray = [];
    // create a new array - used to store the elements that are present in the first array but not in the second array
    let stoageArray = [];
}