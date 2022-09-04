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