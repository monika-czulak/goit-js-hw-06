const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const list = document.querySelector('#ingredients')

// for (let i = 0; i < ingredients.length; i++) {
// 	const listItem = document.createElement('li')
// 	listItem.textContent = ingredients[i]
// 	listItem.classList.add('item')
// 	list.append(listItem)
// }

for (let el of ingredients) {
	const listItem = document.createElement('li')
	listItem.textContent = el
	listItem.classList.add('item')
	list.append(listItem)
}
