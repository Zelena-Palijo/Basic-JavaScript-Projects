function Ride_Function(){
  var Height, Can_ride;
  Height=document.getElementById("Height").ariaValueMax;
  Can_ride=(Height<52)?"You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function Vote_Function(){
  var Age, Can_vote;
  Age=document.getElementById("Age").ariaValueMax;
  Can_vote=(Age<18)?"You are too young":"You are old enough";
  document.getElementById("Vote").innerHTML=Can_vote+" to vote.";
}