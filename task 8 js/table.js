

var email = document.getElementById("email");
var password = document.getElementById("password");

// 1 normal


function validation() {
    if (email.value == "" || password.value == "") {
        alert("Fields cannot be empty");
        return false;
    }
    else {
        alert("Validation is proper")
        return true;
    }
}


// // 2 trim

// function validation() {
//     if (email.value.trim() == "" || password.value.trim() == "") {
//         alert("Fields cannot be empty");
//         return false;
//     }
//     else {
//         alert("validation is proper")
//         return true;
//     }
// }


// // 3 customize

// function validation() {
//     if (email.value == "") {
//         alert("Email Cannot Be Empty");
//         return false;
//     }
//     else if (password.value == "") {
//         alert("Password Cannot Be Blank");
//         return false;
//     }
//     else if (password.value.length <= 5) {
//         alert("Password Is Too Short");
//         password.style.border = "2px solid red";
//         return false;
//     }
//     else {
//         return true;
//     }
// }