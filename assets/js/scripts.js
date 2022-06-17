var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var buttonIncrement = document.getElementsByTagName('button')[1];
var buttonDecrement = document.getElementsByTagName('button')[0];

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0) {
        currentNumberWrapper.style.color="white";
    }

    if(currentNumber >= 10) {
       buttonIncrement.disabled = true;
    }

}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) {
        currentNumberWrapper.style.color="red";
    }

    if(currentNumber <= -10) {
        buttonDecrement.disabled = true;
     }
}