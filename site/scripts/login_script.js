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
		let urlLoginSuccess = "login_success.html";
		sendData(userInput, urlLoginSuccess);
	}
	else {
		errorMes.style.color = '#bd1217';
		errorMes.innerHTML = 'Логин и пароль не могут быть пустыми и не могут содержать пробелы!';
	}
}

const appForm = document.getElementById('login_form');
appForm.addEventListener('submit', handleFormSubmit);
