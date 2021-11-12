const grids = document.querySelectorAll('.grid');

// * Initialise
const randomGame = Math.round(Math.random() * 15)
grids[randomGame].dataset.game = 2;
grids[randomGame].classList.add('two');
let randomGame2 = Math.round(Math.random() * 15)
while (randomGame === randomGame2) {
  randomGame2 = Math.round(Math.random() * 15)
}
grids[randomGame2].dataset.game = 2;
grids[randomGame2].classList.add('two');

const game = (key) => {
  if (key === "ArrowUp") {

  } else if (key === "ArrowDown") {

  } else if (key === "ArrowLeft") {

  } else if (key === "ArrowRight") {

  }
}

window.addEventListener('keyup', event => game(event.key));
