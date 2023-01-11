operator = prompt("Enter operator to perform the calculation (either +,-,*,%,):");
number1 = parseFloat(prompt("Enter the first number : "));
number2 = parseFloat(prompt("Enter the second number : "));
if (operator == '+'){// use +(addition)operator to add two numbers 
result = number1 +number2;
console.log(result)
}
else if(operator == '-'){// use -(substraction)operator to subtract two numbers
    result = number1 - number2;
    console.log(result)
}
else if(operator == '*'){//use *(muntiplication)operator to mutiply two numbers
result = number1 * number2;
console.log(result)
}
else if(operator == '/'){//use / (divition)operator to divide two numbers
    result = number1 / number2;
    console.log(result)
}
else{
    alert("invalid");
}
{
    alert("the result is : " + result);
}