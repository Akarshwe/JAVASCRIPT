function submit()
{
var num = parseInt( document.getElementById("num").value);
if( isNaN(num) )
{
alert(" Enter valid number ");
return;
}
var factorial = calcFact(num);
document.getElementById("answer").innerHTML = factorial;
}
function calcFact( num )
{
var i;
var fact = 1;
for( i = num; i >= 1; i-- )
{
fact = fact * i;
}
return fact;
}