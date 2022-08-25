function addition_Function(){
  var addition=36+28; //function to be done
  document.getElementById("Math").innerHTML="36+28 = "+addition; //make it so it shows the whole add process
}

function subtraction_Function(){
  var subtraction=36-28; //function to be done
  document.getElementById("Math-2").innerHTML="36-28 ="+subtraction;
}

function multiplication(){ //don't need "function part"
  var multiplication=36*28;
  document.getElementById("Math-3").innerHTML="36 x 28 = "+multiplication;
}

function division(){
  var division=36/28;
  document.getElementById("Math-4").innerHTML="36 / 28 = "+division; 
}

function more_Math(){
  var simple_Math=(3+6)*36/2-8;
  document.getElementById("Math-5").innerHTML="3 plus 6,multiplied by 36, divided in half, and then subtracted by 8 equals "+simple_Math;
}

function modulus_Operator(){
  var simple_M=25%6;
  document.getElementById("Math-6").innerHTML="25 divided by 6 results in a remainder of: "+simple_M;
}

function negation_Operator(){
  var x=1000;
  document.getElementById("math-7").innerHTML=-x;
}