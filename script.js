const result = document.querySelector('.result');
const content = document.createElement('div');
content.classList.add('content');
result.appendChild(content);

const score = document.querySelector('.score');
const startingscore = document.createElement('div');
startingscore.classList.add('scoretext');
startingscore.textContent = "0-0"
score.appendChild(startingscore); 

let win = 0;
let loss = 0;


function getComputerChoice() {
    const randnum = Math.floor((Math.random() * 3) + 1)
    switch (randnum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3: 
            return 'scissors';
    }
}

function rock(){
    const computerchoice = getComputerChoice();

    if (computerchoice === "scissors") {
        content.textContent = "You win! Rock beats scissors.";
        win++;
    }
    if (computerchoice === "rock") {
        content.textContent = "It was a tie. You both chose rock.";
    }
    if (computerchoice === "paper"){
        content.textContent = "You lose. Paper beats rock.";
        loss++;
    }
    startingscore.textContent = win + "-" + loss;
    check();
}

function paper(){
    const computerchoice = getComputerChoice();

    if (computerchoice === "scissors") {
        content.textContent = "You lose. Scissors beats paper.";
        loss++;
    }
    if (computerchoice === "rock") {
        content.textContent = "You win! Paper beats rock.";
        win++;
    }
    if (computerchoice === "paper"){
        content.textContent = "It was a tie. You both chose paper.";
    }
    startingscore.textContent = win + "-" + loss;
    check();
}

function scissors(){
    const computerchoice = getComputerChoice();

    if (computerchoice === "scissors") {
        content.textContent = "It was a tie. You both chose scissors.";
    }
    if (computerchoice === "rock") {
        content.textContent = "You lose. Rock beats scissors.";
        loss++;
    }
    if (computerchoice === "paper"){
        content.textContent = "You win! Scissors beats paper.";
        win++;
    }
    startingscore.textContent = win + "-" + loss;
    check();
}

function check() {
    if (win === 5) {
        win = 0;
        loss = 0;
        startingscore.textContent = win + "-" + loss;
        content.textContent = 'You Win!!!!'
    }
    else if (loss === 5) {
        win = 0;
        loss = 0;
        startingscore.textContent = win + "-" + loss;
        content.textContent = 'You Lose!!!!'
    }
}

