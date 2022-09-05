//using html data attributes
function displayType(character){
  var characterType=character.getAttribute("data-character-type");
  alert("A free "+ characterType+" is behind door number "+ character.innerHTML+"!")
}