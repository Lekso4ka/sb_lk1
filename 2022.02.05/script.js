const board = document.querySelector(".board");

const pet = document.createElement("div");
const START_LINE = 540;
let left = 50;
let bgLeft = 0;
let bgRight = 0;
let bgMove = 0;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

let gameSet = [];

let leftPl = 150;
for (let i = 0; i < 20; i++) {
    gameSet.push({left: getRandom(leftPl, leftPl + 150), top: getRandom(0, START_LINE - pet.offsetHeight)});
    leftPl = gameSet[gameSet.length - 1].left + 100;
}

let platformBlock = document.createElement("div");
platformBlock.className = "plBlock";
board.append(platformBlock);
bgRight = gameSet[gameSet.length - 1].left + 60 + 150;
platformBlock.style.width = bgRight + "px";

console.log(bgLeft, bgRight);
gameSet.forEach(pl => {
    const platform = document.createElement("div");
    platform.className = "platform";
    platform.style.top = pl.top + "px";
    platform.style.left = pl.left + "px";
    platformBlock.append(platform);
});

pet.className = "pet right";
board.append(pet);
pet.style.top = START_LINE - pet.offsetHeight + "px";
pet.style.left = left + "px";

const checkBounds = (move) => {
    const right = board.offsetWidth - pet.offsetWidth;
    if (left < 0) {
        left = 0;
        bgMove += move;
        if (bgMove > 0) {
            bgMove = 0;
        }
        platformBlock.style.transform = `translate(${bgMove}px, 0)`;
    }
    if (left > right) {
        left = right;
        bgMove -= move;
        if (bgMove < -(bgRight - board.offsetWidth)) {
            bgMove = -(bgRight - board.offsetWidth);
        }
        platformBlock.style.transform = `translate(${bgMove}px, 0)`;
    }
}

const moveLeft = (steps) => {
    if (pet.classList.contains("right")) {
        pet.classList.remove("right");
        pet.classList.add("left");
    } else {
        left = left - steps;
        checkBounds(steps);
        pet.style.left = left + "px";
    }
}

const moveRight = (steps) => {
    if (pet.classList.contains("left")) {
        pet.classList.remove("left");
        pet.classList.add("right");
    } else {
        left = left + steps;
        checkBounds(steps);
        pet.style.left = left + "px";
    }
}

const platforms = document.getElementsByClassName("platform");

const jump = () => {
    pet.style.top = START_LINE - pet.offsetHeight * 3 + "px";
    setTimeout(function() {
        pet.style.top = START_LINE - pet.offsetHeight + "px";
    }, 500);
    for (let i = 0; i < platforms.length; i++) {
        let pl = platforms[i];
        console.log(pl.getBoundingClientRect());
        console.log(pet.getBoundingClientRect());
    }
}

const eventHandler = (e) => {
    switch (e.code) {
        case "ArrowRight":
            moveRight(50);
            break;
        case "ArrowLeft":
            moveLeft(50);
            break;
        case "Space":
            e.preventDefault();
            jump();
    }
}

document.body.addEventListener("keydown", eventHandler);