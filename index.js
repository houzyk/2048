const grids = document.querySelectorAll('.grid');

// * Game Init

// ! Number Picker
const numberPicker = (index, number) => {
  grids[index].dataset.game = number;
  grids[index].dataset.status = "active";
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
const gameStatus = () => {
  const winCondition = [Array.from(grids).some(grid => grid.dataset.game === "2048"), "Nice! You Win."];
  const loseCondition = [Array.from(grids).every(grid => grid.dataset.status === "active"), "Sorry, Try Again..."];
  const gameEnd = (message) => {
    setTimeout(() => {
      alert(`${message}`);
      window.location.reload();
    }, 500);
  }
  if (winCondition[0]) gameEnd(winCondition[1]);
  if (loseCondition[0]) gameEnd(loseCondition[1]);
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
