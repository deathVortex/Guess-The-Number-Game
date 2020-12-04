"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "🛑 no Number !!!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "🔼 Too high ...";
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "🤬 You Lost ...";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "🔽 Too low ...";
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "🤬 You Lost ...";
    }
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct !!!";
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
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = "20";
  score = Number(document.querySelector(".score").textContent);
});
