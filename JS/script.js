// Write a JavaScript function to find the unique elements from two arrays.
function difference(arr1, arr2) {
    const a1 = JSON.parse(arr1);
    const a2 = JSON.parse(arr2);

    const a = [];
    const diff = [];
    for (let i = 0; i < a1.length; i++)
        a[a1[i]] = false;
    for (let i = 0; i < a2.length; i++)
        if (a[a2[i]] === true)
            { a.splice(a.indexOf(a2[i]), 1); }
        else a[a2[i]] = true;
    for (const k in a)
        diff.push(k);
    return diff;
}

// Add an event listener for the button click
document.getElementById('calculateButton').addEventListener('click', function() {
    const array1 = document.getElementById('array1').value;
    const array2 = document.getElementById('array2').value;

    const result = difference(array1, array2);

    // Display result in HTML
    document.getElementById('result').innerText = 'Difference: ' + JSON.stringify(result);

    // Display result in the console
    console.log('Difference:', result);
});