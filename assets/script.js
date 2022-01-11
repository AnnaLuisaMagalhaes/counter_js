console.log("hello world")

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function increment () {
    currentNumber = ++currentNumber;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement (){
    currentNumber = --currentNumber;
    currentNumberWrapper.innerHTML = currentNumber;
}