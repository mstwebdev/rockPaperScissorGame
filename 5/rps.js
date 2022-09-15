window.onload = function(){
  alert('Hey Stranger! Welcome, Want to play rock, paper and scissor game?');
  alert('If yes then you need to tell me your good name. So, I will rembember whom I beated');
  const username = prompt('Enter your Name');
  document.getElementById('name').innerHTML = username;
  const possibleChoices = document.querySelectorAll('#gameButton');
  const yourScore = document.getElementById('yourScore');
  const computerScore = document.getElementById('computerScore');
  const message = document.getElementById('message');
  let userChoice;
  let computerChoice;
  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.value;
    document.getElementById('userChoiceDisplay').innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  }));
  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
      computerChoice = 'rock';
    }
    if (randomNumber === 2) {
      computerChoice = 'scissor';
    }
    if (randomNumber === 3) {
      computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }
  function getResult() {
  if (computerChoice === userChoice) {
    yourScore.innerHTML++;
    computerScore.innerHTML++;
    message.innerHTML = 'its a draw!';
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    yourScore.innerHTML++;
    message.innerHTML = 'you win!';
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    computerScore.innerHTML++;
    message.innerHTML = 'you lost!';
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    message.innerHTML = 'you win!';
    yourScore.innerHTML++;
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    computerScore.innerHTML++;
    message.innerHTML = 'you lose!';
  }
  if (computerChoice === 'scissor' && userChoice === "rock") {
    yourScore.innerHTML++;
    message.innerHTML = 'you win!';
  }
  if (computerChoice === 'scissor' && userChoice === "paper") {
    computerScore.innerHTML++;
    message.innerHTML = 'you lose!';
  }
}
}
