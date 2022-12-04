function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const boxesCollection = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const amount = document.querySelector('input')
const newBox = document.createElement('div')
const initialSize = 30
let currentSize = initialSize

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		const newBox = document.createElement('div')
		boxesCollection.append(newBox)
		newBox.style.width = `${currentSize}px`
		newBox.style.height = `${currentSize}px`
		newBox.style.backgroundColor = getRandomHexColor()
		currentSize += 10
	}
}

function destroyBoxes() {
	boxesCollection.innerHTML = ''
	currentSize = initialSize
}

createBtn.addEventListener('click', e => createBoxes(amount.value))
destroyBtn.addEventListener('click', destroyBoxes)
