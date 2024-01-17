let userScore = 0;
let compScore = 0;
//Asks to play a move
let turn = document.querySelector("#message");
turn.innerText = "Play a Move";
const choices = document.querySelectorAll(".box");
//Randomly generates the computer choice
const comChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
}; //It will show the Winner and update Scores
const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    const user = document.querySelector("#number1");
    user.innerText = userScore;
    turn.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
    turn.style.backgroundColor = "#71F547";
  } else {
    compScore++;
    const com = document.querySelector("#number2");
    com.innerText = compScore;
    turn.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
    turn.style.backgroundColor = "#F53737";
  }
};
const compChoice = comChoice();
//The game is played
const playGame = (userChoice) => {
  if (userChoice === comChoice()) {
    turn.innerText = "It's a Draw";
    turn.style.backgroundColor = " rgb(233, 233, 233)";
  } else {
    let userwin = true;
    if (userChoice === "Rock") {
      userwin = comChoice() === "Scissors" ? true : false;
    } else if (userChoice === "Paper") {
      userwin = comChoice() === "Rock" ? true : false;
    } else {
      userwin = comChoice() === "Paper" ? true : false;
    }
    showWinner(userwin, userChoice, compChoice);
  }
};
//Takes the user's choice
choices.forEach((box) => {
  box.addEventListener("click", () => {
    const userChoice = box.getAttribute("id");
    playGame(userChoice);
  });
});
