function handleFormSubmit(event) {
	event.preventDefault();

	let errorMes = document.getElementById('warning_message');
	errorMes.innerHTML = '';

	let userInput = {
		userName: appForm.elements[0].value,
		userPassword: appForm.elements[1].value
	};

	userInput = prepareDataToSend(userInput);

	if(userInput != false) {
		sendJsonData(userInput);
	}
	else {
		errorMes.style.color = 'red';
		errorMes.innerHTML = 'Логин и пароль не могут быть пустыми!';
	}
}

const appForm = document.getElementById('login_form');
appForm.addEventListener('submit', handleFormSubmit);
