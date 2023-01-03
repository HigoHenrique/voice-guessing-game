const smallerValue = 0
const greaterValue = 1000
const secretNumber = generateRandomNumber()

function generateRandomNumber () {
    return parseInt(Math.random() * (smallerValue - greaterValue - 1) + greaterValue + 1)
}

console.log('numero secreto '+ secretNumber)

const ElementSmallerValue = document.querySelector('#smaller-value')
ElementSmallerValue.innerHTML = smallerValue

const ElementGreaterValue = document.querySelector('#greater-value')
ElementGreaterValue.innerHTML = greaterValue