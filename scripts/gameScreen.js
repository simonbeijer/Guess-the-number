class Gamescreen {

    gameMode;
    xibitSelected;
    haroldSelected;
    player1input = document.getElementById('player1input');
    player1Name = document.querySelector('.player1 p');
    player2Name = document.querySelector('.player2 p');
    player3Name = document.querySelector('.player3 p');
    player1Image = document.querySelector('.player1 img');
    player2Image = document.querySelector('.player2 img');
    player3Image = document.querySelector('.player3 img');
    player2 = document.querySelector('.player2');
    player3 = document.querySelector('.player3');    

    constructor(gameMode, xibitSelected, haroldSelected, playerName) {
        this.gameMode = gameMode;
        this.xibitSelected = xibitSelected;
        this.haroldSelected = haroldSelected;
        this.playerName = playerName
    }

    newGame() {        

        if (this.gameMode == 'singleplayer') {
           this.player1Name.innerText = this.playerName;
        }

        if (this.xibitSelected === true && this.haroldSelected === false) {
            this.player2Name.innerText = 'Xibit';
            this.player2Image.setAttribute('src', '/img/op2selected.png');
            this.player3.style.visibility = 'hidden';
        }
        if (this.xibitSelected === false && this.haroldSelected === true) {
            this.player2Name.innerText = 'Harold';
            this.player2Image.setAttribute('src', '/img/op3selected.png');
            this.player3.style.visibility = 'hidden';
        }
        if (this.xibitSelected === true && this.haroldSelected === true) {
            this.player2Name.innerText = 'Xibit';
            this.player2Image.setAttribute('src', '/img/op2selected.png');
            this.player3Name.innerText = 'Harold';
            this.player3Image.setAttribute('src', '/img/op3selected.png');            
        }

        this.player1input.focus();
        let gameManager = new Gamemanager();
        let answer = gameManager.getAnswer(1, 100);
        console.log(answer);
    }
}