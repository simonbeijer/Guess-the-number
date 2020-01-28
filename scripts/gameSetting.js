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
    playersAmount = 1;
    counter = 0;

    openMultiplayerGameSettings(newGameArea, gameTitle) {
        document.querySelector('.playername input').focus();
        this.playBtn.addEventListener('click', () => {
            this.gamemode = 'multiplayer';
            let playerInputs = document.querySelectorAll('.playername input');
            let playerNames = [];
            for (let name of playerInputs) {
                playerNames.push(name.value);
            }
            let multiplayergame = new Multiplayergame(playerNames); 
            multiplayergame.newGame();
            this.newGameDropdown.style.display = 'none';
            this.newGameScreen.classList.add('show');
        });

        this.gamemode = 'multiplayer';
        newGameArea.style.display = 'none';
        gameTitle.style.display = 'none';
        this.newGameDropdown.classList.add('show');
        this.showPlayBtn(); 

        const selectOpponents = document.getElementById('select-opponents');
        selectOpponents.remove();

       const player1 = document.getElementById('player1');
       const player2 = this.createNewPlayer('player2');
       player1.parentNode.insertBefore(player2, player1.nextSibling);
       this.playersAmount += 1;

       this.createAddButton(player2);

        setTimeout(() => {
            this.newGameHeading.classList.add('fadeIn');
        }, 800)
    }

    createAddButton(elementBefore) {
        const button = document.createElement('button');
        button.className = 'btn-add-player';
        button.innerText = 'Add player';
        button.addEventListener('click', () => { 
            if (this.playersAmount < 3) {
                const player = this.createNewPlayer('player' + (this.playersAmount + 1));
                button.parentNode.insertBefore(player, button);
                this.playersAmount += 1; 
            }           
        });
        elementBefore.parentNode.insertBefore(button, elementBefore.nextSibling);
    }

    createNewPlayer(id) {
        const colors = ['black', 'black', 'red', 'yellow', 'pink', 'orange', 'purple'];
        const result = document.createElement('div');
        result.id = id;
        result.className = 'playername';
        this.counter++;
        const avatar = document.createElement('i');
        if(this.counter == 1) {
            avatar.className = 'fas fa-user-secret fa-7x';
        } else {
            avatar.className = 'fas fa-user-astronaut fa-7x';
        }
        avatar.setAttribute('aria-hidden', 'true');
        avatar.style.color = colors[this.playersAmount - 1];
        result.append(avatar);

        const name = document.createElement('input');
        name.type = 'text';
        name.placeholder = 'Enter name..';
        result.append(name);

        return result;
    }

    openSinglePlayerGameSettings(newGameArea, gameTitle) {
        document.querySelector('.playername input').focus();
        this.playBtn.addEventListener('click', () => { 
            this.gamemode = 'singleplayer'; 
            let playerName = document.querySelector('.playername input').value; 
            let players = [this.xibitSelected, this.haroldSelected, playerName];        
            let singleplayergame = new Singleplayergame(players);
            singleplayergame.newGame();
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
        } else if (this.gamemode == 'multiplayer') {
            this.playBtn.style.opacity = '1';
        }else {
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