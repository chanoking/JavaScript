// Selecting elements
const score0El = document.querySelector("#score--0");
console.log(score0El);
const score1El = document.getElementById("score--1");
console.log(score1El);
const diceEl = document.querySelector(".dice");

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
