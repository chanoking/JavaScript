/*
console.log(document.querySelector(".message").textContent); "Correct Number!👅";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = "Idontkonw";
document.querySelector(".score").textContent = 100;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let correctNumber = Math.floor(Math.random() * 50 + 1);
console.log(correctNumber);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  let trying = Number(document.querySelector(".score").textContent);

  if (!guess || guess < 1 || guess > 50) {
    displayMessage("The number is between 1 and 50!!");
  } else if (guess === correctNumber) {
    displayMessage("Yesss, the correct Number 🫶");
    --trying;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = correctNumber;
    document.querySelector(".score").textContent = trying;
  } else if (guess !== correctNumber) {
    guess > correctNumber
      ? displayMessage("Little bit more down plz!!! 🫶")
      : displayMessage("Little bit more up!!!! plz 🫶");
    --trying;
    document.querySelector(".score").textContent = trying;
  }
  if ((guess !== correctNumber && trying === 0) || trying < 0) {
    displayMessage("You dont have no chances any more 🤫");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 3;
  displayMessage("Start guessing...👀");
  document.querySelector("body").style.backgroundColor = "#222";
  correctNumber = generateCorrectNumber();
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  console.log(correctNumber);
});

function generateCorrectNumber() {
  return Math.floor(Math.random() * 50 + 1);
}
