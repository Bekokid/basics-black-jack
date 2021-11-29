/*======= REQUIREMENTS ========
1) There are 2 players and players take turns.
2) When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
3) The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
4) After both players have rolled and chosen dice order, the player with the higher combined number wins.
*/

/*===== Problem breakdown and planning =======
1) First we will build a simple version that rolls 2 dice and returns the output for one player
2) Then we will implement choosing dice order, for one player, and return the output
3) Then we will try to re-factor the code to work for 2 players, and allow both players to choose the order and return the output
4) Then we will try to implement comparing and deciding on the winner


Tentative structure (open to changing during implementation):
GLOBAL VARIABLES:
1) Players dice roll
2) Game State

HELPER FUNCTIONS:
1) rollDice
2) playTurn(playerNumber) where playerNumber is either 1 or 2
2) Checking for winner
*/


// initiliase an array to store dice rolls, we will use this for both player one and player two's dice rolls. player one's rolls will be index 0 and 1, player two's rolls will be indexed 2 and 3.
var playerRolls = []
// variable to track game state, initialised to ROLL, will change to CHOOSE
var gameState = 'ROLL';
// variable to track player's turn, initialised to 1 for player 1 to start
var turnCounter = 1;

// Simulates a dice roll and returns a number between 1 to 6
var rollDice = function() {
  console.log("Control Flow Checking: Currently in rollDice function")
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal) + 1;
  console.log(`rollDice returning ${randomInteger}`);
  return randomInteger;
}

var playerTurn = function() {
  console.log("Control Flow Checking: Currently in playerTurn function")
  // roll two dice and store in an array
  playerRolls.push(rollDice());
  playerRolls.push(rollDice());
  console.log(`playerRolls array is ${playerRolls} at the end of playerTurn()`);
  outputValue = `Welcome Player ${turnCounter}. You rolled ${playerRolls[turnCounter-1]} and ${playerRolls[turnCounter]}. Please input '1' or '2' to choose which die to be the first number.`;
  return outputValue;
}

var main = function(input) {
  // initialise output to an empty string
  var outputValue = '';
  
  if (gameState == 'ROLL') {
    console.log("Control flow checking: we are in roll mode.")
    // if the second player just rolled, reset the array and counter 
    if (turnCounter == 3) { 
      // reset playerRolls array to be empty
      playerRolls = [];
      turnCounter = 1;
    }
    // get result of rolled dices
    outputValue = playerTurn();
    gameState = 'CHOOSE';
    return outputValue;
  }
  if (gameState == 'CHOOSE') {
    console.log("Control flow checking: we are in choose mode.")
    // if user choose 1, we will print out the rolls in the current order
    // if user chooses 2, we will swap the dice rolls and print that out instead
    if (input == 2) {
      console.log("Control flow checking: user input 2");
      playerRolls.push(playerRolls.shift())
      console.log(`playerRolls is now ${playerRolls}`);
    }
    outputValue = `Player ${turnCounter} chose ${input}. Your number is ${playerRolls[0]}${playerRolls[1]}`;
    turnCounter += 1;
    // reset gameState to roll
    gameState = 'ROLL';
  }
  console.log(`playerRolls array is ${playerRolls} at the end of main()`);
  return outputValue;
}