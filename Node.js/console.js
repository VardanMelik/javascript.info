//console.log('Console is working');
//console.log('Console %s', ' is working')

//console.error(new Error('Whoops, something bad happened'));

//const firstName = 'Vanik Manukyan';
//console.warn(`Danger ${firstName}! Danger!`);


// Example Console Class
/*const { Console } = require('console');
const fs = require('fs');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput});

const number = 200;
logger.log('number: %d', number);*/


// Example 
// console.assert
//console.assert() writes a message if value is falsy or omitted. 


// Example
/*console.assert(true, 'does nothing');
console.assert(false, 'Whoops %s', 'didn\'t');

console.assert();

// This will clear 
console.clear();*/

//Example
// console.count()
/*console.count();

console.count('default');

console.count('abc')
console.count('xyz');
console.count('abc');
console.count();*/

// Example 
// The console.log() function is an alias for console.log()
//console.debug();


// Example console.dir()
/*console.dir({
    firstName: 'Vardan',
    lastName: 'Meliksetyan'
});*/

// Example console.dirxml()
/*console.dirxml({
    carName: 'BMW',
    model: 'X6',
    year: 2021
})*/

// Example console.error()
/*const code = 5;
console.error('error #%d', code);
console.error('error', code);*/

//console.group();
//console.groupCollapsed();
//console.groupEnd();
//console.info()
//console.log()


/*console.table({
    carName: 'BMW',
    model: 'X6',
    year: 2021
})*/

//console.time();
//console.time('bunch-of-stuff');
// Do a bunch of stuff.
//console.timeEnd('bunch-of-stuff');
// Prints: bunch-of-stuff: 225.438ms

/*console.time('process');
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);
// Prints "process: 365.227ms 42".
doExpensiveProcess2(value);
console.timeEnd('process');*/


// Console.trace()
//console.trace('Show me')


//console.warn('Data');


/*console.profile('MyLabel');
console.log('Test');
console.profileEnd('MyLabel');
// Adds the profile 'MyLabel' to the Profiles panel of the inspector.
*/

//console.timeStamp('label')
