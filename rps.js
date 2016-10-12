//The variable that stores the computers choice to be played
var myChoice;

//load the page when the document is ready
$(document).ready(function(){

  //Let the console user know the game has started
  console.log("The game starts");

  //when the user clicks the play button, the following happens.
  $("#playButton").on("click", function(){

    var userPlay = $("#userChoice").val();
    console.log(userPlay + " is the user's pick.\n");

    //lets the console user know the play button has been clicked.
    console.log("The play button has been clicked");

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
    if (userPlay === "Rock" && myChoice === "Scissors") {
      $("#winner").text("Hooray! You win.");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }

    if (userPlay === "Paper" && myChoice === "Rock") {
      $("#winner").text("Hooray! You win.");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }

    if (userPlay === "Scissors" && myChoice === "Paper") {
      $("#winner").text("Hooray! You win.");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }


    //winning conditions for the winner
    if (userPlay === "Scissors" && myChoice === "Rock") {
      $("#winner").text("Lol I win. Now I will take over your country.");
      $("#playerResults").text("You played : " + userPlay+ " || The machine played : " + myChoice + " .");
    }

    if (userPlay === "Rock" && myChoice === "Paper") {
      $("#winner").text("Lol I win. Now I will take over your country.");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }

    if (userPlay === "Paper" && myChoice === "Scissors") {
      $("#winner").text("Lol I win. Now I will take over your country.");
      $("#playerResults").text("You played : " + userPlay + " || The machine played : " + myChoice + " .");
    }


    //Clears the prvious choice out of the input text box
    $("#userChoice").val("");
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
