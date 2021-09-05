const mainSound = new Audio('./assets/music/soundHome.mp3');
if (typeof mainSound.loop == 'boolean') {
mainSound.loop = true;
} else {
    mainSound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
mainSound.play();