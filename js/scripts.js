// business logic
// creating an empty player constructor
function Player(playerName, totalScore, overallScore) {
  // defining player constructor
  this.playerName = playerName;
  // this.diceRolled = 0;
  this.totalScore = 0;
  this.overallScore = 0;
}

Player.prototype.roll = function() {
  //
  var diceRolled = Math.floor((Math.random() * 6) + 1);
  if (diceRolled === 1) {
    this.totalScore = 0;
    alert("Oops! You scored 0 points")
  } else {
    this.totalScore += diceRolled;
  }
  console.log(diceRolled)
  return diceRolled;
}


Player.prototype.hold = function() {
  this.overallScore = this.totalScore;
  this.totalScore = 0;
  return this.overallScore;
}

function resetFields() {
  var player1 = $("input#player1").val("");
  var player2 = $("input#player2").val("");
}
// user interface
$(document).ready(function() {
  // input player names coming here
  $("form#players").submit(function(event) {
    event.preventDefault();
    // getting values(name) of players
    var player1 = $("input#player1").val();
    console.log(player1)

    var player2 = $("input#player2").val();
    console.log(player2)

    // create an object using the constructor function
    var newPlayer1 = new Player(player1);
    // access the name property using the person object
    console.log(newPlayer1)

    var newPlayer2 = new Player(player2);
    // access the name property using the person object
    console.log(newPlayer2)

    // output
    $(".players1Name").text(newPlayer1.playerName);
    $(".players2Name").text(newPlayer2.playerName);

    // play

    $("#btn-play1").click(function() {
      $(".player1-dice").text(newPlayer1.roll());
      // console.log(">>>" + newPlayer1.playerName + " " + newPlayer1.totalScore)
      $(".player1-total").text(newPlayer1.totalScore);
    });

    $("#btn-play2").click(function() {
      $(".player2-dice").text(newPlayer2.roll());
      // console.log(">>>" + newPlayer2.playerName + " " + newPlayer2.totalScore)
      $(".player2-total").text(newPlayer2.totalScore);
    });

    $("#btn-hold1").click(function() {
      // console.log(newPlayer1.hold())
      $(".player1-overall").text(newPlayer1.hold())
    });

    $("#btn-hold2").click(function() {
      // console.log(newPlayer2.hold())
      $(".player2-overall").text(newPlayer2.hold())
    });
    var player1 = $("input#player1").val("");
    var player2 = $("input#player2").val("");
  });
  resetFields()
});