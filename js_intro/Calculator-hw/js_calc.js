function myFunction() {
//Declaring variables
  var x,y,z,oper;
  x=prompt("Enter a number");
  oper=prompt("Enter an operator");
  y=prompt("Enter a number");

//Conditions
  if(oper=="+"){
    z=Number(x)+Number(y);
  }
  else if(oper=="/"){
    z=Number(x)/Number(y);
  }
  else if(oper=="*"){
    z=Number(x)*Number(y);
  }
  else if(oper=="-"){
    z=Number(x)-Number(y);
  }
  else if(oper=!null){
    z="Error"
  }
  else if(x=!null){
    z="Error"
  }
  else if(y=!null){
    z="Error"
  }
//Popup return value
  alert(z);
  }
