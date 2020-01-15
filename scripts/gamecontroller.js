class Gamecontroller {

    newGameDropdown = document.querySelector('.dropdown-newgame');
    newGameHeading = document.querySelector('.heading-new-game');
    opponents = document.querySelector('.select-opponents');
    selectOpponenth2 = document.querySelector('.dropdown-newgame h2')
    opponent1 = document.querySelector('.opponent1');
    opponent1Img = document.querySelector('.opponent1 img');
    opponent2 = document.querySelector('.opponent2');
    opponent2Img = document.querySelector('.opponent2 img');
    opponent3 = document.querySelector('.opponent3');
    opponent3Img = document.querySelector('.opponent3 img');
    playBtn = document.querySelector('.play');
    

    openGameSettings(newGameBtn) {
        newGameBtn.style.display = 'none';
        this.newGameDropdown.classList.add('show');
        setTimeout(() => {
            this.newGameHeading.classList.add('fadeIn');
            this.opponents.classList.add('fadeIn');
            this.selectOpponenth2.classList.add('fadeIn');
        }, 800)
    }

    selectOpponent(){
        this.opponent1.addEventListener('click', () => {
            if (this.opponent1.classList.contains('not-selected1')) {
                this.opponent1Img.setAttribute('src', '/img/op1selected.png');
                this.opponent1.classList.remove('not-selected1');
                this.opponent2Img.setAttribute('src', '/img/op2.png');
                this.opponent2.classList.add('not-selected2');
                this.opponent3Img.setAttribute('src', '/img/op3.png');
                this.opponent3.classList.add('not-selected3');
                this.playBtn.style.opacity = '1';
            }
        })

        this.opponent2.addEventListener('click', () => {
            if (this.opponent2.classList.contains('not-selected2')) {
                this.opponent2Img.setAttribute('src', '/img/op2selected.png');
                this.opponent2.classList.remove('not-selected2');
                this.opponent1Img.setAttribute('src', '/img/op1.png');
                this.opponent1.classList.add('not-selected1');
                this.opponent3Img.setAttribute('src', '/img/op3.png');
                this.opponent3.classList.add('not-selected3');
                this.playBtn.style.opacity = '1';
            }
        })

        this.opponent3.addEventListener('click', () => {
            if (this.opponent3.classList.contains('not-selected3')) {
                this.opponent3Img.setAttribute('src', '/img/op3selected.png');
                this.opponent3.classList.remove('not-selected3');
                this.opponent2Img.setAttribute('src', '/img/op2.png');
                this.opponent2.classList.add('not-selected2');
                this.opponent1Img.setAttribute('src', '/img/op1.png');
                this.opponent1.classList.add('not-selected1');
                this.playBtn.style.opacity = '1';
            }
        })
      
    }


}