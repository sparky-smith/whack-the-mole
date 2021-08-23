const score = document.querySelector(".score");
const timeLeft = document.querySelector(".time-left");
const bushes = document.querySelectorAll(".bush");
const kills = document.querySelector(".kills");
const modal = document.querySelector(".modal");
const scoreModal = document.querySelector(".score-modal");
const newBtn = document.querySelector(".new-btn");

let result = 0;
let hitPosition = 0;
const time = timeLeft.textContent;
let currentTime = time;

// randomize Mole position
function randomizeMole() {
  bushes.forEach((bush) => {
    bush.classList.remove("mole");
  });
  let randomBush = bushes[Math.floor(Math.random() * 9)];
  randomBush.classList.add("mole");
  if (randomBush !== undefined) {
    hitPosition = randomBush.id;
  }
}

bushes.forEach((bush) =>
  bush.addEventListener("click", () => {
    if (bush.id === hitPosition) {
      result += 1;
      score.textContent = result;
    }
  })
);

function moveMole(move) {
  if (move) {
    let timerId = setInterval(randomizeMole, 1000);
  }
}
moveMole(true);
//
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    bushes.forEach((bush) => (bush.style.display = "none"));
    modal.style.visibility = "visible";
    kills.textContent = time - result;
    scoreModal.textContent = result;
    clearInterval(timerId);
    showModal();
  }
}
let timerId = setInterval(countDown, 1000);

newBtn.addEventListener("click", () => {
  location.reload();
});
