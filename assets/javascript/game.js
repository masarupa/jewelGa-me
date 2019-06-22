console.log ("testings")

var score = 0;
var wins = 0;
var losses = 0;
var randomNumber = getNumber();

function getNumber() {
  
  var minNumber = 1; // The minimum number you want
  var maxNumber = 19; // The maximum number you want
  var randomnumber = Math.floor(Math.random() * (maxNumber + 19) + minNumber); // Generates random number
  $('#target-score').text(randomnumber); // Sets content of <div> to number
  return randomnumber;
  console.log(randomnumber)
 
  //return randomnumber;

  //console.log(didUserWin)
  $('#Your-Score').text(score);
  //return randomnumber;

  //console.log(didUserWin)
  $('#Wins').empty();
  //return randomnumber;

  //console.log(didUserLosse)
  $('#Losse').empty();
  //return randomnumber;

}



$("button").on( "click", function (event) {
  console.log(event.target.value); 
  var number = parseInt(event.target.value);
  score += number;
  if (score === randomNumber) {
    console.log("WIN");
    wins++;
    console.log(wins);
    $('#wins').text(wins);
    score = 0;
  } else if (score > randomNumber) {
    console.log("GAME OVER");
    losses++;
    $('#losses').text(losses);
    score = 0;
    randomNumber = getNumber();

  }
  console.log("score", score);
  $('#your-score').text(score);
});




  
