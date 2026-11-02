let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector("h3");

let started = false;
let level = 0;

let btns = ["yellow", "green", "red", "blue"];

document.addEventListener("keypress", function() {
    if(started == false){
        started = true;

        levelUp();
    }

});

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
};

let highestScore = Number(localStorage.getItem("highestScore")) || 0;
let currentScore = 0;
document.getElementById("highest").innerText = `${highestScore}`;

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    document.getElementById("current").innerText = `${level}`;
    if (level > highestScore) {
        highestScore = level;
        localStorage.setItem("highestScore", highestScore);
        document.getElementById("highest").innerText = `${highestScore}`;
    };

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    flashBtn(randBtn);
    gameSeq.push(randColor);
};

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 750);
        }
    }
    else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        h3.innerHTML = `Game Over! Your score is <b>${level}</b><br>Press any key to start the game.`;
        reset();
    }
};

function btnPress() {
    let btn = this;
    flashBtn(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
};

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
};