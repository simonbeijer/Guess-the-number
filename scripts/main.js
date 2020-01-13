document.addEventListener('DOMContentLoaded', () => {
    
    const newGameBtn = document.querySelector('.new-game');
    const gameController = new Gamecontroller();
    
    newGameBtn.addEventListener('click', () => {
        gameController.openGameSettings(newGameBtn);
        gameController.selectOpponent();
    })

}, false);

    


    


