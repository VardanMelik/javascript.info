/*
The word async: a function always returns a promise
*/

// Example 1
/*async function testFunction() {
    return 1;
}

// It returns promise
testFunction().then(alert);*/

// Example 2
// The same logic
/*async function secondFuncation() {
    return Promise.resolve(1);
}

secondFuncation().then(alert);*/


// Async ensures that the function returns a promise

// Await 
// Example 3
/*async function thirdExample() {
    let promise = new Promise((resolve, reject) => {
        setTimeout( () => resolve("It's work"), 3000)
    });

    let result = await promise; // this will wait until promise resolves

    alert(result);
}

thirdExample();*/

// That doesn’t cost any CPU resources, 
//because the JavaScript engine can do other jobs in the meantime


// Example 4
function nonAsyncFunction() {
    let promise = Promise.resolve(1);
    let result = await promise; // We have syntec errior
}
//Uncaught SyntaxError: await is only valid in async 
//functions and the top level bodies of modules