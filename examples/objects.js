var array = [1, 2, 3, 4]; var x = 3;
array[0]; // gives 1
array[x]; // gives 4
array[x + 1]; // gives undefined, will not throw error
array.length; // gives 4

var object = {
    'name': "Ajay",
    age: 18,
    1: array
}; // this is valid syntax, but looks terrible, hah?
var y = 'age';
object.name; // gives 'Ajay'
object.y; // gives undefined, will not throw error
object.3; // intepreter will throw error!!!
object[y]; // gives 18
object[1]; object['1']; // both gives the array
'name' in object; // gives true