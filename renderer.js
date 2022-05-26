const btn = document.getElementById('btn')
const commandInput = document.getElementById('command')
const resultElement = document.getElementById('result')

btn.addEventListener('click', async () => {
  const result = parseCommand(commandInput.value)
  resultElement.innerText = result
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
    
    let resultString = "";
    let rollResult = 0
    for(let i = 0; i < multiplier; i++){
        const singleRoll = Math.floor(Math.random() * (dice) + 1)
        rollResult += singleRoll
        resultString += "(" + singleRoll + ") + "
    }
    rollResult += add
    return resultString + add + " = " + rollResult
}