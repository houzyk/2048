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
const filterGrid = () => {
  return Array.from(grids).filter(grid => grid.dataset.status === "active");
} // Filters grid by active grids

const arrowUp = () => {
  filterGrid().forEach((filteredGrid) => {
    const filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    if ( filteredGridIndex > 3) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      filteredGrid.dataset.status = "nonactive";
      numberPicker(filteredGridIndex - 4, filteredGrid.dataset.game);
      filteredGrid.dataset.game = 0;
    }
  });
  gameLogic();
}
const arrowDown = () => { // TODO
  filterGrid().forEach((filteredGrid) => {

  });
  gameLogic();
}
const arrowLeft = () => { // TODO
  filterGrid().forEach((grfilteredGridid) => {

  });
  gameLogic();
}
const arrowRight = () => { // TODO
  filterGrid().forEach((filteredGrid) => {

  });
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
