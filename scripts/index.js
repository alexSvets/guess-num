// Event button play
const play = document.querySelector(".game__play");
const container = document.querySelector(".game__list");
const buttons = document.querySelectorAll(".game__button");
const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

console.log(secretNum);
function guessNum(num) {
  console.log(tries, "Попытки");
  if (tries >= 5) {
    alert("У вас закончились попытки");
  }
  if (secretNum == num) {
    alert("Вы победили");
  }
  if (secretNum != num) {
    tries++;
    alert(`Вы не угадали. Осталось ${tries} попыток` );
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    guessNum(button.textContent);
  });
});

function hangingButtons() {
  container.style.display = "flex";
  play.style.display = "none";
}

play.addEventListener("click", hangingButtons);
