const side1 = parseInt( prompt("Enter  the first number : "));
const side2 = parseInt( prompt("Enter the second number : "));
const side3 = parseInt( prompt("Enter the third number : "));
const s = (side1 + side2 + side3) / 2;
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(area);