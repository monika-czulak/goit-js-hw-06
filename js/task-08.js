const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
	event.preventDefault()
	const {
		elements: { email, password },
	} = event.currentTarget

	if (email.value === '' || password.value === '') {
		return alert('Please fill in all the fields!')
	}

	const loginData = new Object()
	loginData.email = email.value
	loginData.password = password.value
	console.log(loginData)
	event.currentTarget.reset()
}
