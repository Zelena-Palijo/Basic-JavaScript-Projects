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

//array function 
function array_Function(){
  var water=[];
  water[0]="solid";
  water[1]="liquid";
  water[2]="gas";
  document.getElementById("Array").innerHTML="At 5 degress Celcius, water is a " +water[1]+".";
}

//constant function
function constant_function(){
  const Macaroni={brand:"Kraft",color:"orange",package:"box"};
  Macaroni.package="cup";
  Macaroni.color="yellow";
  document.getElementById("Constant").innerHTML="I picked up some "+Macaroni.package+" "+Macaroni.brand+" mac n cheese at the store";
}

//error constant vs working var
const Z=2
Z=3
document.write(Z);

var A=10
A=9
document.write(A);

//let 
function let_function(){
  let C=3
  document.getElementById("let").innerHTML=C;
}

//return function example ***not working?
function return_function(name){
  return "Hello " + name;
};
document.getElementById("e").innerHTML=return_function("Zelena");

//object let function
function computer(){
let computer={
  make:"Apple",
  model:"Air",
  year:"2020",
  color:"grey",
  description: function(){
    return "The computer is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("macbook").innerHTML=computer.description();
}

//break statement challenge
function let1_function(){
  let word="";
  for (let i=0;i<10;i++){
    if (i===3) { break; }
    word += "The number is " +i +"<br>";
  };
  document.getElementById("demo-2").innerHTML=word;
  }