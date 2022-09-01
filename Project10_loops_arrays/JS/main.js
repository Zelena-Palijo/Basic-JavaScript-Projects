function Call_Loop(){
  var Digit="";
  var X=10;
  while(X>1){
    Digit += "<br>"+X;
    X--;
  }
  document.getElementById("Loop").innerHTML=Digit;
}