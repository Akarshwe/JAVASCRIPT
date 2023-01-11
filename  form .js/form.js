// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var Num = document.getElementById("num");

// // 

// function validation(){
//     if (email.value == ""||password.value == ""){
//         alert("Fields cannot be empty");
//         return false;
//     }
//     else if (email.value == ""||Num.value == ""){
//         alert("Fields cannot be empty");
//         return false;
//     }
//     else{
//         alert("validation is proper")
//         return true;
//     }
// }
// // 

var email = document.getElementById("email");
var error = document.getElementById("error");


// to check whether the email is in email Format
// for that we need to create email format using regular expression
// regular expression is set of strings or special characters
// regular expression is strat and end with forwar slash(/)
// ^ denotes the start of the string
// $ denotes the end of a string 
// . and - are special characters, so it should follow backward slash+
// + denotes wharever inside the brackets should occur one time and it can occur more than one time 
// {2,4} denotes maximum number of characters as extension
// ?  denotes its occur zero or one time
// test() check the value that are given with the regular expresssion.
// \w denotes A-Za-z0-9

function validate() {
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
    // var regexp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
    if (regexp.test(email.value)) {
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }
    else {
        error.innerHTML = "invalid";
        error.style.color = "red";
        return false;
    }
}