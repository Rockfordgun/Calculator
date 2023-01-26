function Calculator() {
    
    let answer = document.querySelector ('#answer');
    let num1 = Number(document.querySelector ('#num1').value);
    let num2 = Number(document.querySelector ('#num2').value);
    

    answer.innerHTML= num1 + num2;
    console.log(num1, num2)

    /*
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
    */

}



/*

function getSelector () {

}

function getNum2 () {

}

function getCalculation () {

}
*/