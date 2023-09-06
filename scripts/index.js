const play = document.querySelector(".game__play");
const container = document.querySelector(".game__list");
const buttons = document.querySelectorAll(".game__button");
const counter = document.querySelector(".game__tries");
const text = document.querySelector(".game__counter");
const secretNum = Math.ceil(Math.random() * 10);
const popup = document.querySelector(".popup");
const popupWon = document.querySelector(".popup_type-won");
const popupLose = document.querySelector(".popup_type-lose");
const popupButtonWon = document.querySelector(".popup__button-won");
const popupButtonLose = document.querySelector(".popup__button-lose");
const popupContent = document.querySelector(".popup__content");
let tries = 0;

function guessNum(num) {
  if (tries >= 4) {
    popupLose.classList.add("popup_is-openned");
  }
  if (secretNum == num) {
    popupWon.classList.add("popup_is-openned");
  }
  if (secretNum != num) {
    tries++;
    counter.textContent = tries;
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
  text.style.display = "block";
}

function popupClose(popup) {
  popup.classList.remove("popup_is-openned");
  window.location.reload();
}

play.addEventListener("click", hangingButtons);
popupButtonWon.addEventListener("click", () => popupClose(popupWon));
popupButtonLose.addEventListener("click", () => popupClose(popupLose));

// document.addEventListener('click', (e)=>{
//   const click = e.composedPath().includes(popupContent)
//   if(!click){
//     popupContent.style.display = "none"
//   }
// })
