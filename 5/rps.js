window.onload = function(){
  alert('Hey Stranger! Welcome, Want to play rock, paper and scissor game?');
  alert('If yes then you need to tell me your good name. So, I will rembember whom I beated');
  const username = prompt('Enter your Name');
  document.getElementById('name').innerHTML = username;
  const possibleChoices = document.querySelectorAll('button');
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
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }
  function getResult() {
  if (computerChoice === userChoice) {
    yourScore.innerHTML = 1;
    computerScore.innerHTML = 1;
    message.innerHTML = 'its a draw!';
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    yourScore.innerHTML = 1;
    computerScore.innerHTML = 0;
    message.innerHTML = 'you win!';
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    computerScore.innerHTML = 1;
    yourScore.innerHTML = 0;
    message.innerHTML = 'you lost!';
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    message.innerHTML = 'you win!';
    computerScore.innerHTML = 0;
    yourScore.innerHTML = 1;
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    yourScore.innerHTML = 0;
    computerScore.innerHTML = 1;
    message.innerHTML = 'you lose!';
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    yourScore.innerHTML = 1;
    computerScore.innerHTML = 0;
    message.innerHTML = 'you win!';
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    computerScore.innerHTML = 1;
    yourScore.innerHTML = 0;
    message.innerHTML = 'you lose!';
  }
}
}
