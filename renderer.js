const diceRoller = require('./diceParser')

const btn = document.getElementById('btn')
const commandInput = document.getElementById('command')
const resultElement = document.getElementById('result')

btn.addEventListener('click', async () => {
  const result = parseCommand(commandInput.value)
  resultElement.innerText = result
})

commandInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        // Enter key was hit
        const result = parseCommand(commandInput.value)
        resultElement.innerText = result
    }
})

function parseCommand(command) {
    const roll = diceRoller.rollDice(command);

    const dicePic = document.getElementById('dicePic')
    const diceElement = document.getElementById('diceText')
    
    switch(roll.dice){
        case 4:
            dicePic.src = 'd4.png'
            diceElement.style.top = '18%'
            if(roll.rollResult > 9) diceElement.style.left = '42%'
            else diceElement.style.left = '45%'
            break
        case 6:
            dicePic.src = 'd6.png'
            diceElement.style.top = '28%'
            if(roll.rollResult > 9) diceElement.style.left = '23%'
            else diceElement.style.left = '28%'
            break
        case 8:
            dicePic.src = 'd8.png'
            diceElement.style.top = '40%'
            if(roll.rollResult > 9) diceElement.style.left = '40%'
            else diceElement.style.left = '45%'
            break
        case 10:
            dicePic.src = 'd10.png'
            diceElement.style.top = '30%'
            if(rroll.ollResult > 9) diceElement.style.left = '42%'
            else diceElement.style.left = '45%'
            break
        case 12:
            dicePic.src = 'd12.png'
            diceElement.style.top = '30%'
            if(roll.rollResult > 9) diceElement.style.left = '25%'
            else diceElement.style.left = '30%'
            break
        default:
            dicePic.src = 'd20.png'
            diceElement.style.top = '39%'
            if(roll.rollResult > 9) diceElement.style.left = '42%'
            else diceElement.style.left = '46%'
            break
    }

    diceElement.innerText = (roll.rollResult).toString();
    return roll.resultString
}