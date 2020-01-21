class Gamesetting {

    newGameDropdown = document.querySelector('.dropdown-newgame');
    newGameScreen = document.querySelector('.gamescreen');
    newGameHeading = document.querySelector('.heading-new-game');
    opponents = document.querySelector('.select-opponents');
    selectOpponenth2 = document.querySelector('.dropdown-newgame h2')
    opponent2 = document.querySelector('.opponent2');
    opponent2Img = document.querySelector('.opponent2 img');
    opponent3 = document.querySelector('.opponent3');
    opponent3Img = document.querySelector('.opponent3 img');
    playBtn = document.querySelector('.play');    
    xibitSelected = false;
    haroldSelected = false;
    gamemode;

    openMultiplayerGameSettings(newGameArea, gameTitle) {
        this.playBtn.addEventListener('click', () => {
            this.gamemode = 'multiplayer';
            // let playerName = document.querySelector('.playername input').value;
            // let gamescreen = new Gamescreen(this.gamemode, this.xibitSelected, this.haroldSelected, playerName);
            // gamescreen.newGame();
            this.newGameDropdown.style.display = 'none';
            this.newGameScreen.classList.add('show');
        });

        this.gamemode = 'multiplayer';
        newGameArea.style.display = 'none';
        gameTitle.style.display = 'none';
        this.newGameDropdown.classList.add('show');

        const selectOpponents = document.getElementById('select-opponents');
        selectOpponents.remove();

        setTimeout(() => {
            this.newGameHeading.classList.add('fadeIn');
        }, 800)
    }

    openSinglePlayerGameSettings(newGameArea, gameTitle) {
        this.playBtn.addEventListener('click', () => { 
            this.gamemode = 'singleplayer'; 
            let playerName = document.querySelector('.playername input').value;         
            let gamescreen = new Gamescreen(this.gamemode, this.xibitSelected, this.haroldSelected, playerName);
            gamescreen.newGame();
            this.newGameDropdown.style.display = 'none';
            this.newGameScreen.classList.add('show');
        })
        this.gamemode = 'singleplayer';
        newGameArea.style.display = 'none';
        gameTitle.style.display = 'none';
        this.newGameDropdown.classList.add('show');
        setTimeout(() => {
            this.newGameHeading.classList.add('fadeIn');
            this.opponents.classList.add('fadeIn');
            this.selectOpponenth2.classList.add('fadeIn');
        }, 800)
    }

    // openMultiPlayerGameSettings(newGameArea, gameTitle) {
    //     this.gamemode = 'multiplayer';
    //     newGameArea.style.display = 'none';
    //     gameTitle.style.display = 'none';
    //     this.newGameDropdown.classList.add('show');
    //     setTimeout(() => {
    //         this.newGameHeading.classList.add('fadeIn');
    //         this.opponents.classList.add('fadeIn');
    //         this.selectOpponenth2.classList.add('fadeIn');
    //     }, 800)
    // }

    showPlayBtn() {    
        if (this.xibitSelected == true || this.haroldSelected == true) {
            this.playBtn.style.opacity = '1';
        } else {
            this.playBtn.style.opacity = '0';
        }                        
    }

    selectOpponent(){

        this.opponent2.addEventListener('click', () => {
            if (this.opponent2.classList.contains('selected')) {
                this.opponent2Img.setAttribute('src', 'img/op2.png');
                this.opponent2.classList.remove('selected');
                this.xibitSelected = false;                
            } else {
                this.opponent2Img.setAttribute('src', 'img/op2selected.png');
                this.opponent2.classList.add('selected');                
                this.xibitSelected = true;
            }
            this.showPlayBtn();
        })

        this.opponent3.addEventListener('click', () => {
            if (this.opponent3.classList.contains('selected')) {
                this.opponent3Img.setAttribute('src', 'img/op3.png');
                this.opponent3.classList.remove('selected');
                this.haroldSelected = false;                
            } else {
                this.opponent3Img.setAttribute('src', 'img/op3selected.png');
                this.opponent3.classList.add('selected');              
                this.haroldSelected = true;
            }
            this.showPlayBtn();
        })        
    }    
}