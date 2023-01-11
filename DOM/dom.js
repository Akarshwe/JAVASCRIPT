// DOM ------ getElementById

// var a = document.getElementById("head1");
// console.log(a);


// a.innerHTML = "Learn JavaScript" //to change the html content(h1)
// a.style.color = "blue" // to change the text color

//

// // DOM -------getElementByClassName

// var a = document.getElementsByClassName("head1");
// console.log(a)
// a[0].innerHTML = "Good Morning";
// a[2].style.color = "red";

// // 

// // DOM -------getElementByTagName

// var a = document.getElementsByTagName("p");
// console.log(a);
// a[0].innerHTML = "CHANGED PARAGRAPH";
// a[1].style.color = "red";

// // 

// // DOM -------- getElementByName

// var a = document.getElementsByName("text")[0];
// console.log(a);

// var b = document.getElementById("head");

// function message(){
//     b.innerHTML = "Hello" + a.value;
// }

// 

// DOM------getElement using css selectors (QuerySelectorAll -------- method)
// access elements or add styles by using tagname, .class,#id


// // tagname ------- select a list of element by tagname or by classname ------- use queryselector
// var a = document.querySelectorAll("h1");
// console.log(a);
// a[0].innerHTML = "Learn Html";
// a[1].style.color = "red";

// // idname ------- select a single element by id ------- use queryselector
var a = document.querySelector("#head");
console.log(a);
a.innerHTML = "learn Html";
