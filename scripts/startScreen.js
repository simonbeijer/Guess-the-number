class Startscreen {

    singlePlayerBtn = document.querySelector('.singleplayer');
    multiPlayerBtn = document.querySelector('.multiplayer');
    gameInfo = document.querySelector('.game-info');
    gameTitle = document.querySelector('.game-title');
    newGameArea = document.querySelector('.new-game-area');
    gameSetting = new Gamesetting();
    

    init = () => {
        // this.multiPlayerBtn.addEventListener('click', () => {
        //     this.gameSetting.openMultiPlayerGameSettings(this.newGameArea, this.gameTitle);
        //     this.gameSetting.selectOpponent();
        // })
        // this.multiPlayerBtn.addEventListener('mouseover', () => {
        //     this.gameInfo.innerText = 'Play against other players.';
        // })
        // this.multiPlayerBtn.addEventListener('mouseout', () => {
        //     this.gameInfo.innerText = 'Hover game mode to reveal more...';
        // })
    
        this.singlePlayerBtn.addEventListener('click', () => {
            this.gameSetting.openSinglePlayerGameSettings(this.newGameArea, this.gameTitle);
            this.gameSetting.selectOpponent();
        })
        // this.singlePlayerBtn.addEventListener('mouseover', () => {
        //    this.gameInfo.innerText = 'Play against bots...';
        // })
        // this.singlePlayerBtn.addEventListener('mouseout', () => {
        //     this.gameInfo.innerText = 'Hover game mode to reveal more...';
        // })

        this.multiPlayerBtn.addEventListener('click', () => {
            this.gameSetting.openMultiplayerGameSettings(this.newGameArea, this.gameTitle);
        })
    }
    
}

function hamburgerMenu() {
    var x = document.getElementsByClassName("info-screen")[0];

    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}

function highscoreMenu() {
     var x = document.getElementsByClassName("highscore-list")[0];

     if (x.style.display === "flex") {
       x.style.display = "none";
     } else {
      x.style.display = "flex";
    }
  }

  

