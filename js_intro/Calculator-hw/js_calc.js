function myCalculator(){
  var name = prompt("Please tell me your name!");
  alert(("Hello, ") + (name) + ("! Welcome to myCalculator!"));
  var calculatorOption = prompt("Which calculator will you be using today, (b)asic, (a)dvanced, (i)BMI, or (t)rip?");

  switch (calculatorOption) {
    case "b":
      function myBasicCalculator(number1, number2, operator)
      {
        number1 = parseFloat(prompt("Enter a number"));
        operator = prompt("Enter an operator");
        number2 = parseFloat(prompt("Enter a number"));

        switch (operator) {
          case "+":
            alert(("The answer is ") + (number1 + number2) + ("."));
            break;
          case "-":
            alert(("The answer is ") + (number1 - number2) + ("."));
            break;
          case "*":
            alert(("The answer is ") + (number1 * number2) + ("."));
            break;
          case "/":
            alert(("The answer is ") + (number1 / number2) + ("."));
            break;
          default:
            alert("Please enter relevant values.");
        }
      }
      myBasicCalculator();
    break;
    case "a":
      function myAdvancedCalculator(x, y){
        var advanceOption = prompt("Which function do you wish to perform, (1)Power, or (2)Square Root?")

        switch (advanceOption) {
          case "1":
            x = parseFloat(prompt("Enter your base"));
            y = parseFloat(prompt("Enter your exponent"));
            alert(("The answer is ") + (Math.pow(x,y)) + ("."));
            break;
          case "2":
            x = parseFloat(prompt("Enter number you'd like to take a square root of"));
            alert(("The answer is ") + (Math.sqrt(x)) + ("."));
            break;
          default:
            alert("Please enter relevant values.")
        }
      }
      myAdvancedCalculator();
    break;
    case "i":
      function myBMICalculator(weight, height, BMIOption){
        BMIOption = prompt("Which do you prefer, (1)Metrics, or (2)Imperials?");

        switch (BMIOption) {
          case "1":
           weight = parseFloat(prompt("Enter your weight in kilograms"));
           height = parseFloat(prompt("Enter your height in metres"));
           alert(("Your BMI is ") + (weight/(Math.pow(height, 2))).toPrecision(3) + ("."));
           break;
          case "2":
           weight = parseFloat(prompt("Enter your weight in pounds"));
           height = parseFloat(prompt("Enter your height in inches"));
           alert(("Your BMI is ") + (weight/(Math.pow(height, 2)) * 703).toPrecision(3) + ("."));
           break;
          default:
           alert("Please enter relevant values.");
        }
      }
      myBMICalculator();
    break;
    case "t":
      function myTripCalculator(distance, fuelEff, costPerGal, speed, time, costOfJourn){
        distance = parseFloat(prompt("Enter distance in miles"));
        speed = parseFloat(prompt("Enter average speed"));
        fuelEff = parseFloat(prompt("Enter fuel efficiency in MPG"));
        costPerGal = parseFloat(prompt("Enter cost per gallon"));

        time = distance / speed;
        costOfJourn = (distance/fuelEff) * costPerGal;

        if (costOfJourn < 0) {
          alert("Please re-evaluate your values.")
        }
        else{
        alert(("Your journey will take ") + (time.toPrecision(3)) + (" hours")+ (" and it will cost £") + (costOfJourn.toPrecision(5)) + ("."));
        }
        }
        myTripCalculator();
      break;
      default:
        alert("Please enter relevant values.")
      }
}
//input: distance, fuel efficiency, cost per gallon, speed --> resulttime and cost of your journey






// function myFunction(x, y, z, oper) {

//   x=prompt("Enter a number");
//   oper=prompt("Enter an operator");
//   y=prompt("Enter a number");
//
// //Conditions
//   if(oper=="+"){
//     z=Number(x)+Number(y);
//   }
//   else if(oper=="/"){
//     z=Number(x)/Number(y);
//   }
//   else if(oper=="*"){
//     z=Number(x)*Number(y);
//   }
//   else if(oper=="-"){
//     z=Number(x)-Number(y);
//   }
//   else if(oper=!null){
//     z="Error"
//   }
//   else if(x=!null){
//     z="Error"
//   }
//   else if(y=!null){
//     z="Error"
//   }
// //Popup return value
//   alert(z);
//   }
