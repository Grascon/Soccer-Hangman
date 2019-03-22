var words = ["Messi", "Ronaldo", "Neymar", "Mbappe", "Griezmann"];
var images = [
  "https://www.footyrenders.com/render/Lionel-Messi-Argentine-Copa-America-2016.png",
  "http://www.sclance.com/pngs/cristiano-ronaldo-png/cristiano_ronaldo_png_343218.png",
  "https://clipart.info/images/ccovers/1532055357Neymar-Football-Brazil-2018-Png.png",
  "https://clipart.info/images/ccovers/1532054845Kylian-Mbappe-France-FFF-2018-World-Cup-Png.png",
  "https://i.pinimg.com/originals/ed/bb/43/edbb43ef95991961c9eade8d1043e726.png"
];

//https://www.cssmatic.com/box-shadow

var wins = 0;
var losses = 0;
var underScoreArray = [];
var userGuessArray=[];
var userGuess;
var underscoreDisplay = $("#underscore-display");
var userGuessesDisplay = $("#user-guesses-display");
var guessesLeftDisplay = $("#guesses-left-display");
var winsDisplay = $("#wins-display");
var lossesDisplay = $("#losses-display");

//setting up wins/losses displays
winsDisplay.text(wins);
lossesDisplay.text(losses);

//hiding empty image and display
$("img").hide();
$("h3").hide( );

//setting guess display
var guesses = 10;
guessesLeftDisplay.text(guesses);


//creating random word
var selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(selectedWord);

//updating underscores that matches the number of letters from the random word
function updateUnderscores(){
  for (var i = 0; i < selectedWord.length; i++){
    underScoreArray.push(" _");
    //console.log(underScoreArray);
  }
  return underScoreArray;
}

underscoreDisplay.text(updateUnderscores);


//capturing users guess and determining outcome
$(document).keyup(function(event){
  userGuess = event.key;
  keyValidater();
  game();
});

//validating user input
function keyValidater(){
  
  var alphaExp = /^[a-zA-Z]+$/;

  if (userGuess.match(alphaExp) && userGuess.length === 1){
    userGuessArray.push(userGuess);
    userGuessesDisplay.text(userGuessArray);
  }
  else{
    alert("Please enter only letters. Thank you");
  }
}

//determines if guess is part of word selected and determines if user wins or losses
function game(){
  for (var i = 0; i < selectedWord.length; i++){
    if (userGuess.toLowerCase() === selectedWord[i]){
      underScoreArray[i] = userGuess;
      underscoreDisplay.text(underScoreArray);
    }
  }
  guesses--;
  guessesLeftDisplay.text(guesses);
  if (underScoreArray.join("") === selectedWord){
    winGame();
  };
  if (guesses === 0){
    loseGame();
  }
}

//when user wins
function winGame(){
  wins++;
  winsDisplay.text(wins);
  //alert("Won");
  displayPicture();
  reset();
};

//when user loses
function loseGame(){
  losses++;
  lossesDisplay.text(losses);
  //alert("Lost");
  $("h4").removeClass();
  $("h4").addClass("alert");
  $("h4").text("Please try again");
  setInterval(function(){
    $("h4").removeClass();
    $("h4").addClass("background");
    $("h4").text("Press Any Key To Get Started!");
  }, 5000);
  reset();
};

//resetting game
function reset(){
  underScoreArray = [];
  userGuessArray=[];
  guesses = 10;
  guessesLeftDisplay.text(guesses);
  selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
  console.log(selectedWord);
  userGuessesDisplay.text(userGuessArray);
  underscoreDisplay.text(updateUnderscores);
};

//if user wins, notification and picture of gueesed word will appear
function displayPicture(){
  if (underScoreArray.join("") === selectedWord && underScoreArray.join("") === "messi"){
    $("h4").hide();
    $("img").attr("src", images[0]);
    $("img").fadeIn("slow");
    $("#correct-word-display").text("Correct! You Guessed: " + selectedWord);
    $("h3").css("background-color", "#28B463");
    $("h3").fadeIn("slow");
  }
  if (underScoreArray.join("") === selectedWord && underScoreArray.join("") === "ronaldo"){
    $("h4").hide();
    $("img").attr("src", images[1]);
    $("img").fadeIn("slow");
    $("#correct-word-display").text("Correct! You Guessed: " + selectedWord);
    $("h3").css("background-color", "#28B463");
    $("h3").fadeIn("slow");
  }
  if (underScoreArray.join("") === selectedWord && underScoreArray.join("") === "neymar"){
    $("h4").hide();
    $("img").attr("src", images[2]);
    $("img").fadeIn("slow");
    $("#correct-word-display").text("Correct! You Guessed: " + selectedWord);
    $("h3").css("background-color", "#28B463");
    $("h3").fadeIn("slow");
  }
  if (underScoreArray.join("") === selectedWord && underScoreArray.join("") === "mbappe"){
    $("h4").hide();
    $("img").attr("src", images[3]);
    $("img").fadeIn("slow");
    $("#correct-word-display").text("Correct! You Guessed: " + selectedWord);
    $("h3").css("background-color", "#28B463");
    $("h3").fadeIn("slow");
  }
  if (underScoreArray.join("") === selectedWord && underScoreArray.join("") === "griezmann"){
    $("h4").hide();
    $("img").attr("src", images[4]);
    $("img").fadeIn("slow");
    $("#correct-word-display").text("Correct! You Guessed: " + selectedWord);
    $("h3").css("background-color", "#28B463");
    $("h3").fadeIn("slow");
  }
  setInterval(function(){
    $("img").hide("slow");
    $("h3").hide( "slow" );
    $("h4").fadeIn("slow");
  }, 5000);
}