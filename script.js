function getComputerChoice() {
    const randnum = Math.floor((Math.random() * 3) + 1)
    switch (randnum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3: 
            return 'scissors'
    }
}

getComputerChoice()