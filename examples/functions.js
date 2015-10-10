function factorial(x) { //  a recursive function
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

// assign anonymous function literal to variable abs
var abs = function (x) { return x < 0 ? -x : x; };

var sum = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

var filter = function (array, fn) {
    var result = [];
    while (array.length > 0) {
        var item = array.shift(); // removes the first item
        if (fn(item)) {
            result.push(item);
        }
    }
    return result;
};
