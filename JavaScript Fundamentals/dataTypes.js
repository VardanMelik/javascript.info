let n = 123;
n = 12.345;

/*alert ("Not a Number"/2); // NaN
alert (1/0); // Infinity
alert ('Not a Number'/2+5); // NaN
*/

/* Big Int */

//In JavaScript, the “number” type cannot represent 
//integer values larger than (253-1) (that’s 9007199254740991),
// or less than -(253-1) for negatives. It’s a technical 
//limitation caused by their internal representation.

/* String */
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

/* Boolean */

let isGreater = 4 > 1;

//alert (isGreater);


/* Null */
// empty
// nothing

/* undefined */
let age = 100;

age = undefined

//alert(age);


/* typeof operator  */
console.log('undefined: ', typeof undefined);
console.log('typeof: ', typeof 0);
console.log('typeof: ', typeof 10n);
console.log('typeof: ', typeof true);
console.log('typeof: ', typeof Symbol('id'));
console.log('typeof: ', typeof Math);
console.log('typeof: ', typeof null);
console.log('typeof: ', typeof alert);


let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?



