function winEffects(playerWon,playerNumber) {
   const box = document.createElement('div');
   box.id = 'winnercup';
   box.className = 'winnercup';
   box.innerText = 'WINNERCUP';
   const player = document.getElementById('active-player' + playerNumber);
   player.appendChild(box);

   //insert picture into box
    const img = document.createElement('img');
    img.src = "img/victory.svg";
    img.className = 'winnercup-img';
    box.appendChild(img);


    //congratulation music here
    const sound = document.createElement("audio");
    sound.src = 'sounds/applause.mp3';
    sound.setAttribute('preload', 'auto');
    sound.setAttribute('controls', 'none');
    sound.style.display = 'none';
    box.appendChild(sound);
        sound.play();

    setTimeout(() => {
       //hide winnercup
       box.remove()
   }, 19*1000)
}







