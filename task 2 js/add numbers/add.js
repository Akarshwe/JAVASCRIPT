 operator = prompt('Enter operator to perform the calculation(+):');
 number1 = parseFloat( prompt('Enter first number : '));
 number2 = parseFloat( prompt('Enter second number : '));
// for adding two numbers
if(operator =='+'){// use + (addition) operation to add two numbers
    result = number1 + number2;
    console.log(result)
}
else{
    alert("invalid");
}
{
    alert("the result is :" + result)
}