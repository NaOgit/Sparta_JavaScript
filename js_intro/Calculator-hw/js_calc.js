//Declared greeting prompt
var name = prompt("Please tell me your name!");
alert(("Hello, ") + (name) + ("! Welcome to myCalculator!"));

//Declared main calculator body function
function myCalculator(){
  //Declared prompt for user to pick a calculator
  var calculatorOption = prompt("Which calculator will you be using today, (b)asic, (a)dvanced, (i)BMI, or (t)rip?");
  //Switch calculators
  switch (calculatorOption) {
    case "b":
      //Declared Basic calculator function
      function myBasicCalculator(number1, number2, operator) {
        //User input parameters
        number1 = parseFloat(prompt("Enter a number"));
        operator = prompt("Enter an operator");
        number2 = parseFloat(prompt("Enter a number"));
        //Switch operators
        switch (operator) {
          case "+":
            //Return sum of
            alert(("The answer is ") + (number1 + number2) + ("."));
            break;
          case "-":
            //Return the subtracted
            alert(("The answer is ") + (number1 - number2) + ("."));
            break;
          case "*":
            //Return product of
            alert(("The answer is ") + (number1 * number2) + ("."));
            break;
          case "/":
            //Return the divided
            alert(("The answer is ") + (number1 / number2) + ("."));
            break;
          default:
            //If unexpected values are entered
            alert("Please enter relevant values.");
        }
      }
      //Called function
      myBasicCalculator();
    break;
    case "a":
      //Declared Advance calculator function
      function myAdvancedCalculator(number, power){
        //Declared option prompt for user input
        var advanceOption = prompt("Which function do you wish to perform, (1)Power, or (2)Square Root?")
        //Switch options
        switch (advanceOption) {
          case "1":
            //Return product of power
            number = parseFloat(prompt("Enter your base"));
            power = parseFloat(prompt("Enter your exponent"));
            alert(("The answer is ") + (Math.pow(number,power)) + ("."));
            break;
          case "2":
            //Return square-rooted value
            number = parseFloat(prompt("Enter number you'd like to take a square root of"));
            alert(("The answer is ") + (Math.sqrt(number)) + ("."));
            break;
          default:
            //If unexpected values are entered
            alert("Please enter relevant values.")
        }
      }
      //Called function
      myAdvancedCalculator();
    break;
    case "i":
      //Declared BMI calculator function
      function myBMICalculator(weight, height, BMIOption){
        //Declared prompt for user to input prefered system
        BMIOption = prompt("Which do you prefer, (1)Metrics, or (2)Imperials?");
        //Switch between unti systems
        switch (BMIOption) {
          case "1":
            //BMI calculation in metrics
           weight = parseFloat(prompt("Enter your weight in kilograms"));
           height = parseFloat(prompt("Enter your height in metres"));
           alert(("Your BMI is ") + (weight/(Math.pow(height, 2))).toPrecision(3) + ("."));
           break;
          case "2":
            //BMI calculation in Imperials
           weight = parseFloat(prompt("Enter your weight in pounds"));
           height = parseFloat(prompt("Enter your height in inches"));
           alert(("Your BMI is ") + (weight/(Math.pow(height, 2)) * 703).toPrecision(3) + ("."));
           break;
          default:
          //If unexpected values are entered
           alert("Please enter relevant values.");
        }
      }
      //Called function
      myBMICalculator();
    break;
    case "t":
      //Declared Trip calculator function
      function myTripCalculator(distance, fuelEff, costPerGal, speed, time, costOfJourn){
        //User input parameters
        distance = parseFloat(prompt("Enter distance in miles"));
        speed = parseFloat(prompt("Enter average speed"));
        fuelEff = parseFloat(prompt("Enter fuel efficiency in MPG"));
        costPerGal = parseFloat(prompt("Enter cost per gallon"));
        //Time and cost calculation
        time = distance / speed;
        costOfJourn = (distance/fuelEff) * costPerGal;
        //If the cost of journey is less than 0
        if (costOfJourn < 0) {
          alert("Please re-evaluate your values.")
        }
        //Otherwise
        else{
          alert(("Your journey will take ") + (time.toPrecision(3)) + (" hours")+ (" and it will cost £") + (costOfJourn.toPrecision(5)) + ("."));
        }
      }
        //Called function
        myTripCalculator();
      break;
      default:
        alert("Please enter relevant values.")
    }
}
