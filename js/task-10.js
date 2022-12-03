function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const userInput = document.querySelector('#controls input')
const boxesCollection = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const amount = document.querySelector('input')

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		console.log(amount)
		const newBox = document.createElement('div')
		boxesCollection.append(newBox)
		let size = 30 + i * 10
		newBox.style.width = `${size}px`
		newBox.style.height = `${size}px`
		newBox.style.backgroundColor = getRandomHexColor()
	}
}

function destroyBoxes() {
	boxesCollection.innerHTML = ''
}

createBtn.addEventListener('click', e => createBoxes(amount.value))
destroyBtn.addEventListener('click', destroyBoxes)
