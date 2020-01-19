class Gamescreen {

    gameMode;
    xibitSelected;
    haroldSelected;

    constructor(gameMode, xibitSelected, haroldSelected, playerName) {
        this.gameMode = gameMode;
        this.xibitSelected = xibitSelected;
        this.haroldSelected = haroldSelected;
        this.playerName = playerName
    }

    newGame() {        

        if (this.gameMode == 'singleplayer') {
            console.log(this.gameMode, this.xibitSelected,this.haroldSelected, this.playerName)

        }
    }
}