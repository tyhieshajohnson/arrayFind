// Write a JavaScript function to find the unique elements from two arrays.
// callback function used to find the unique elements
// function name taken from console test 
function difference(array1, array2) {
    //  used to convert both arrays into strings
    let arrayOne = JSON.stringify(array1, true);
    let arrayTwo = JSON.stringify(array2, true);
    // filter() method is used to remove all the elements from array1 that are present in array
    console.log(JSON.parse(arrayOne).filter(x => !JSON.parse(arrayTwo).includes(x)));

    // create a new array -  keep track of the elements that are present in the first array
    let newArray = [];
        // iterates over array1
        for (let i = 0; i < array1.length; i++)
        // the element in newArray is set to false
        newArray[array1[i]] = false;
        // iterates over array2
        for (let i = 0; i < array2.length; i++)
        // checks whether the value of newArray[array2[i]] is true. If it is, then the code inside the if block will be executed.
        if (newArray[array2[i]] === true)
    // create a new array - used to store the elements that are present in the first array but not in the second array
    let storageArray = [];
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));