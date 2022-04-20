
// Randomly return either rock, paper, or scissors
function randomPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * 3); 
  return choices[randomIndex];
}


// Simulate the cases for a single round of the game, and return the resulting winner/loser
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if(playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors';
  } else if(playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock';
  } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
     return 'You Win! Scissors beats Paper';
  } else if(playerSelection === computerSelection) {
    return 'You Tie!';
  } else {
    return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)}` + 
    ` beats ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}`;
  }
}



// Simulate a set amount of rounds of a match
function game() {

  let playerScore = 0;
  let computerScore = 0;

  // 5 rounds
  for(let i = 0; i < 5; i++) {

    // Generate random choices for both players
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    let computerSelection = randomPlay();

    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    // Tally score
    if(result.includes('Win')) {
      playerScore++;
    } else if(result.includes('Lose')) {
      computerScore++;
    } 
    
    // Display score
    console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`)

    
  }


  // Determine winner by seeing who was higher score
  if(playerScore > computerScore) {
    console.log(`Player Wins! Final Score was ${playerScore} to ${computerScore}`);
    
  } else if(playerScore === computerScore) {
    console.log('You Tied!');
    
  } else{
    console.log(`Computer Wins! Final Score was ${playerScore} to ${computerScore}`);
  }

  return;

}

// Start the game simulation
game();

