class Multiplayergame {

    startGameBtn = document.querySelector('.gameLeader div');
    infoScreen = document.querySelector('.infoScreen p');
    playerDone = false;
    playerWon = false;
    latestGuesses = [0, 0, 0, 0, 0];
    latestUl = document.querySelectorAll('.infoScreen ul li');
    latest = document.querySelector('.infoScreen ul');
    bot;

    // Player1
    guessBtn1 = document.querySelector('.player1 button');
    player1input = document.getElementById('player1input');
    player1Name = document.querySelector('.player1 p');
    player1Image = document.querySelector('.player1 img');
    player1frame = document.querySelector('.player1 div');


    // Player2
    guessBtn2 = document.querySelector('.player2 button');
    player2input = document.getElementById('player2input');
    player2Name = document.querySelector('.player2 p');
    player2Image = document.querySelector('.player2 img');
    player2 = document.querySelector('.player2');
    player2frame = document.querySelector('.player2 div');


    // Player3
    guessBtn3 = document.querySelector('.player3 button');
    player3input = document.getElementById('player3input');
    player3Name = document.querySelector('.player3 p');
    player3Image = document.querySelector('.player3 img');
    player3 = document.querySelector('.player3');
    player3frame = document.querySelector('.player3 div');


    constructor(playerNames) {
        this.playerNames = playerNames;
        this.gameManager = new Gamemanager();
        this.answer = this.gameManager.getAnswer(1, 100);
    }

    newGame() {
        this.latest.style.opacity = 1;
        this.player1Name.innerText = this.playerNames[0];
        this.player2Name.innerText = this.playerNames[1];

        if (this.playerNames.length === 2) {
            this.player3.style.visibility = 'hidden';
        }
        if (this.playerNames.length === 3) {
            this.player3Name.innerText = this.playerNames[2];
        }

        this.startGameBtn.addEventListener('click', () => {
            this.player1turn();
        })

        this.guessBtn1.addEventListener('click', () => {
            this.latestGuesses.pop();
            this.latestGuesses.unshift(this.player1input.value);
            this.showLatestGuesses();
            if (this.player1input.value > 1 && this.player1input.value < 100) {
                if (this.player1input.value == this.answer) {
                    this.infoScreen.innerText = `We have a winner!! Congratulations ${this.playerNames[0]}. The correct number was ${this.answer}.`;
                    this.playerWon = true;
                    this.playerDone = true;
                } else if (this.player1input.value < this.answer) {
                    this.infoScreen.innerText = `${this.playerNames[0]} guessed too LOW`;
                    this.playerDone = true;
                } else if (this.player1input.value > this.answer) {
                    this.infoScreen.innerText = `${this.playerNames[0]} guessed too HIGH`;
                    this.playerDone = true;
                }
            } else {
                this.infoScreen.innerText = `${this.playerNames[0]} guessed an invalid number`;
                this.playerDone = true;
            }
            this.player1input.value = '';
        })
        this.guessBtn2.addEventListener('click', () => {
            this.latestGuesses.pop();
            this.latestGuesses.unshift(this.player2input.value);
            this.showLatestGuesses();
            if (this.player2input.value > 1 && this.player2input.value < 100) {
                if (this.player2input.value == this.answer) {
                    this.infoScreen.innerText = `We have a winner!! Congratulations ${this.playerNames[1]}. The correct number was ${this.answer}.`;
                    this.playerWon = true;
                    this.playerDone = true;
                } else if (this.player2input.value < this.answer) {
                    this.infoScreen.innerText = `${this.playerNames[1]} guessed too LOW`;
                    this.playerDone = true;
                } else if (this.player2input.value > this.answer) {
                    this.infoScreen.innerText = `${this.playerNames[1]} guessed too HIGH`;
                    this.playerDone = true;
                }
            } else {
                this.infoScreen.innerText = `${this.playerNames[1]} guessed an invalid number`;
                this.playerDone = true;
            }
            this.player2input.value = '';
        })
        this.guessBtn3.addEventListener('click', () => {
            this.latestGuesses.pop();
            this.latestGuesses.unshift(this.player3input.value);
            this.showLatestGuesses();
            if (this.player3input.value > 1 && this.player3input.value < 100) {
                if (this.player3input.value == this.answer) {
                    this.infoScreen.innerText = `We have a winner!! Congratulations ${this.playerNames[2]}. The correct number was ${this.answer}.`;
                    this.playerWon = true;
                    this.playerDone = true;
                } else if (this.player3input.value < this.answer) {
                    this.infoScreen.innerText = `${this.playerNames[2]} guessed too LOW`;
                    this.playerDone = true;
                } else if (this.player3input.value > this.answer) {
                    this.infoScreen.innerText = `${this.playerNames[2]} guessed too HIGH`;
                    this.playerDone = true;
                }
            } else {
                this.infoScreen.innerText = `${this.playerNames[2]} guessed an invalid number`;
                this.playerDone = true;
            }

            this.player3input.value = '';
        })

        window.addEventListener('keyup', e => {
            if (e.keyCode === 76) {
                if (this.latest.style.opacity == 1) {
                    this.latest.style.opacity = 0;
                } else {
                    this.latest.style.opacity = 1;
                }
            }
        })
    }

    player1turn() {
        this.player1input.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.guessBtn1.click();
            }
        })
        document.getElementById('player1input').focus();
        this.player1frame.style.border = 'solid black 3px';
        this.player2frame.style.border = 'none';
        this.player3frame.style.border = 'none';
        this.guessBtn1.disabled = false;
        this.guessBtn1.style.opacity = 1;

        let player1timer = 0;
        let t = setInterval(() => {
            player1timer += 0.1;
            this.player1frame.style.background = `-webkit-linear-gradient(180deg, transparent ${player1timer}%, #FF7D58 ${player1timer}%)`;
            if (player1timer >= 100 || this.playerDone === true) {
                this.stopPlayer1timer(t);
            }
        }, 10);
    }

    stopPlayer1timer(t) {
        clearInterval(t);
        this.playerDone = false;
        this.player1frame.style.background = `#FF7D58`;
        this.guessBtn1.disabled = true;
        this.guessBtn1.style.opacity = 0.3;
        if (this.playerWon === false) {
            this.player2turn();
        }
    }

    player2turn() {
        this.player2input.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.guessBtn2.click();
            }
        })
        document.getElementById('player2input').focus();
        this.player2frame.style.border = 'solid black 3px';
        this.player1frame.style.border = 'none';
        this.player3frame.style.border = 'none';
        this.guessBtn2.disabled = false;
        this.guessBtn2.style.opacity = 1;

        let player2timer = 0;
        let t = setInterval(() => {
            player2timer += 0.1;
            this.player2frame.style.background = `-webkit-linear-gradient(180deg, transparent ${player2timer}%, #4086AB ${player2timer}%)`;
            if (player2timer >= 100 || this.playerDone === true) {
                this.stopPlayer2timer(t);
            }
        }, 10);
    }

    stopPlayer2timer(t) {
        clearInterval(t);
        this.playerDone = false;
        this.player2frame.style.background = `#4086AB`;
        this.guessBtn2.disabled = true;
        this.guessBtn2.style.opacity = 0.3;
        this.player2frame.style.border = 'none';
        if (this.playerNames.length === 2 && this.playerWon === false) {
            this.player1turn();
        } else if (this.playerNames.length === 3 && this.playerWon === false) {
            this.player3turn();
        }
    }

    player3turn() {
        this.player3input.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.guessBtn3.click();
            }
        })
        document.getElementById('player3input').focus();
        this.player3frame.style.border = 'solid black 3px';
        this.player2frame.style.border = 'none';
        this.player1frame.style.border = 'none';
        this.guessBtn3.disabled = false;
        this.guessBtn3.style.opacity = 1;

        let player3timer = 0;
        let t = setInterval(() => {
            player3timer += 0.1;
            this.player3frame.style.background = `-webkit-linear-gradient(180deg, transparent ${player3timer}%, #FFB358 ${player3timer}%)`;
            if (player3timer >= 100 || this.playerDone === true) {
                this.stopPlayer3timer(t);
            }
        }, 10);
    }

    stopPlayer3timer(t) {
        clearInterval(t);
        this.playerDone = false;
        this.player3frame.style.background = `#FFB358`;
        this.guessBtn3.disabled = true;
        this.guessBtn3.style.opacity = 0.3;
        if (this.playerWon === false) {
            this.player1turn();
        }
    }

    showLatestGuesses() {
        for (let i = 0; i < this.latestGuesses.length; i++) {
            if (this.latestGuesses[i] == 0) {
                this.latestUl[i].style.color = 'black';
            } else if (this.latestGuesses[i] < this.answer) {
                this.latestUl[i].innerText = `▲ ${this.latestGuesses[i]}`;
                this.latestUl[i].style.color = 'green';
            } else if (this.latestGuesses[i] > this.answer) {
                this.latestUl[i].innerText = `▼ ${this.latestGuesses[i]}`;
                this.latestUl[i].style.color = 'red';
            }
        }
    }


}