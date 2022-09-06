//this variable keeps track of whose turn it is
let activePlayer='X';
//this array stores an array of moves. we use this to detrmine win conditions.
let selectedSquares=[];

//this function is for placing an x or o in a square.
function placeXOrO(squareNumber){
  //this condition ensures a square hasn't been selected already
  //the .some() method is used to check each element of the selectSquare array to see if it contains the square number clicked on
  if (!selectedSquares.some(element=>element.includes(squareNumber))){
    //this variable retrieves the html element id that was clicked
    let select=document.getElementById(squareNumber);
    //this condition checks whose turn it is
    if (activePlayer==='X'){
      //if active player is equal to x the x.png is placed in html
      select.style.backgroundImage='url("images/x.png")';
      //active player may ony be x or O so if not X it must be O
    } else{
      //if activeplayer is equal to o the o.png is placed in html
      select.style.backgroundImage='url("images/o.png")';
    }
    //squarenumber and actie player are concatenated together and added to array.
    selectedSquares.push(squareNumber+activePlayer);
    //this calls a function to check for any win conditions
    checkWinConditions();
    //this condition is for changing the active player.
    if (activePlayer==='X'){
      //if active player is X change it to O
      activePlayer='O';
      //if active player is anything other than X
    } else{
      //change the active player to X
      activePlayer='X';
    }
    //plays placement sound
audio('.media/place.mp3');
//this checks to see if it is the computer's turn
if (activePlayer==='O'){
  //disables clicking for computer turn
  disableClick();
  //waits 1 second before the computer places an image and enables click.
  setTimeout(function(){computersTurn();},1000);
}
//returning true is needed for computersTurn() function to work
return true;
  }
  //this function results in a random square being selected by the computer
  function computersTurn(){
    //this boolean is needed for our while loop
    let success=false;
    //this variable stores a random number 0-8
    let pickASquare;
    //this condition allows our while loop to keep trying if a square is selected already.
    while(!success){
      //a random number between 0 and 8 is selected
      pickASquare=String(Math.floor(Math.random()*9));
      //if the random number evaluated returns true, the square hasn't been selected yet
      if(placeXOrO(pickASquare)){
        //this line calls the function
        placeXOrO(pickASquare);
        //this changes our boolean and ends the loop
        success=true;
      };
    }
  }
}




