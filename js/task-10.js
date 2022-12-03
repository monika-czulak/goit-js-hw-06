function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const boxesCollection = document.querySelector('#boxes')
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const amount = document.querySelector('input')

function createBoxes(amount) {
	if (boxesCollection.innerHTML == '') {
		for (let i = 0; i < amount; i++) {
			const newBox = document.createElement('div')
			boxesCollection.append(newBox)
			let size = 30 + i * 10
			newBox.style.width = `${size}px`
			newBox.style.height = `${size}px`
			newBox.style.backgroundColor = getRandomHexColor()
		}
	} else {
		const currentSize = parseFloat(boxesCollection.lastElementChild.style.width)
		for (let i = 1; i <= amount; i++) {
			const newBox = document.createElement('div')
			boxesCollection.append(newBox)
			let size = currentSize + i * 10
			newBox.style.width = `${size}px`
			newBox.style.height = `${size}px`
			newBox.style.backgroundColor = getRandomHexColor()
		}
	}
}

function destroyBoxes() {
	boxesCollection.innerHTML = ''
}

createBtn.addEventListener('click', e => createBoxes(amount.value))
destroyBtn.addEventListener('click', destroyBoxes)
