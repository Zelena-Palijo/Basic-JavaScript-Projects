//concatenate
function full_Sentence(){
  var part_1="I was born ";
  var part_2="in the rain ";
  var part_3="on the Pontchartrain ";
  var part_4="underneath the Louisiana moon";
  var whole_sentence=part_1.concat(part_2,part_3,part_4);
  document.getElementById("Concatenate").innerHTML=whole_sentence;
}

//slice method
function slice_Method(){
  var Sentence="I was born in the rain on the Pontchartrain underneath the Louisiana moon."
  var Section=Sentence.slice(30,43);
  document.getElementById("Slice").innerHTML=Section;
}

//upper case method
function Upper_case(){
let text = "Hello World!";
let result = text.toUpperCase();
document.getElementById("demo").innerHTML=result;
}
