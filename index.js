const grids = document.querySelectorAll('.grid');

// * Game Init

// ! Number Picker
const numberPicker = (index, number) => {
  grids[index].dataset.game = number;
  grids[index].classList.add(`index-${number}`);
  grids[index].innerText = number;
}

// ! Board Config
let randomArray = [Math.round(Math.random() * 15), Math.round(Math.random() * 15)]
while (randomArray[0] === randomArray[1]) {
  randomArray = [Math.round(Math.random() * 15), Math.round(Math.random() * 15)]
}
randomArray.forEach(random => numberPicker(random, 2));


// * Game Play

// ! Game Status
const gameStatus = () => { // TODO
  const winCondition;
  const loseCondition;
  if (winCondition) {
    alert("You Win");
    window.location.reload();
  }
  if (loseCondition) {
    alert("You Lose");
    window.location.reload();
  }
}

// ! Game Logic
const gameLogic = () => { // TODO
  gameStatus();
}

// ! Player Input Check
const arrowUp = () => { // TODO
  gameLogic();
}
const arrowDown = () => { // TODO
  gameLogic();
}
const arrowLeft = () => { // TODO
  gameLogic();
}
const arrowRight = () => { // TODO
  gameLogic();
}

// ! Player Input Control
const game = (key) => {
  if (key === "ArrowUp") arrowUp();
  if (key === "ArrowDown") arrowDown();
  if (key === "ArrowLeft") arrowLeft();
  if (key === "ArrowRight") arrowRight();
}

// ! Player Listener
window.addEventListener('keyup', event => game(event.key));
