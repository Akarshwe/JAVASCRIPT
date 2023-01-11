const num=parseInt(prompt("enter a number"))
let n1=0,n2=1;
document.write(n1);
document.write(n2);
let n=n1+n2;
while(n<num){
    document.write(n);
    n1=n2;
    n2=n;
    n=n1+n2;
}