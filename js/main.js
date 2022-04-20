
// Randomly return either rock, paper, or scissors
function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * 3); 
  return choices[randomIndex];
}


