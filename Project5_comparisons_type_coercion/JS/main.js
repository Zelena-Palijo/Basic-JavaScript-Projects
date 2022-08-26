document.write(typeof "hello my old friend"); //type of string

document.write(typeof 900); //type of number

document.write("90"+4); //type coercion

function my_Function(){
  document.getElementById("Test").innerHTML=0/0; //result NaN
}

document.getElementById("Test-1").innerHTML=isNaN('What am I'); //true since not a number

document.getElementById("Test-2").innerHTML=isNaN('987');