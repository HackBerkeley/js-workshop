function map(array, fn) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    return newArray;
}

// OR We can cheat
function map(array, fn) {
    return array.map(fn);
}


