//Declaring variables
  function myFunction() {
  var x,y,z,oper;
  x=prompt("Type a number");
  oper=prompt("Type an operator");
  y=prompt("Type a number");

//Conditions
  if(oper=="+"){
    z=Number(x)+Number(y);
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
  else if(oper=="/"){
    z=Number(x)/Number(y);
  }
  else if(oper=="*"){
    z=Number(x)*Number(y);
  }
  else if(oper=="-"){
    z=Number(x)-Number(y);
  }
//Popup return value
  alert(z);
  }
