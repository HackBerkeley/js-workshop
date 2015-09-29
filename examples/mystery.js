var x = 4;
function mystery1() {
    var x = 5;
    return function () {
        var x = 6;
        console.log(x);
    };
}
console.log(mystery1()());

var x = 4;
function mystery2() {
    return function () {
        console.log(x);
    };
}
console.log(mystery2()());

var x = 4;
function mystery3() {
    var x = 5;
    return function () {
        console.log(x);
    };
}
console.log(mystery3()());

