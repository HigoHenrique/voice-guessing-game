function checkGuess(guess){
    const guess_format = guess.split(' ').join('')
    const number = + guess_format;

    if(invalidGuess(number)){
        elementGuess.innerHTML += '<div>Valor Inválido</div>'
        return
    }

    if(largerOrSmallerNumber(number)){
        elementGuess.innerHTML += `
        <div>Valor inválido: o número falado precisa estar entre ${smallerValue} e ${greaterValue}</div>`
        return
    }

    if(number === secretNumber){
        document.body.innerHTML = `<h2>Você acertou!</h2> <h3> O número secreto era ${secretNumber}</h3> <button id='play-again' class='btn-play'>Jogar novamente</button>`
    }else if (number > secretNumber){
        elementGuess.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-long"></i></div>`
    }else {
        elementGuess.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-long"></i></div>`
    }
}

function invalidGuess(number) {
    return Number.isNaN(number)
}

function largerOrSmallerNumber(number){
   return number > greaterValue || number < smallerValue
}

document.body.addEventListener('click', (e) =>{
    if (e.target.id == 'play-again'){
        window.location.reload();
    }
})