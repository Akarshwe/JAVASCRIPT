
function armstrong()
{
    var num = Number(document.getElementById("number").value);
    console.log(num)
   //  var a= document.getElementById('result').value
    

    let sum = 0;
    //store the number to check later
    let tmp = num;
    //Extract each digit from the number
    while(num > 0){
         //retrieve the last digit
         let d = parseInt(num % 10);
         //find the cube
         d = d ** 3;
         sum = sum + d;
         //convert float to Integer
         num = parseInt(num / 10);
    }
    if(tmp === sum)
    {
       //  a.innerHTML= "The number: " + sum + " is Armstrong Number"
       document.getElementById("result").innerHTML="The number: " + sum + " is Armstrong Number"
    }
    else
    {
       document.getElementById("result").innerHTML="The number: " + sum + " is not an Armstrong Number"

       // a.innerHTML= "The number: " + sum + " is not anArmstrong Number"
    }
}