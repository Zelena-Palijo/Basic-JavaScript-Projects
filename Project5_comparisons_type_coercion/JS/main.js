document.write(typeof "hello my old friend"); //type of string

document.write(typeof 900); //type of number

document.write("90"+4); //type coercion

function my_Function(){
  document.getElementById("Test").innerHTML=0/0; //result NaN
}

function NAN(){
document.getElementById("Test-1").innerHTML=isNaN('What am I'); //true since not a number
}

function NAN2(){
document.getElementById("Test-2").innerHTML=isNaN('987'); //falst since a number
}

document.write(6E900); //result infinity

document.write(-6E900); //result -infinity