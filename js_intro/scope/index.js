//scope => what things are available to call
//code can see out but can't see in
// var outsideVariable = 5;
//
// function doSomething(){
//   console.log(outsideVariable);
// }
//
// doSomething();

// function doSomething() {
//   var insideVariable = 5;
// }
// doSomething();
//
// console.log(insideVariable);

// function firstFunction(){
//   console.log("I'm in the firstFunction");
// }
//
// function secondFunction() {
//   firstFunction();
//   console.log("I'm the secondFunction");
// }
// secondFunction();


//Global scope => stuff from outside


//Nesting => define a function within a function
// function joinStringsAndPrint(string1, string2){
//   var newString = string1 + string2;
//
//   function printString(string) {
//     console.log(string);
//
//     //q3 - run
//     console.log(newString);
//
//     //q4 - run
//     console.log(string1 + string2);
//   }
//
//   printString(newString);
//   return newString;
// }
//
// var string1 = "Hello";
// var string2 = " me";
//
// var result = joinStringsAndPrint(string1, string2);
// //Store return value
//
// //q1 - not
// printString("run from outside joinStrings");
// //q2 - run
// console.log(newString);


//closures
//Passing function as variables
// function sayHello() {
//   console.log("Hello World");
// }
//
// function functionCaller(functionToRun) {
//   functionToRun();
//   //Called to pass
// }
// // Pass function through another function
// functionCaller(sayHello);

//declared
// function onTimerComplete(){
//   console.log("timer finished");
// }
//
// setTimeout(onTimerComplete, 3000);

//counter
// function createCounter() {
//   var total = 0;
//
//   return function() {
//     total++;
//     return total;
//   }
// }
// //Declaring unnamed function
// var counter = createCounter();
// //Calling counter
// counter();
// //1
// counter();
// //1
// counter();
// //1
//
// var total = counter();
// //1
// console.log(total);
// //total =  4

//callback - when time is up, the function will be called
for (var i = 0; i < 10; i++) {
  setTimeout((function(j){
    console.log(j);
    //j is the parameter of the function
  })(i),(i*1000));
  //i is an argument of that (function => i)
}
