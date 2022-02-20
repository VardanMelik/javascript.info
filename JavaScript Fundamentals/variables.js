//let - is a modern variable declaration
// var - is an old schoolvariable declaration
// const - is like let, but the value of the variable can't be 
// changed.let 


//The var declaration is similar to let. 
//Most of the time we can replace let by var or vice-versa and 
//expect things to work:

// Example 1
/*var message = "Hello";
alert(message);*/



// Example 2
//“var” has no block scope
/*if (true) {
    var test = true;
}
alert(test);*/

// Example 3
/*if (true) {
    let test = true;
}
alert(test); // Uncaught ReferenceError: test is not defined*/


// Example 4
// The same is for loop
/*or (var i = 0; i < 10; i++) {
    var one  = 1;
    // ...
}

alert(i);   // i or 10 is a global variable after loop
alert(one); // one or 1 is a global variable after loop*/


// Example 5
// If a code block is inside a function, then var is a function-level variable
/*function sayHi() {

    if(true) {
        var phrase = "Hello";
    }

    alert(phrase); // works
}

sayHi(); // This works
alert(phrase); // Uncaught ReferenceError: phrase is not defined*/

// Example 6
// var declaration
/*let user = "Vardan";
let user = "Daniel";

alert(user); // Uncaught SyntaxError: Identifier 'user' has already been <declared></declare*/

/*var user = "Gagik"; // this var does nothing (already declared)
var user = "Vanik"; // But we haven'y any error

alert(user);*/

// Example 7
// var variable 

/*function printHello() {
    phrase = "Hello";
    alert(phrase);
    var phrase;
}
printHello();*/

// The same
/*function printHello() {
    var phrase;
    phrase = "Hello";
    alert(phrase);
}
printHello();*/



/*function printHello() {
    let phrase = "Test";
    alert(phrase);
    phrase = "Hello";
}

printHello();*/


/*function printHello() {
    var phrase; // declaration

    alert(phrase); // undefined

    phrase = "Hello";
}

printHello();*/

// Example 8
// Old scripts
//IIFE
//immediately-invoked function expressions” (IIFE)
//Function Expression is created and immediately called
// And fucntion has its provate variables

/*( function() {
    var message = "Hello";

    alert(message); // Hello
})();*/

// Example 9
/*function () {               // Uncaught SyntaxError: Function statements require a function name
    var message = "hello";
    alert(message);
}();*/

// Example 10
/*function callMe() {
    // Uncaught SyntaxError: Unexpected token ')'
    alert("Test");
}();*/



// Example 11
// How to create Function Expration IIFE
/*(function() {
    alert("Parentheses  around the function");
}) ()

(function() {
    alert("Parentheses  around the whole thing");
} () )

!function() {
    alert("Bitwise NOT operator starts the expression");
}();

+function() {
    alert("Unary plus starts the expression");
}();*/

// All above cases we declare a Function Expression and run it immediately.
// Nodays there's no reason to write such code.


//Example 12
/*let name = "Gagik";
let name = "Nare";
// Uncaught SyntaxError: Identifier 'name' has already been declared */

//Example 13
/*var name = "Malyan Vanush";
var name = 15;
alert(name);*/

//Example 14
// Block Scope
/*{
    let number = 15;
}
alert(number); */
//variables.js:161 Uncaught ReferenceError: number is not <defined></defined>*/

// Example 15
/*{
    var number = 360;
}
alert(number); // It's ok*/

// Example 16
/*var number = 1500;
{
    var number = 2000;
}

alert(number);*/

// Example 17
/*let number = 160;

{
    let number = 200;
}

alert(number);*/

