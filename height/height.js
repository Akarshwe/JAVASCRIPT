// // feet to cm

// var feet =  parseInt(prompt("feet"));
// var cm = feet * 30.48;
// console.log(cm + "cm");

// // inches to cm

// var inches = parseInt(prompt("inches"));
// var cm = inches * 2.54;
// console.log(cm + "cm");



function calculate(){
    var cm
    var a = document.getElementById("inputfeet");
    // var b = document.getElementById("inputinches");
   
    var res = document.getElementById("head");

    cm=feet * 30.48;
    res.innerHTML=cm
}