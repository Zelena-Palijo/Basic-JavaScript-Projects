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

document.write(19>1); //Boolean, true

document.write(19<1); //false

console.log(3+4); //check console for 7

console.log(17<3); //check console for false

document.write(36==36); //equal, true

document.write(36==28); //not equal, false

//triple equal sign challenge
X=36
Y=36
document.write(X===Y); //true, same data type and number

C=36
D="28"
document.write(C===D); //false, diff data type, diff value

A=36
B="36"
document.write(A===B); //false, diff data type, same value

F=78
G=79
document.write(F===G); //false, same data type, diff value

//BOOLEAN LOGICAL OPERATORS
//AND
document.write(36>28 && 36>20); // T T =T

document.write(28>36 && 36>20); // F T =F

//OR
document.write(28>36||36>20); //F T =T

document.write(28>36||20>36); //F F =F

