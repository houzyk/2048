const grids = document.querySelectorAll('.grid');

// * Game Init

let turn = 1;

// ! Number Picker
const numberPicker = (grid, index, number) => {
  grid[index].dataset.game = number;
  grid[index].dataset.status = "active";
  grid[index].classList.add(`index-${number}`);
  grid[index].innerText = number;
}

// ! Tile Generator
const tileGenerate = () => {
  if (turn === 1) {
    let randomArray = [Math.round(Math.random() * 15), Math.round(Math.random() * 15)]
    while (randomArray[0] === randomArray[1]) {
      randomArray = [Math.round(Math.random() * 15), Math.round(Math.random() * 15)]
    }
    randomArray.forEach(random => numberPicker(grids, random, 2));
  } else {
    const nonactiveGrids = Array.from(grids).filter(grid => grid.dataset.status === "nonactive");
    if (nonactiveGrids.length === 1) {
      numberPicker(nonactiveGrids, 0, 2)
    } else if (nonactiveGrids.length === 2) {
      console.log(nonactiveGrids)
      numberPicker(nonactiveGrids, 0, 2)
      numberPicker(nonactiveGrids, 1, 2)
    } else {
      let randomArray = [Math.round(Math.random() * (nonactiveGrids.length - 1)), Math.round(Math.random() * (nonactiveGrids.length - 1))]
      while (randomArray[0] === randomArray[1]) {
      randomArray = [Math.round(Math.random() * (nonactiveGrids.length - 1)), Math.round(Math.random() * (nonactiveGrids.length - 1))]
    }
      randomArray.forEach(random => numberPicker(nonactiveGrids, random, 2));
    }
  }
}

// ! Board Config
grids.forEach(grid => {
    grid.dataset.status = "nonactive";
    grid.dataset.game = 0;
  });
tileGenerate();


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

}

// ! Player Input Check

  // Helpers \/\/\/\/\/\/\/\/\/\/\/\/\/
  const filterActiveGrid = () => {
    return Array.from(grids).filter(grid => grid.dataset.status === "active");
  }

  const afterMove = (filteredGrid, filteredGridIndex) => {
    filteredGrid.innerText = "";
    filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
    numberPicker(grids, filteredGridIndex, filteredGrid.dataset.game);
    filteredGrid.dataset.game = 0;
    filteredGrid.dataset.status = "nonactive";
  }
  // Helpers \/\/\/\/\/\/\/\/\/\/\/\/\/

// TODO REFACTOR
const arrowUp = () => {
  let moveAllow = false;
  filterActiveGrid().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const upCheck = ((filteredGridIndex > 3) && (grids[filteredGridIndex - 4].dataset.status === "nonactive"));
    while ( (filteredGridIndex > 3) && (grids[filteredGridIndex - 4].dataset.status === "nonactive")) {
      filteredGridIndex -= 4;
    }
    if (upCheck) {
      afterMove(filteredGrid, filteredGridIndex);
      moveAllow = true;
      turn += 1;
    }
  });
  if (moveAllow) {
    gameLogic();
    tileGenerate();
  }
  gameStatus();
}

const arrowDown = () => {
  let moveAllow = false;
  filterActiveGrid().reverse().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const downCheck = ((filteredGridIndex < 12) && (grids[filteredGridIndex + 4].dataset.status === "nonactive"));
    while ( filteredGridIndex < 12 && (grids[filteredGridIndex + 4].dataset.status === "nonactive")) {
      filteredGridIndex += 4;
    }
    if (downCheck){
      afterMove(filteredGrid, filteredGridIndex);
      moveAllow = true;
      turn += 1;
    }
  });
  if (moveAllow) {
    gameLogic();
    tileGenerate();
  }
  gameStatus();
}

const arrowLeft = () => {
  let moveAllow = false;
  filterActiveGrid().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const leftCheck = ((filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12) && (grids[filteredGridIndex - 1].dataset.status === "nonactive"));;
    while ( (filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12) && (grids[filteredGridIndex - 1].dataset.status === "nonactive")) {
      filteredGridIndex -= 1;
    }
    if (leftCheck) {
      afterMove(filteredGrid, filteredGridIndex);
      moveAllow = true;
      turn += 1;
    }
  });
  if (moveAllow) {
    gameLogic();
    tileGenerate();
  }
  gameStatus();
}

const arrowRight = () => {
  let moveAllow = false;
  filterActiveGrid().reverse().forEach((filteredGrid) => {
    let filteredGridIndex = Array.from(grids).findIndex(grid => grid === filteredGrid);
    const leftCheck = ((filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15) && (grids[filteredGridIndex + 1].dataset.status === "nonactive"));;
    while ( (filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15) && (grids[filteredGridIndex + 1].dataset.status === "nonactive")) {
      filteredGridIndex += 1;
    }
    if (leftCheck) {
      afterMove(filteredGrid, filteredGridIndex);
      moveAllow = true;
      turn += 1;
    }
  });
  if (moveAllow) {
    gameLogic();
    tileGenerate();
  }
  gameStatus();
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
