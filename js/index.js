const slides = document.querySelectorAll(".lodka");
const podText = document.querySelectorAll(".res");

let positions = ["left", "active", "right"];

function update() {
  slides.forEach((slide, i) => {
    slide.classList.remove("left", "active", "right");
    slide.classList.add(positions[i]);
    podText.forEach((text, index) => {
      text.classList.remove("active");
      text.classList.add(positions[index]);
    });
  });
}

document.querySelector(".next").addEventListener("click", () => {
  positions.push(positions.shift());
  update();
});
document.querySelector(".prev").addEventListener("click", () => {
  positions.unshift(positions.pop());
  update();
});

update();

const ball = document.querySelector(".ball");
const kicker = document.querySelector(".person");
const game = document.querySelector(".game-board");
const scores = document.querySelectorAll(".score");
const startTablo = document.querySelector(".first-game");
const gameTablo = document.querySelector(".game-start");
const endTablo = document.querySelector(".end-card");
const main = document.querySelector(".main");
const main2 = document.querySelector(".m2");
const placeClick = document.querySelector(".game-board");
const personChange = document.querySelector(".person img");
const time = document.querySelector(".time");

let index = 1;
let IsFalling = false;
let score = 0;
let timer = 20;
let timeInterval;

function EndGame() {
  endTablo.classList.remove("hidden");
  gameTablo.classList.add("hidden");
}

function Timer() {
  time.textContent = timer;
  timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      time.textContent = timer;
    } else {
      EndGame();
    }
  }, 1000);
}

function ChosePlayer() {
  main.classList.add("hidden");
  main2.classList.remove("hidden");
}

function startGame() {
  startTablo.classList.add("hidden");
  gameTablo.classList.remove("hidden");
  const text = document.querySelector(".res.active");
  const name = text.textContent.trim();
  personChange.src = `./assets/${name}.png`;

  IsFalling = true;
  console.log(IsFalling);
  Timer();
}
function animate() {
  if (IsFalling) {
    if (index > 300) {
      IsFalling = false;
      EndGame();
    }
    ball.style.top = `${(index += 1.5)}px`;
  }
  requestAnimationFrame(animate);
}

animate();

scores.forEach((element) => (element.textContent = score));
placeClick.addEventListener("click", () => {
  kicker.style.bottom = "70px";
  let top = kicker.style.bottom;
  if ((index <= 270 && index >= 170) || top === 70) {
    index = -30;
    score++;
    scores.forEach((element) => (element.textContent = score));
    ball.classList.add("spin");
  }
  setTimeout(() => {
    ball.classList.remove("spin");
  }, 2000);

  setTimeout(() => {
    kicker.style.bottom = "0";
  }, 400);
});

function PlayAgain() {
  endTablo.classList.add("hidden");
  gameTablo.classList.remove("hidden");
  timer = 21;
  index = -30;
  score = 0;
  IsFalling = true;
  scores.forEach((element) => {
    element.textContent = 0;
  });
}
