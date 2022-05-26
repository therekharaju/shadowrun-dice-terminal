const btn = document.getElementById('btn')
const commandInput = document.getElementById('command')
const resultElement = document.getElementById('result')

btn.addEventListener('click', async () => {
  const result = commandInput.value
  resultElement.innerText = result
})