// // arrays
// // 1. earlier definition
// var animal = "elephant";
// var animal = "cat";

// // using Array
// var animal = ["lion","tiger","cat","dog"];
// document.write(animal + "<br>");
// // to access one element from an array we use index numbers started with 0.
// document.write(animal[0] + "<br>");
// document.write(animal[2] + "<br>");

// // replace a value from array
// var animal = ["lion","tiger","cat","dog"];
// document.write(animal + "<br>");

// animal[0] = "elephant";
// animal[4] = "cheetah";
// document.write(animal + "<br>");

// // length of an array
// var x = animal.length;
// document.write(x+"<br>");

// // print all items using for loop
// for (var i = 0; i<x;i++)
// document.write(animal[i] + "<br>");

// //  add an element to an Array

//  var animal = ["lion","tiger","car","dog"];
//  animal[5] = "elephant";
//  document.write(animal);

// // by using push method
// animal.push("fox","elephant","cheetah");
// document.write(animal);
// document.write("<br>");

// // delete an array element

// // using the shift method ---it will delete the first element from the array
// var animal = ["lion","tiger","cat","dog"];
// animal.shift();
// document.write (animal);
// document.write("<br>");


// // using pop method -----it will delete the last element from the array
// var animal =["lion","tiger","cat","dog"];
// animal.pop();
// document.write(animal);
// document.write("<br>");


// // using the splice method ------it will delete the element as our wish from the array
// var animal = ["lion","tiger","cat","dog"];
//  animal.splice(2,2); // 2 is the index number of cat and 1 is the count of element that want to be deleted
// document.write(animal);
// document.write("<br>");

// // to sort a array ---- with string ---- sort in ascending order
// var animal = ["lion","tiger","cat","dog"];
// animal.sort();
// document.write(animal);
// document.write("<br>");


// // with number 
// var a = [ 1,6,8,4,9];
// a.sort();
// document.write(a);
// document.write("<br>");


// // add two elements in an array
// var a = [ 1,6,8,4];
// document.write(a[1]+a[3]);
