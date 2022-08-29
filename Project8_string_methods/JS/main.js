//concatenate
function full_Sentence(){
  var part_1="I was born ";
  var part_2="in the rain ";
  var part_3="on the Pontchartrain ";
  var part_4="underneath the Louisiana moon";
  var whole_sentence=part_1.concat(part_2,part_3,part_4);
  document.getElementById("Concatenate").innerHTML=whole_sentence;
}