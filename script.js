document.getElementById('english-button').addEventListener('click', function() {
    document.getElementById('question-text').textContent = 'If you move you are gay.';
    removeButtons();
    startCountdown('Countdown:', 'Okay, you can move now.');
    playAudio();
});

document.getElementById('spanish-button').addEventListener('click', function() {
    document.getElementById('question-text').textContent = 'Si te mueves eres gay.';
    removeButtons();
    startCountdown('Cuenta regresiva:', 'Bien, ya puedes moverte.');
    playAudio();
});

function removeButtons() {
    var buttonContainer = document.querySelector('.button-container');
    buttonContainer.remove();
}

function startCountdown(countdownLabel, timeUpMessage) {
    var countdownElement = document.getElementById('countdown');
    var seconds = 60;
    
    countdownElement.textContent = countdownLabel + ' ' + seconds + ' segundos';

    var countdownInterval = setInterval(function() {
        seconds--;
        countdownElement.textContent = countdownLabel + ' ' + seconds + ' segundos';

        if (seconds <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = timeUpMessage;
            stopAudio();
        }
    }, 1000);
}

function playAudio() {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.play();
}

function stopAudio() {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reiniciar la reproducción al inicio
}