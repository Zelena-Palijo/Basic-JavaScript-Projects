function my_Dictionary(){ //created dictionary KVP
  var Hero={
    Species:"Cyborg",
    Color:"Steel",
    Class: "S",
    Age:19,
    Catchphrase:"Master!"
  };
  document.getElementById("Dictionary").innerHTML=Hero.Class;
}

function my_Dictionary(){
  var Hero={
    Species:"Cyborg",
    Color:"Steel",
    Class: "S",
    Age:19,
    Catchphrase:"Master!"
  };
  delete Hero.Age; //delete assignment prompt
  document.getElementById("Dictionary-1").innerHTML=Hero.Age; //should produce undefined
}