function Color_Function(){ //named colour but choosing soda flavors


  var Color_Output;
  var Colors=document.getElementById("Color_Input").value;
  var Color_String=" is a great soda choice!";
  switch(Colors){
    case "Cola":
      Color_Output="Cola"+Color_String;
    break;
    case "Lemon-lime":
      Color_Output="Lemon-lime"+Color_String;
    break;
    case "Root beer":
      Color_Output="Root beer"+Color_String;
    break;
    case "Orange":
      Color_Output="Orange"+Color_String;
    break;
    case "Diet":
      Color_Output="Diet"+Color_String;
    break;
    default:
      Color_Output="Please enter a soda type as written on the above list.";
  }
  document.getElementById("Output").innerHTML=Color_Output;
}

//trying get elements by class name function
function Hello_World_Function(){
  var A=document.getElementsByClassName("Touch");
  A[1].innerHTML="This text has changed!"
}

//draw a circle with js and canvas html

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke(); //not working, troubleshoot???

var c=document.getElementById("myCanvas1");
var ctx=c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();