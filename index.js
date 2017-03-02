//The variable that stores the computers choice to be played
var myChoice;

//The variable to store the user's choice
var userPlay = "";

//load the page when the document is ready
$(document).ready(function(){

  letsPLay();

});

//The function that starts the games
function letsPLay() {

    //Let the console user know the game has started
    console.log("The game starts");

    //when the user clicks on the rock image,
    $("#rock").on("click", function(){

      console.log("rock is the user's pick.\n");
      userPlay = "Rock";

      //lets the machine pick a choice to play
      machineChoice();

      //let me know what choice the machine made
      console.log(myChoice + " is my pick.\n");

      //if both our choices math, it is a tie
      if (userPlay === myChoice) {
        $("#center").replaceWith('<h1 id="result">Tie! No one wins.</h1>');
        console.log("Tie");
        $("#left").replaceWith('<img src="rock.jpeg" />');
        $("#right").replaceWith('<img src="rock.jpeg" />');
      }


      //Winning connditions for the user
      if (myChoice === "Scissors") {
        $("#center").replaceWith('<h1 id="result">Hooray! You win.</h1>');
        console.log("User wins boooo");
        $("#left").replaceWith('<img src="rock.jpeg" />');
        $("#right").replaceWith('<img src="scissors.png" />');
      }


      //winning conditions for the winner
      if (myChoice === "Paper") {
        $("#center").replaceWith('<h1 id="result">HAHAHA I win!</h1>');
        console.log("Yesssss I win");
        $("#left").replaceWith('<img src="rock.jpeg" />');
        $("#right").replaceWith('<img src="paper.jpeg" />');
      }

      myChoice = " ";
      $("#newGame").append('<input type="button" class="btn btn-info" id="playAgain" value="Play Again" />')

    });

    //when the user clicks on paper,
    $("#paper").on("click", function(){

      console.log("Paper is the user's pick.\n");
      userPlay = "Paper"

      //lets the machine pick a choice to play
      machineChoice();

      //let me know what choice the machine made
      console.log(myChoice + " is my pick.\n");

      //if both our choices math, it is a tie
      if (userPlay === myChoice) {
        $("#center").replaceWith('<h1 id="result">Tie! No one wins.</h1>');
        console.log("Tie");
        $("#left").replaceWith('<img src="paper.jpeg" />');
        $("#right").replaceWith('<img src="paper.jpeg" />');
      }


      //Winning connditions for the user
      if (myChoice === "Rock") {
        $("#center").replaceWith('<h1 id="result">Hooray! You win.</h1>');
        console.log("User wins boooo");
        $("#left").replaceWith('<img src="paper.jpeg" />');
        $("#right").replaceWith('<img src="rock.jpeg" />');
      }


      //winning conditions for the winner
      if (myChoice === "Scissors") {
        $("#center").replaceWith('<h1 id="result">HAHAHA I win!</h1>');
        console.log("Yesssss I win");
        $("#left").replaceWith('<img src="paper.jpeg" />');
        $("#right").replaceWith('<img src="scissors.png" />');
      }

      myChoice = " ";
      $("#newGame").append('<button class="btn btn-info" id="playAgain" value="Play Again"></button>')

    });

    //when the user clicks on scissors,
    $("#scissors").on("click", function(){

      console.log("Scissors is the user's pick.\n");
      userPlay = "Scissors"

      //lets the machine pick a choice to play
      machineChoice();

      //let me know what choice the machine made
      console.log(myChoice + " is my pick.\n");

      //if both our choices math, it is a tie
      if (userPlay === myChoice) {
        $("#center").replaceWith('<h1 id="result">Tie! No one wins.</h1>');
        console.log("Tie");
        $("#left").replaceWith('<img src="scissors.png" />');
        $("#right").replaceWith('<img src="scissors.png" />');
      }


      //Winning connditions for the user
      if (myChoice === "Paper") {
        $("#center").replaceWith('<h1 id="result">Hooray! You win.</h1>');
        console.log("User wins boooo");
        $("#left").replaceWith('<img src="scissors.png" />');
        $("#right").replaceWith('<img src="paper.jpeg" />');
      }


      //winning conditions for the winner
      if (myChoice === "Rock") {
        $("#center").replaceWith('<h1 id="result">HAHAHA I win!</h1>');
        console.log("Yesssss I win");
        $("#left").replaceWith('<img src="scissors.png" />');
        $("#right").replaceWith('<img src="rock.jpeg" />');
      }

      myChoice = " ";
      $("#newGame").append('<button class="btn btn-info" id="playAgain" value="Play Again"></button>')
    });
}

//generates a random choice for the machine, limited to rock/paper/scissors
function machineChoice() {

  //this variable can store 6 different numbers
  var play = Math.floor(Math.random()*3);

//for each par out of the 6 different numbers, I assign a play choice to the variable myChoice.

  if (play === 0) {
    myChoice = "Rock";
  } else if (play === 1) {
    myChoice = "Paper";
  } else if (play === 2) {
    myChoice = "Scissors";
  }
}
