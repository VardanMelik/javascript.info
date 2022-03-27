/*
When to Use a Callback?
Where callbacks really shine are in asynchronous functions, 
where one function has to wait for another function 
(like waiting for a file to load).

*/

function Displayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

function Calculator(x, y, callbackFunction) {
    let sum = x+y;
    callbackFunction(sum);
}

Calculator(100, 200, Displayer);



