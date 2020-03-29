let accumulator = 0;
let number1 = 0;

let calculatorBody = document.getElementById('calculator-body');
calculatorBody.addEventListener('click', clickHandle);

function clickHandle(event) {
    let clickedButton = event.target.innerHTML;
    console.log(clickedButton.match(/\d/));

   /* if (typeof parseInt(clickedButton) == "number" ){
        accumulator = accumulator*10 + parseInt(clickedButton);
        console.log(accumulator);
        console.log(accumulator.toString().length);
    }*/
}

function updateDisplay(num) {
    let display = parseInt(document.querySelector('.screen').innerHTML);

}

//grab the first number

//grab the operator

//grab the second number

// perform the operation

//display answer

//check if first number in string is zero

// backspace handler
