document.querySelector('.tear').addEventListener('click', function() {
    document.querySelector('#games').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelector('.mp3-btn').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

