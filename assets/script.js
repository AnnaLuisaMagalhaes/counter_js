console.log("hello world")

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function increment () {
    currentNumber = ++currentNumber;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0) {
        currentNumberWrapper.classList.remove("changecolor")
    }
}

function decrement (){
    currentNumber = --currentNumber;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) {
        currentNumberWrapper.classList.add("changecolor")
    }
}