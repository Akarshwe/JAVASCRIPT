// let a=10;
// let b=20;
// let s=a+b;
// document.write(s)
// document.write("<br>")


// function hello(){
//     document.write("hai")
//     document.write("<br>")
// }
// hello();


// function display(){
//     alert ("succes")
//     document.write("<br>")
// }


//     let c=40;
//     let d=5;
//     let e=c-d;
//     document.write(e)
//     document.write("<br>")


//     let f=30;
//     let g=2;
//     let h=f*g;
//     document.write(h)
//     document.write("<br>")


// let i=30;
// let j=3;
// let k=i/j;
// document.write(k)
// document.write("<br>")


// function welc(){
//     document.write("welcome")
//     document.write("<br>")
// }
// welc();


// function display(){
//     document.write("helloworld")
//     document.write("<br>")
// }
// display();


// const num=parseInt(prompt("enter a number"))
// if (num % 2==0)
// document.write("the number is even")
// else
// document.write("the number is odd")
// document .write ("<br>")


// const num= parseInt(prompt("enter a number"))
// if (num >0)
// document.write("the number is positive")
// else if (num <0)
// document.write("the given number is negative")
// else
// document.write("the number is 0")


// for(i=1;i<=10;i++)
//     document.write(i)


// let n =10
// let i = 0
// while (i<= n){
//     document.write("the number is " +i+"</br>");i++;
// }


// let i =0
// let n =10
// do{
//     document.write(i);
//     i++;
// }
// while(i<=n);


// const num = parseInt(prompt("enter a number"))
// let f =1;
// for(i=1;i<=num;i++){
//    f=f*i;

// }
// document.write(f)


// var a;
// var b;
// var c = 0;
// var n = parseInt(prompt("Enter a three digit number"))
// b = n;
// while (b > 0) {
//     a = b % 10;
//     b = parseInt(b / 10);
//     c = c + (a * a * a);
// }
// if (n == c)
//     document.write("The number is an armstrong number");
// else
//     document.write("The number is not an armstrong number");
// document.write("<br>")


const num1 = parseInt(prompt("Enter the first number"));
const num2 = parseInt(prompt("Enter the second number "));
const num3 = parseInt(prompt("Enter the third number"));

if(num1>num2 && num1>num3)
{
    document.write(num1+" - is greatest");
}
else if(num2>num1 && num2>num3)
{
    document.write(num2+" - is greatest");
}
else
{
    document.write(num3+" - is greatest");
}