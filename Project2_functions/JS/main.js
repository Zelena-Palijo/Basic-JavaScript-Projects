function Function(){  //created new function
  var str1="This is the button text!"; 
  var str2="Also a button" //added second variable
  document.getElementById("Button_Text").innerHTML=str1+str2; //added both together...is this right?
}

function myFunction(){ //Added new function
  var sentence="I could really use"; //added new variable and defined it
  sentence+=" some banana bread." //added variable to concatenate
  document.getElementById("Concatenate").innerHTML=sentence;
}