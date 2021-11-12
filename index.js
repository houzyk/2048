const grids = document.querySelectorAll('.grid');

// * Initialise
let randomArray = [Math.round(Math.random() * 15), Math.round(Math.random() * 15)]
while (randomArray[0] === randomArray[1]) {
  randomArray = [Math.round(Math.random() * 15), Math.round(Math.random() * 15)]
}
randomArray.forEach((random) => {
  grids[random].dataset.game = 2;
  grids[random].classList.add('two');
});


const game = (key) => {
  if (key === "ArrowUp") {

  } else if (key === "ArrowDown") {

  } else if (key === "ArrowLeft") {

  } else if (key === "ArrowRight") {

  }
}

window.addEventListener('keyup', event => game(event.key));
