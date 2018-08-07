//controlflow
//If money in pocket is less than £10
//  go home
// otherwise, have a drink
//--Example analogy--

//--to write them in js--
// if (thingstodo) {
//   code_for_action
// }

// var moneyInPocket = parseFloat(prompt("How much money do you have?"));
// var drinksDrunk = parseFloat(prompt("How many have you had already?"));
// var priceOfCrisp = parseFloat(propmt("How much are those crisp?"));
//
// if (moneyInPocket > 10 && drinksDrunk < 3) {
//   console.log("Another drink please!");
// }
// else if (moneyInPocket > 5 || priceOfCrisp == 0) {
//   console.log("Just crisps then.");
// }
// else {
//   console.log("I'm off home.");
// }

var name = "Tim";
//If version
if (name === "Bob") {
  console.log("Hi, Bob.");
}
else if (name === "Tim") {
  console.log("Hi, Tim.");
}
else if (name === "Steve") {
  console.log("Hi, Steve.");
}

//Switch version
switch (name) {
  case "Bob":
    console.log("Hi, Bob.");
    break;
  case "Tim":
    console.log("Hi, Tim.");
    break;
  case "Steve":
    console.log("Hi, Steve.");
    break;
    //Break --> prevent all from being executed
    //Each line will get executed until one is true
  default:
    console.log("Hi, default person.");
    //If none are true, the default is executed
}
