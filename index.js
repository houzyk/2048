const grids = document.querySelectorAll('.grid');

// * Initialise

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
randomArray.forEach((random) => {
  numberPicker(random, 2);
});



const game = (key) => {
  if (key === "ArrowUp") {

  } else if (key === "ArrowDown") {

  } else if (key === "ArrowLeft") {

  } else if (key === "ArrowRight") {

  }
}

window.addEventListener('keyup', event => game(event.key));
