function playSound(file) {
    const sound = document.createElement("audio");
    sound.id = 'jukebox';
    sound.src = file;
    sound.setAttribute('preload', 'auto');
    sound.setAttribute('controls', 'none');
    sound.setAttribute('type', 'audio/mpeg');
    sound.setAttribute('autoplay', '');
    sound.style.display = 'none';
    document.body.appendChild(sound);
    sound.play();
}

function stopSound() {
    const sound = document.getElementById('jukebox');
    if (sound != null) {
        sound.pause();
        sound.remove();
    }
}