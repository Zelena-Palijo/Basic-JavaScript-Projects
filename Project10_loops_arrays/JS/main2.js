
//break statement challenge
let word="";
for (let i=0;i<10;i++){
  if (i===3) { break; }
  word += "The number is " +i +"<br>";
}
document.getElementById("demo-2").innerHTML=word;