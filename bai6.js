function ShowResult1(){
    let number1= document.getElementById('number1').value;
    let number2= document.getElementById('number2').value;
    number2=parseInt(number2);
    number1=parseInt(number1);
    let c=1;
    c=number1+number2;
    document.getElementById('Result').innerHTML='Result Addition:'+c;
}
function ShowResult2(){
    let number1= document.getElementById('number1').value;
    let number2= document.getElementById('number2').value;
    number2=parseInt(number2);
    number1=parseInt(number1);
    let c=1;
    c=number1-number2;
    document.getElementById('Result').innerHTML='Result Subtraction:'+c;
}
function ShowResult3(){
    let number1= document.getElementById('number1').value;
    let number2= document.getElementById('number2').value;
    number2=parseInt(number2);
    number1=parseInt(number1);
    let c=1;
    c=number1*number2;
    document.getElementById('Result').innerHTML='Result Mutilipcation:'+c;
}
function ShowResult4(){
    let number1= document.getElementById('number1').value;
    let number2= document.getElementById('number2').value;
    number2=parseInt(number2);
    number1=parseInt(number1);
    let c=1;
    c=number1/number2;
    document.getElementById('Result').innerHTML='Result Divition:'+c;
}