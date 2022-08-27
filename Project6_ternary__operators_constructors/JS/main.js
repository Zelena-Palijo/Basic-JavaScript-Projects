function Ride_Function(){
  var Height, Can_ride;
  Height=document.getElementById("Height").ariaValueMax;
  Can_ride=(Height<52)?"You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Vote_Function(){ //vote ternary objects challenge
  var Age, Can_vote;
  Age=document.getElementById("Age").ariaValueMax;
  Can_vote=(Age<18)?"You are too young":"You are old enough"; //set age to 18
  document.getElementById("Vote").innerHTML=Can_vote+" to vote.";
}

//Constructors challege c/p
function Vehicle(Make, Model,Year,Color){
  this.Vehicle_Make=Make;
  this.Vehicle_Model=Model;
  this.Vehicle_Year=Year;
  this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge","Viper", 2020, "Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");
function myFunction(){
  document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a "+Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model+" manufactured in "+Erik.Vehicle_Year;
}
//New keyword challenge
function my_Function(){
  document.getElementById("New_and_This").innerHTML="Emily drives a "+Emily.Vehicle_Color+"-colored "+Emily.Vehicle_Model+" manufactured in "+Emily.Vehicle_Year;
}

//Reserved keyword challenge
function Reserved(){ 
  var Delete={ //not going to work bc reserved word
    Status:"possible",
  };
  document.getElementById("Reserved").innerHTML=Illegal.Status;
}

//136 object constructor function challege
function Person(first, last, age, eyecolor){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
var Mark=new Person("Jack","Smith", 20,"Green");
var Jerry=new Person("Emily","Mac",19,"Black");
function Who_dis(){
  document.getElementById("People").innerHTML="Jerry is actually "+Jerry.firstName + Jerry.lastName + " who is a "+ Jerry.age + " year old "+ Jerry.eyeColor + "-eyed person.";
}