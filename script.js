"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("🛑 no Number !!!");
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "🔼 Too high ..." : "🔽 Too low ..."
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🤬 You Lost ...");
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct !!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = "20";
  score = Number(document.querySelector(".score").textContent);
});
