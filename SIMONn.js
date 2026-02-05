let GameSeq = [];
let Userseq = [];


let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {

    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  Userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  //    console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  GameSeq.push(randColor);
  console.log(GameSeq);

  btnFlash(randBtn);
}

function CheckAns(idx) {
  if (Userseq[idx] === GameSeq[idx]) {
    if (Userseq.length === GameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! And your score was ${level}. Press Any Key to Start the Game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }

}

function btnPress() {
  // console.log(this);
  let btn = this;
  btnFlash(btn);
  UserColor = btn.getAttribute("id");
  Userseq.push(UserColor);

  CheckAns(Userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  GameSeq = [];
  Userseq = [];
  level = 0;
}
