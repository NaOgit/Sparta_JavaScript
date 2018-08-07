// //Basic function
// var result = 5 + 10;
// var result2 = 1 + 2;
// console.log(result);
//
// //Declaring named Function
// function addNumbers() {
//   var function_result = 5 + 10;
//   console.log(function_result);
// }
//
// //Unamed function
//
// var addNumbers2 = function() {
//   var function_result2 = 5 + 10;
//   console.log(function_result2);
// }
//
// //calling the function
// addNumbers();
// addNumbers2();

//Hoisting
// makeNoise();
//
// function makeNoise() {
//   alert("How annoying - We will never use these in our games");
// }

// function addNumbersTogether(number1, number2) {
//   var result = number1 + number2;
//   console.log(result);
// }
//
// addNumbersTogether(1,5);
// addNumbersTogether(10,5);

function addNumbersWithReturn(number1, number2) {
  var result = number1 + number2;
  return result;
}

var answer1 = addNumbersWithReturn(1,3);

debugger;
