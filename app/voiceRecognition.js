const elementGuess = document.querySelector('#guess')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    guess = e.results[0][0].transcript
    displayGuess(guess)
    checkGuess(guess)
}

function displayGuess(guess){
    elementGuess.innerHTML = `<div> Você disse </div> <span class="box"> ${guess}</span>`
}

recognition.addEventListener('end', () =>{
    recognition.start()
})