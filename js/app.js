function plus() {
    var num1;
    var num2;
    var result;
    num1= document.getElementById('n1').value;
    num1= parseInt(num1);
    num2= document.getElementById('n2').value;;
    num2= parseInt(num2);
    result = num1 + num2;

    document.getElementById('out').innerHTML = result;  
}
function minus() {
    var num1;
    var num2;
    var result;
    num1= document.getElementById('n1').value;
    num1= parseInt(num1);
    num2= document.getElementById('n2').value;;
    num2= parseInt(num2);
    result = num1 - num2;

    document.getElementById('out').innerHTML = result;  
}
function multiply() {
    var num1;
    var num2;
    var result;
    num1= document.getElementById('n1').value;
    num1= parseInt(num1);
    num2= document.getElementById('n2').value;;
    num2= parseInt(num2);
    result = num1 * num2;

    document.getElementById('out').innerHTML = result;  
}
function dividing() {
    var num1;
    var num2;
    var result;
    num1= document.getElementById('n1').value;
    num1= parseInt(num1);
    num2= document.getElementById('n2').value;;
    num2= parseInt(num2);
    
    if (num1 == 0) 
    { 
      document.getElementById('out').innerHTML = "Nan";
      alert("Division by 0 !");

    }
    
    result = (num1*1) / num2;

    document.getElementById('out').innerHTML = result;  
}

