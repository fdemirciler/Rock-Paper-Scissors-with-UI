function computerPlay() {

    let a = ['Rock', 'Paper', 'Scissors']

    return a[Math.floor(Math.random() * a.length)]

}

function toCapitalize(word) {

    let lower = word.toLowerCase();
    let first = lower.charAt(0).toUpperCase();
    let remaining = lower.slice(1)
    return first + remaining

}

function playRound(playerselection, computerSelection) {

    let p = toCapitalize(playerselection)
    let c = toCapitalize(computerSelection)

    if (p === 'Paper' &&
        c === 'Rock') {

        return 'You win! Paper beats Rock.'

    } else if (p === 'Rock' &&
        c === 'Scissors') {

        return 'You win! Rock beats Scissors.'

    } else if (p === 'Scissors' &&
        c === 'Paper') {

        return 'You win! Scissors beats Paper.'

    } else if (p === c) {

        return 'Same choice. Let\'s try again'
    }

    return `You lose! ${c} beats ${p}`

}

function game() {

    let counter = 0

    for (let i = 1; i < 6; i++) {

        let userInput = toCapitalize(prompt('Please enter your choice.'))

        let result = playRound(userInput, computerPlay())

        if (result.includes('win')) {

            counter += 1

        }
    }

    return `You won ${counter} out of 5 rounds`

}