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
grids.forEach(grid => {
  grid.dataset.status = "nonactive";
  grid.dataset.game = 0;
});
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

  // Helpers \/\/\/\/\/\/\/\/\/\/\/\/\/

  const filterGrid = () => {
    return Array.from(grids).filter(grid => grid.dataset.status === "active");
  }

  const afterMove = (filteredGrid, filteredGridIndex) => {
    filteredGrid.innerText = "";
    filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
    filteredGrid.dataset.status = "nonactive";
    numberPicker(filteredGridIndex, filteredGrid.dataset.game);
    filteredGrid.dataset.game = 0;
  }

  // const gameMove = (filteredGrid, filteredGridIndex, positionCondition, moveNumber) => {
  //   let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
  //   const moveCheck = ((positionCondition) && (grids[filteredGridIndex + moveNumber].dataset.status !== "active"));
  //   while ( (positionCondition) && (grids[filteredGridIndex + moveNumber].dataset.status !== "active")) {
  //     filteredGridIndex += moveNumber;
  //   }
  //   if (moveCheck) afterMove(filteredGrid, filteredGridIndex);
  // }
  // Helpers \/\/\/\/\/\/\/\/\/\/\/\/\/

const arrowUp = () => {
  filterGrid().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const upCheck = ((filteredGridIndex > 3) && (grids[filteredGridIndex - 4].dataset.status === "nonactive"));
    while ( (filteredGridIndex > 3) && (grids[filteredGridIndex - 4].dataset.status === "nonactive")) {
      filteredGridIndex -= 4;
    }
    if (upCheck) afterMove(filteredGrid, filteredGridIndex);
  });
  gameLogic();
}
const arrowDown = () => {
  filterGrid().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const downCheck = ((filteredGridIndex < 12) && (grids[filteredGridIndex + 4].dataset.status === "nonactive"));
    while ( filteredGridIndex < 12 && (grids[filteredGridIndex + 4].dataset.status === "nonactive")) {
      filteredGridIndex += 4;
    }
    if (downCheck) afterMove(filteredGrid, filteredGridIndex);
  });
  gameLogic();
}
const arrowLeft = () => {
  filterGrid().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const leftCheck = ((filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12) && (grids[filteredGridIndex - 1].dataset.status === "nonactive"));;
    while ( (filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12) && (grids[filteredGridIndex - 1].dataset.status === "nonactive")) {
      filteredGridIndex -= 1;
    }
    if (leftCheck) afterMove(filteredGrid, filteredGridIndex);
  });
  gameLogic();
}
const arrowRight = () => {
  filterGrid().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const leftCheck = ((filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15) && (grids[filteredGridIndex + 1].dataset.status === "nonactive"));;
    while ( (filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15) && (grids[filteredGridIndex + 1].dataset.status === "nonactive")) {
      filteredGridIndex += 1;
    }
    if (leftCheck) afterMove(filteredGrid, filteredGridIndex);
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
