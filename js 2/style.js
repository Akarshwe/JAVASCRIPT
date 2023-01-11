// // named fuction 
// function addNum(a,b)
// {
//     return a+b;
// }
// console.log(addNum(4,3));
// console.log(addNum(5,5));
// var sum = addNum(2,3);
// console.log(sum);

// // anonymous function
// var anon = function(a,b)
// {
//     return a+b;
// }
// //anon(4,3);
// console.log(anon(4,3));

// // setTimeout
// setTimeout(function(){
//     console.log("anonymous function call in setTimeout")
// },3000);

// // constructors

// var cons=new Function("a","b","console.log('in constructor function');return a+b;");
// console.log(cons(2,4));

// // self-invoking functions
// (function(a,b){
//     console.log("in self-invoking function")
//     console.log(a+b)
//     return a+b;
// }(2,6));

// function addn()
// {
//     alert("hiiiii")
// }
// (addn())



// // calculating the square of a number

// // named function
// function calsqrt(a)
// {
//     return a*a;
// }
// console.log(calsqrt(2));


// // anonymous function
// var calcte=function(b){
//     return b*b;
// }
// console.log(calcte(4));


// // new constructor
// var cal=new Functon("c","return c*c");
// console.log(cal(5));

// self-invokingfunctions
// (function(d){
//     console.log("calling self-invoking function: " +d)
//     return d*d;
// })(6);

// // object creation eg1

// function createPerson(){
//     var person = new Object();
//     person.name = "saya";
//     person.age = "46";
//     return person;
// }
// var saya=createPerson();
// console.log(saya)

// // eg2

// function createPerson2(){
//     var person = {}; //creating a blank object
//     person['name']="saya";
//     person['age']=46;
//     return person;
// }
// var saya=createPerson2();
// alert("name"+ saya.name + "age" + saya .age);

// function createPerson3(){
//     var person = { name:"saya",age :46 };
//     return person;
// }
// var saya = createPerson3();
// alert("your name is:" + person.name + "\n your age is: " + person.age);


// // eg4

// function createPerson4(){
//     var person = {
//         name: " saya",
//         age: 60,
//         designation:"trainer"
//     };
//     return person
// };
// saya = createPerson4();
// console.log(saya)

// // // using constructor
// function person(){
//     this.name = "saya";
//     this.age = 46;
// }
// // to call the specialfunction, we have to use the operator called "new"
// // after the function is ready, you have to call it only using the new operator.
// var person = new person();
// alert("your name is :"+ person.name +"\n your age is :" + person .age);


// // // object.create()
// // using the prototype, we can create as many of object we want.
// var Animal={
//     type: "Invertibrates",
//     // display type is a method which is assigned to a function
//     displayType: function(){alert("type is :" + this .type);}
// }
// // we can create onject by using 'Animal' prototype
// var Horse=Object.create(Animal);
// Horse.displayType();


// object delection
// var trainer={
//     name:"abc",
//     subject:["math","physics","chemsitry"],
//     teaches:["f","s"],
//     age :"60",
// }
// // to get the prperties
// var properties="";
// for (p in trainer){
//     properties+=p+":"
// }

// console.log(properties)

// delete trainer.age;

// var properties="";
// for (p in trainer){
//     properties+= p+":"
// }

// console.log(properties)