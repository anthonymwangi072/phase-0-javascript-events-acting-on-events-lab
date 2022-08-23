// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";

function moveDodgerLeft() {
  const lefthand = dodger.style.left.replace("px", "");
  const left = parseInt(lefthand, 10);

  if (left > 0) {
    dodger.style.left = `${left - 15}px`;
  }
}

function moveDodgerRight() {
  const lefthand = dodger.style.left.replace("px", "");
  const left = parseInt(lefthand, 10);

  if (left < 360) {
    dodger.style.left = `${left + 15}px`;
  }
}

function moveDodgerUp() {
  const bottomhand = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomhand, 10);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 15}px`;
    }
}

function moveDodgerDown() {
  const bottomhand = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomhand, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 15}px`;
    }
}


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});