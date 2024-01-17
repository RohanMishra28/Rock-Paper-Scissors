let userScore = 0;
let compScore = 0;

const user = document.querySelector("#number1");
const com = document.querySelector("#number2");
const turn = document.querySelector("#message");
const choices = document.querySelectorAll(".box");

//Asks to play a move
turn.innerText = "Play a Move";
//Randomly generates the computer choice
const comChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const draw = () => {
  turn.innerText = "It's a Draw";
  turn.style.backgroundColor = " rgb(233, 233, 233)";
};

//It will show the Winner and update Scores
const showWinner = (userwin, userChoice, compChoice) => {
  if (userwin) {
    userScore++;
    user.innerText = userScore;
    turn.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
    turn.style.backgroundColor = "#71F547";
  } else {
    compScore++;
    com.innerText = compScore;
    turn.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
    turn.style.backgroundColor = "#F53737";
  }
};

//The game is played
const playGame = (userChoice) => {
  const compChoice = comChoice();
  if (userChoice === compChoice) {
    draw();
  } else {
    let userwin = true;
    if (userChoice === "Rock") {
      userwin = compChoice === "Scissors" ? true : false;
    } else if (userChoice === "Paper") {
      userwin = compChoice === "Rock" ? true : false;
    } else {
      userwin = compChoice === "Paper" ? true : false;
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
