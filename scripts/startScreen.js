class Startscreen {

  singlePlayerBtn = document.querySelector('.singleplayer');
  multiPlayerBtn = document.querySelector('.multiplayer');
  gameInfo = document.querySelector('.game-info');
  gameTitle = document.querySelector('.game-title');
  newGameArea = document.querySelector('.new-game-area');
  gameSetting = new Gamesetting();
  gameManager = new Gamemanager();
  highscore = document.querySelector('.highscore');
  infoIcon = document.querySelector('.hamburger');
  highscoreList = document.querySelectorAll('.highscore-list')



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
  
    this.highscore.addEventListener('click', () => {
        this.highscoreMenu();
        
      })

    this.infoIcon.addEventListener('click', () => {
      this.hamburgerMenu();
    })

    playSound('sounds/onload-general-sound.mp3');
  }

  
  highscoreMenu() {
    let highScoreList = document.querySelector('.highscore-list');
    
    if (highScoreList.style.display === "flex") {
      highScoreList.style.display = "none";
    } else {
      highScoreList.style.display = "flex";
      this.gameManager.getscore();
    }
}

  hamburgerMenu() {
    let infoScreenList = document.querySelector('.info-screen');

    if (infoScreenList.style.display === "flex") {
      infoScreenList.style.display = "none";
    } else {
      infoScreenList.style.display = "flex";

    }
  }

}






