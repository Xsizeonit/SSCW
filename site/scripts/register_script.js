function equPasswordsInput(userPassword, userPasswordReplay) {
	if(userPassword === userPasswordReplay)
		return true;
	return false;
}

function handleFormSubmit(event) {
	event.preventDefault();

	let errorMes = document.getElementById('warning_message');
	errorMes.innerHTML = '';

	let userInput = {
		userName: appForm.elements[0].value,
		userPassword: appForm.elements[1].value,
		userPasswordReplay: appForm.elements[2].value
	};

	userInput = prepareDataToSend(userInput);
	let result_compare = equPasswordsInput(userInput.userPassword, userInput.userPasswordReplay);

	if((userInput != false) && (result_compare === true)) {
		let urlRegisterSuccess = "register_success.html";
		sendData(userInput, urlRegisterSuccess);
	}
	else {
		errorMes.style.color = '#bd1217';
		if(result_compare === false)
			errorMes.innerHTML = 'Пароли не совпадают!';
		else
			errorMes.innerHTML = 'Логин и пароль не могут быть пустыми и не могут содержать пробелы!';
	}
}

const appForm = document.getElementById('register_form');
appForm.addEventListener('submit', handleFormSubmit);