
function ShowResult(){
    let Money= document.getElementById('MoneyValue').value;
    Money= parseInt(Money);
    let Value1=document.getElementById('Value1').value;
    let Value2= document.getElementById('Value2').value;
    let c=1;
    if (Value1 == '1' && Value2 == '2') {
        c = Money / 23000;
}
    else if(Value1=='2' && Value2=='1'){

         c=Money*23000;

    }
    else {
        c = Money

    }
    document.getElementById('Result').innerHTML='Result:'+c;

}








