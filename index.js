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
    randomArray.forEach(random => {
      numberPicker(grids, random, 2);
      grids[random].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[random].style.transform = "";
      }, 100);
    });
  } else {
    const nonactiveGrids = Array.from(grids).filter(grid => grid.dataset.status === "nonactive");
    if (nonactiveGrids.length === 1) {
      numberPicker(nonactiveGrids, 0, 2)
      nonactiveGrids[0].style.transform = "scale(1.05)";
      setTimeout(() => {
        nonactiveGrids[0].style.transform = "";
      }, 100);
    } else if (nonactiveGrids.length === 2) {
      numberPicker(nonactiveGrids, 0, 2)
      nonactiveGrids[0].style.transform = "scale(1.05)";
      setTimeout(() => {
        nonactiveGrids[0].style.transform = "";
      }, 100);
      numberPicker(nonactiveGrids, 1, 2)
      nonactiveGrids[1].style.transform = "scale(1.05)";
      setTimeout(() => {
        nonactiveGrids[1].style.transform = "";
      }, 100);
    } else {
      let randomArray = [Math.round(Math.random() * (nonactiveGrids.length - 1)), Math.round(Math.random() * (nonactiveGrids.length - 1))]
      while (randomArray[0] === randomArray[1]) {
      randomArray = [Math.round(Math.random() * (nonactiveGrids.length - 1)), Math.round(Math.random() * (nonactiveGrids.length - 1))]
    }
      randomArray.forEach(random => {
        numberPicker(nonactiveGrids, random, 2);
        nonactiveGrids[random].style.transform = "scale(1.05)";
        setTimeout(() => {
          nonactiveGrids[random].style.transform = "";
        }, 100);
      });
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
    if ((filteredGridIndex > 3) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex - 4].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 4].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 4].dataset.status = "active";
      grids[filteredGridIndex - 4].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 4].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex - 4].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 4].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex - 4].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex > 7) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex - 8].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 8].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 8].dataset.status = "active";
      grids[filteredGridIndex - 8].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 8].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex - 8].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 8].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex - 8].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex > 11) && (grids[filteredGridIndex].dataset.game) === grids[filteredGridIndex - 12].dataset.game) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 12].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 12].dataset.status = "active";
      grids[filteredGridIndex - 12].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 12].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex - 12].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 12].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex - 12].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex > 3) && (grids[filteredGridIndex - 4].dataset.status === "nonactive")) {
      while ( (filteredGridIndex > 3) && (grids[filteredGridIndex - 4].dataset.status === "nonactive")) {
        filteredGridIndex -= 4;
      }
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
    if ((filteredGridIndex < 12) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex + 4].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 4].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 4].dataset.status = "active";
      grids[filteredGridIndex + 4].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 4].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex + 4].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 4].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex + 4].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex < 8) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex + 8].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 8].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 8].dataset.status = "active";
      grids[filteredGridIndex + 8].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 8].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex + 8].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 8].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex + 8].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex < 4) && (grids[filteredGridIndex].dataset.game) === grids[filteredGridIndex + 12].dataset.game) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 12].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 12].dataset.status = "active";
      grids[filteredGridIndex + 12].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 12].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex + 12].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 12].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex + 12].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if (((filteredGridIndex < 12) && (grids[filteredGridIndex + 4].dataset.status === "nonactive"))) {
      while ( filteredGridIndex < 12 && (grids[filteredGridIndex + 4].dataset.status === "nonactive")) {
        filteredGridIndex += 4;
      }
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
    if ((filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex - 1].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 1].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 1].dataset.status = "active";
      grids[filteredGridIndex - 1].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 1].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex - 1].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 1].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex - 1].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12 && filteredGridIndex !== 1 && filteredGridIndex !== 5 && filteredGridIndex !== 9 && filteredGridIndex !== 13) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex - 2].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 2].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 2].dataset.status = "active";
      grids[filteredGridIndex - 2].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 2].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex - 2].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 2].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex - 2].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12 && filteredGridIndex !== 1 && filteredGridIndex !== 5 && filteredGridIndex !== 9 && filteredGridIndex !== 13 && filteredGridIndex !== 2 && filteredGridIndex !== 6 && filteredGridIndex !== 10 && filteredGridIndex !== 14) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex - 3].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 3].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 3].dataset.status = "active";
      grids[filteredGridIndex - 3].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex - 3].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex - 3].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex - 3].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex - 3].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12) && (grids[filteredGridIndex - 1].dataset.status === "nonactive")) {
      while ( (filteredGridIndex !== 0 && filteredGridIndex !== 4 && filteredGridIndex !== 8 && filteredGridIndex !== 12) && (grids[filteredGridIndex - 1].dataset.status === "nonactive")) {
        filteredGridIndex -= 1;
      }
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
    if ((filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex + 1].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 1].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 1].dataset.status = "active";
      grids[filteredGridIndex + 1].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 1].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex + 1].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 1].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex + 1].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15 && filteredGridIndex !== 2 && filteredGridIndex !== 6 && filteredGridIndex !== 10 && filteredGridIndex !== 14) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex + 2].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 2].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 2].dataset.status = "active";
      grids[filteredGridIndex + 2].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 2].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex + 2].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 2].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex + 2].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15 && filteredGridIndex !== 2 && filteredGridIndex !== 6 && filteredGridIndex !== 10 && filteredGridIndex !== 14 && filteredGridIndex !== 1 && filteredGridIndex !== 5 && filteredGridIndex !== 9 && filteredGridIndex !== 13) && (grids[filteredGridIndex].dataset.game === grids[filteredGridIndex + 3].dataset.game)) {
      filteredGrid.innerText = "";
      filteredGrid.classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 3].dataset.game = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 3].dataset.status = "active";
      grids[filteredGridIndex + 3].classList.remove(`index-${filteredGrid.dataset.game}`);
      grids[filteredGridIndex + 3].classList.add(`index-${parseInt(filteredGrid.dataset.game, 10) * 2}`);
      grids[filteredGridIndex + 3].innerText = parseInt(filteredGrid.dataset.game, 10) * 2;
      grids[filteredGridIndex + 3].style.transform = "scale(1.05)";
      setTimeout(() => {
        grids[filteredGridIndex + 3].style.transform = "";
      }, 100);
      filteredGrid.dataset.game = 0;
      filteredGrid.dataset.status = "nonactive";
      moveAllow = true;
      turn += 1;
    } else if ((filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15) && (grids[filteredGridIndex + 1].dataset.status === "nonactive")) {
      while ( (filteredGridIndex !== 3 && filteredGridIndex !== 7 && filteredGridIndex !== 11 && filteredGridIndex !== 15) && (grids[filteredGridIndex + 1].dataset.status === "nonactive")) {
        filteredGridIndex += 1;
      }
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
