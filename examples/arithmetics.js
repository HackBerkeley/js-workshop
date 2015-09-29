// Logic Operators are similar to Java
var a = true; var b = false;
a && b; // and
a || b; // or
!a; // not
5 == '5'; // true! Because == does auto type conversion
5 === '5'; // false! Because === does not do type conversion

// Number Arithmetics
var x = 5; var y = 6.0; // no difference between integer and float/double
var z = x - 6 % 10 + y * 3 / 2;
x = x + 1;
x += 1;
x++; // these three lines does the same thing

// String Concatenation
var message = "Hello World!";
var moreMessage = message + " Yay!";
var mixType = "1 + 2 = " + (1 + 2);

// Converting Numbers and String
parseInt("Hey"); // gives NaN - Not a Number
var fiftyTwoNumber = parseInt("52.3");
var fiftyTwoPointThreeNumber = parseFloat("52.3")
var fiftyTwoString = fiftyTwoNumber.toString(); // Numbers have method