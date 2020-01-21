class Gamescreen {

    gameMode;
    xibitSelected;
    haroldSelected;
    infoScreen = document.querySelector('.infoScreen p');
    gameManager;
    answer;
    infoText;

    // Player1
    guessBtn1 = document.querySelector('.player1 button');
    player1input = document.getElementById('player1input');
    player1Name = document.querySelector('.player1 p');
    player1Image = document.querySelector('.player1 img');
    player1frame = document.querySelector('.player1 div');
    counter1 = 0;

    // Bot2
    guessBtn2 = document.querySelector('.player2 button');
    player2input = document.getElementById('player2input');
    player2Name = document.querySelector('.player2 p');
    player2Image = document.querySelector('.player2 img');
    player2 = document.querySelector('.player2');
    player2frame = document.querySelector('.player2 div');
    counter2 = 0;

    // Bot3
    guessBtn3 = document.querySelector('.player3 button');
    player3input = document.getElementById('player3input');
    player3Name = document.querySelector('.player3 p');
    player3Image = document.querySelector('.player3 img');
    player3 = document.querySelector('.player3');    
    player3frame = document.querySelector('.player3 div');
    counter3 = 0;
    
    

    constructor(gameMode, xibitSelected, haroldSelected, playerName) {
        this.gameMode = gameMode;
        this.xibitSelected = xibitSelected;
        this.haroldSelected = haroldSelected;
        this.playerName = playerName;
        this.gameManager = new Gamemanager();
        this.answer = this.gameManager.getAnswer(1, 100);
    }

    
    
    changeTurn() {
        if (this.counter1 === this.counter2 && this.counter1 === this.counter3) {
            this.counter1++;
            this.infoText = this.gameManager.checkAnswer(this.answer,this.player1input.value);
            this.infoScreen.innerText = this.infoText + " " + this.playerName;
            this.player1input.value = '';
            this.player1frame.style.border = 'none';
            this.player2frame.style.border = 'solid black 5px';
            setTimeout(() => {
                this.player2input.value = 50;
                this.infoText = this.gameManager.checkAnswer(this.answer,50);
                this.infoScreen.innerText =  this.infoText + " Xibit" ;
                this.player2frame.style.border = 'none';
                setTimeout(() => {
                    this.player2input.value = '';
                    this.player3frame.style.border = 'solid black 5px';
                }, 2000);
            }, 3000);
            setTimeout(() => {
                this.player3input.value = 10;
                this.infoText = this.gameManager.checkAnswer(this.answer,10);
                this.infoScreen.innerText = this.infoText + " Harold";
                this.player3frame.style.border = 'none';
                setTimeout(() => {
                    this.player3input.value = '';
                }, 3000);
            }, 5000);
        } else {
            console.log('makkus');
        }
    }
    
    
    
    
    newGame() {        
        
        this.guessBtn2.style.visibility = 'hidden';
        this.guessBtn3.style.visibility = 'hidden';
        
        this.player1frame.style.border = 'solid black 5px';

        if (this.gameMode == 'singleplayer') {
           this.player1Name.innerText = this.playerName;
        }

        if (this.xibitSelected === true && this.haroldSelected === false) {
            this.player2Name.innerText = 'Xibit';
            this.player2Image.setAttribute('src', 'img/op2selected.png');
            this.player3.style.visibility = 'hidden';
        }
        if (this.xibitSelected === false && this.haroldSelected === true) {
            this.player2Name.innerText = 'Harold';
            this.player2Image.setAttribute('src', 'img/op3selected.png');
            this.player3.style.visibility = 'hidden';
        }
        if (this.xibitSelected === true && this.haroldSelected === true) {
            this.player2Name.innerText = 'Xibit';
            this.player2Image.setAttribute('src', 'img/op2selected.png');
            this.player3Name.innerText = 'Harold';
            this.player3Image.setAttribute('src', 'img/op3selected.png');
        }

        this.player1input.focus();
        
        console.log(this.answer);
        console.log(this.counter1, this.counter2, this.counter3);

        this.guessBtn1.addEventListener('click', () => {
            this.changeTurn();
        }) 

        
        // else if (this.counter1 == this.counter2 && this.counter1 == this.counter3) {
        //     this.guessBtn.addEventListener('click', () => {
        //         let infoText = gameManager.checkAnswer(answer,this.player1input.value);
        //         this.infoScreen.innerText = infoText;
        //         this.player1input.value = '';
        //         this.counter1++;
        //         console.log("LOG", this.counter1);
                
        //         console.log(this.counter1, this.counter2, this.counter3);
        //         console.log("else if");
        //     }) 
        // } else {
        //     this.guessBtn.disabled = true;
        // console.log(" else disabled det är inte din tur");
        // }

        // this.guessBtn.disabled = true;
        // if(this.guessBtn.disabled = true) {
        //     console.log("disabled");
        // }
        // else {
        //     let infoText = gameManager.checkAnswer(answer,this.player1input.value);
        //     this.infoScreen.innerText = infoText;
        //     this.player1input.value = '';
        //     this.counter1++;
        //     console.log(this.counter1);
        // }
    }

}