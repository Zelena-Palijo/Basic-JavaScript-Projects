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
