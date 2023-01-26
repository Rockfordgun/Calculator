function Calculator() {
    
    let answer = document.querySelector ('#answer');
    let num1 = document.querySelector ('#num1');
    let num2 = document.querySelector ('#num2');
    let select = document.querySelector('select');
    let operator = select.options [select.selectedIndex].value;
    var theAnswer;

    if (operator == 'add') {
        theAnswer = num1 + num2;  
    } else if (operator == 'minus') {
        theAnswer = num1 - num2;
    } else if (operator == 'divide') {
        theAnswer = num1 / num2;
    } else if (operator == 'multiply') {
        theAnswer = num1 * num2;
    } else {
        theAnswer = 'Select what you would like to do!'

    }

    answer.innerHTML  = theAnswer;
    

}



/*

function getSelector () {

}

function getNum2 () {

}

function getCalculation () {

}
*/