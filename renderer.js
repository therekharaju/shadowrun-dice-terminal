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
    const dIndex = command.indexOf('d')
    let plusIndex
    if(command.indexOf('+') === -1){
        if(command.indexOf('-') === -1){
            add = 0
        }
        else {
            plusIndex = command.indexOf('-')
            add = -1 * Number(command.substring(plusIndex + 1))
        }
    }
    else{
        plusIndex = command.indexOf('+')
        add = Number(command.substring(plusIndex + 1))
    }

    const multiplier = Number(command.substring(0, dIndex))
    const dice = Number(command.substring(dIndex + 1, plusIndex))
    
    const dicePic = document.getElementById('dicePic')
    const diceElement = document.getElementById('diceText')

    let resultString = "";
    let rollResult = 0
    for(let i = 0; i < multiplier; i++){
        const singleRoll = Math.floor(Math.random() * (dice) + 1)
        rollResult += singleRoll
        resultString += "(" + singleRoll + ")+"
    }
    rollResult += add
    
    switch(dice){
        case 4:
            dicePic.src = 'd4.png'
            diceElement.style.top = '18%'
            if(rollResult > 9) diceElement.style.left = '42%'
            else diceElement.style.left = '45%'
            break
        case 6:
            dicePic.src = 'd6.png'
            diceElement.style.top = '28%'
            if(rollResult > 9) diceElement.style.left = '23%'
            else diceElement.style.left = '28%'
            break
        case 8:
            dicePic.src = 'd8.png'
            diceElement.style.top = '40%'
            if(rollResult > 9) diceElement.style.left = '40%'
            else diceElement.style.left = '45%'
            break
        case 10:
            dicePic.src = 'd10.png'
            diceElement.style.top = '30%'
            if(rollResult > 9) diceElement.style.left = '42%'
            else diceElement.style.left = '45%'
            break
        case 12:
            dicePic.src = 'd12.png'
            diceElement.style.top = '30%'
            if(rollResult > 9) diceElement.style.left = '25%'
            else diceElement.style.left = '30%'
            break
        default:
            dicePic.src = 'd20.png'
            diceElement.style.top = '37%'
            if(rollResult > 9) diceElement.style.left = '42%'
            else diceElement.style.left = '46%'
            break
    }

    diceElement.innerText = (rollResult - add).toString();
    return resultString + add + " = " + rollResult
}