operator = prompt('Enter operator to perform the calculation ( either +, -, * or /):');
number1 = parseFloat(prompt('Enter the first number:1 '));
number2 = parseFloat(prompt('Enter the second number:2 '));
if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;
    console.log(result)
}
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;
    console.log(result)
}
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;
    console.log(result)
}
else if (operator == '/') { // use / (division) operator to divide two numbers
     result = number1 / number2;
     console.log(result)
}     
else {
    alert("Invalid ");
}
{
  alert("The result is : " + result);
}