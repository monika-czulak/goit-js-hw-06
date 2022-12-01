const textInput = document.querySelector('#validation-input')

const inputValidation = () => {
	if (textInput.value.length == parseInt(textInput.dataset.length)) {
		textInput.classList.add('valid')
		textInput.classList.remove('invalid')
	} else {
		textInput.classList.add('invalid')
		textInput.classList.remove('valid')
	}
}

textInput.addEventListener('blur', inputValidation)
