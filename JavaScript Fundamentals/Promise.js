/*
JavaScript Promise Object
A JavaScript Promise object contains both the producing code and calls to the consuming code:
*/

let testPromise = new Promise( (resolve, reject) => {

    // This can take time
    console.log('Promise Body');

    resolve(); //when successful
    reject(); //when error
});

testPromise.then(
    (value) => { console.log('Value' + value)},
    (error) => { console.log('Error' + error)} 
)