const grids = document.querySelectorAll('.grid');

// * Game Initialise

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

// ! Flow Checkers
const arrowUp = () => {} // TODO
const arrowDown = () => {} // TODO
const arrowLeft = () => {} // TODO
const arrowRight = () => {} // TODO

// ! Flow Control
const game = (key) => {
  if (key === "ArrowUp") arrowUp();
  if (key === "ArrowDown") arrowDown();
  if (key === "ArrowLeft") arrowLeft();
  if (key === "ArrowRight") arrowRight();
}

window.addEventListener('keyup', event => game(event.key));
