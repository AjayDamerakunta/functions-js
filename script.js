let counterElement = document.getElementById('counterValue');

function onDecrement() {
    let decrementValue = counterElement.textContent;
    let updatedDecrementValue = parseInt(decrementValue) - 1;
    if (updatedDecrementValue > 0) {
       counterElement.style.color = "red";
    }

    else if(updatedDecrementValue < 0) {
      counterElement.style.color="green";

    }

    else {
        counterElement.style.color = "black";
    }

   counterElement.textContent = updatedDecrementValue;

}

function onIncrement() {
    let incrementValue = counterElement.textContent;
    let updatedIncrement = parseInt(incrementValue) + 1;

    if(updatedIncrement > 0) {
        counterElement.style.color = "red"
    }
    else if (updatedIncrement < 0) {
        counterElement.style.color = 'green';
    }

    else{
        counterElement.style.color ="black";
    }

    counterElement.textContent = updatedIncrement
}


 function onReset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
    
 }