const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

//grab possible choice, listen for click and get target id and save as userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    // call generateComputerchoice function
    generateComputerChoice()
    //call get result function
    getResult()
}))

//generate computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber == 2) {
        computerChoice = 'paper'
    }
    if (randomNumber == 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

//get result
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    if (computerChoice === 'paper' && userChoice ==='rock') {
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice ==='scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice ==='scissors') {
        result = 'You lost!'
    }
    if (computerChoice === 'rock' && userChoice ==='paper') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice ==='rock') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice ==='paper') {
        result = 'You lost!'
    }
    //displays result
    resultDisplay.innerHTML = result
}
