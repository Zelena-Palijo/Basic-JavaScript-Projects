//global variable
var X=30
function Add_numbers_1(){
  document.write(20+X+"<br>");
}
function Add_numbers_2(){
  document.write(X+100);
}

Add_numbers_1();
Add_numbers_2();

//local variable
function Add_numbers_3(){
  var Y=10;
  document.write(Y+100+"<br>");

}
function Add_numbers_4(){
  document.write(Y+100);
}
Add_numbers_3();
Add_numbers_4();

//debug why above not working
function Add_numbers_5(){
  var Z=10;
  console.log(15+Z);
}
function Add_numbers_6(){
  console.log(Z+100);
}
Add_numbers_5();
Add_numbers_6();


//number call
function get_Date(){
  if (new Date().getHours()<18){
    document.getElementById("Greeting").innerHTML="How are you today?";
  }
}

//writing an if statement
function What(){
  if (28<36){
  document.getElementById("Whatif").innerHTML="The number is smaller, but that's about it.";
  }
}

//else statements
function Age_Function(){
  Age=document.getElementById("Age").value;
  if(Age>=21){
    Drink="You are old enough to drink in the US.";
  }
  else{
    Drink="You are not old enough to drink in the US. :(";
  }
  document.getElementById("How_old_are_you?").innerHTML=Drink;
}

//else if statements
function Time_function(){
  var Time=new Date().getHours();
  var Reply;
  if(Time<12==Time>0){
    Reply="It is morning time!";
  }
  else if(Time>=12==Time<18){
    Reply="It is afternoon.";
  }
  else{
    Reply="It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML=Reply;
}