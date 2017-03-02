//The variable that stores the computers choice to be played
var myChoice;

//The variable to store the user's choice
var userPlay = "";

//load the page when the document is ready
$(document).ready(function(){

  //Let the console user know the game has started
  console.log("The game starts");

  //when the user clicks the play button, the following happens.
  $("#rock").on("click", function(){

    console.log(" roock is the user's pick.\n");
    userPlay = "Rock"

    //lets the machine pick a choice to play
    machineChoice();

    //let me know what choice the machine made
    console.log(myChoice + " is my pick.\n");

    //if both our choices math, it is a tie
    if (userPlay === myChoice) {
      $("#winner").text("Tie! No one wins.");
      console.log("Tie");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }


    //Winning connditions for the user
    if (myChoice === "Scissors") {
      $("#winner").text("Hooray! You win.");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }


    //winning conditions for the winner
    if (myChoice === "Paper") {
      $("#winner").text("Lol I win. Now I will take over your country.");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }

  });

});

//generates a random choice for the machine, limited to rock/paper/scissors
function machineChoice() {

  //this variable can store 6 different numbers
  var play = Math.floor(Math.random()*6);

//for each par out of the 6 different numbers, I assign a play choice to the variable myChoice.

  if (play === 0 || play === 4) {
    myChoice = "Rock";
  } else if (play === 1 || play === 3) {
    myChoice = "Paper";
  } else if (play === 2 || play === 5) {
    myChoice = "Scissors";
  }
}
