const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const span = document.querySelector('#value')
let counterValue = 0

const decrementValue = () => {
	counterValue -= 1
	span.innerText = counterValue
}

const incrementValue = () => {
	counterValue += 1
	span.innerText = counterValue
}

decrementBtn.addEventListener('click', decrementValue)
incrementBtn.addEventListener('click', incrementValue)
