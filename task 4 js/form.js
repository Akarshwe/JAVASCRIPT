// let FirstName = document.getElementById("fname");
// let LastName = document.getElementById("lname");
// let Email = document.getElementById("email");
// let Password = document.getElementById("password");

// function validate() {
//     if( fname.value == "" || lname.value =="" || email.value == "" || password.value == "" )
//     {
//         alert("invalid");
//     return false;
// }
//     else{
// alert("validated");
// return true;
// }}



let FirstName = document.getElementById("fname");
let LastName = document.getElementById("lname");
let Email = document.getElementById("email");
let Password = document.getElementById("password");

function validate() {
    if( email.value == "" )
    {
        alert("invalid");
    return false;
}
else if ( password.value =="")
{
    alert("invalid");
    return false;
}
else if(password.value.length>=7)
{
    alert("Password is smaller");
    return false;
}

else if( fname.value == "" || lname.value =="")
{
    alert("invalid")
    return false;
}
    else{
alert("validated");
return true;
}}