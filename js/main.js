// Caching buttons and places to display info for later
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector('#round-result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const playAgain = document.querySelector('#play-again');
const gameWinner = document.querySelector('#game-winner');

let playerIsWinner = false;
let isTie = false;

playAgain.addEventListener('click', reset);


// Simulate match
function game() {

  rockButton.addEventListener('click', handleRound);
  paperButton.addEventListener('click', handleRound);
  scissorsButton.addEventListener('click', handleRound);

  return;
}

// Start the game simulation
game();


function handleRound(e) {
  playerIsWinner = playRound(e.target.attributes[0].value, randomPlay());
  checkRound(playerIsWinner, isTie);
  checkIfPlayerWon();
}



// Randomly return either rock, paper, or scissors for computer
function randomPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * 3); 
  return choices[randomIndex];
}


// Simulate the cases for a single round of the game, and return the resulting winner/loser 
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  let playerWins = false;
  isTie = false;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection === 'rock' && computerSelection === 'scissors') {
    result.innerText = 'You Win! Rock beats Scissors';
    playerWins = true;
    return playerWins;
  } else if(playerSelection === 'paper' && computerSelection === 'rock') {
    result.innerText = 'You Win! Paper beats Rock';
    playerWins = true;
    return playerWins;
  } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
    result.innerText = 'You Win! Scissors beats Paper';
    playerWins = true;
    return playerWins; 
  } else if(playerSelection === computerSelection) {
    result.innerText = 'You Tie!';
    isTie = true;
  } else {
    result.innerText = `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)}` + 
    ` beats ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}`;
    return playerWins;
  }
}

// Check which player to increment the score for
function checkRound(playerIsWinner, isTie) {
  if(playerIsWinner) {
    incrementPlayerScore();
  } else if(!playerIsWinner && !isTie) {
    incrementComputerScore();
  } 
}

// If we have hit a total of 5 round wins, we win the match. If the
// computer hits it first, we lose
function checkIfPlayerWon() {
  if(playerScore.innerText === '5') {
    endGame(true);
  } else if(computerScore.innerText === '5') {
    endGame( false );
  } else {
    return;
  }
  
}

// Allow player to play again, and display whether we won or lost
function endGame(playerWon) {
  if(playerWon) {
    disableButtons();
    gameWinner.innerText = 'You Win!'
    playAgain.classList.remove('hidden');
  } else {
    disableButtons();
    gameWinner.innerText = 'You Lose!';
    playAgain.classList.remove('hidden');
  }
}

function incrementPlayerScore() {
  let currentScore = Number(playerScore.innerText);
  playerScore.innerText = `${++currentScore}`;
}

function incrementComputerScore() {
  let currentScore = Number(computerScore.innerText);
  computerScore.innerText = `${++currentScore}`;
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

// Hide play again button and restart
function reset() {
  playerScore.innerText = '0';
  computerScore.innerText = '0';
  result.innerText = '';
  gameWinner.innerText = '';
  rockButton.removeEventListener('click', handleRound);
  paperButton.removeEventListener('click', handleRound);
  scissorsButton.removeEventListener('click', handleRound);
  enableButtons();
  playAgain.classList.add('hidden');
  game();
}



