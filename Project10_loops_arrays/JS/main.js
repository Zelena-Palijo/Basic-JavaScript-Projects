function Call_Loop(){ //countdown
  var Digit="";
  var X=10;
  while(X>1){
    Digit += "<br>"+X;
    X--;
  }
  document.getElementById("Loop").innerHTML=Digit;
} //seems to pop up all at once, defer not working?

//find string length
let text="Heya heya";
let length=text.length;
document.getElementById("demo").innerHTML=length;

//for loop
var Instruments=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var Content="";
var Y;
function for_Loop(){
  for (Y=0;Y<Instruments.length;Y++){
    Content += Instruments[Y]+"<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML=Content;
}