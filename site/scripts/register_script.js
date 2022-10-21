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
		console.log("sending_data");
	}
	else {
		errorMes.style.color = 'red';
		if(result_compare === false)
			errorMes.innerHTML = 'Пароли не совпадают!';
		else
			errorMes.innerHTML = 'Логин и пароль не должны быть пустыми!';
	}
}

const appForm = document.getElementById('register_form');
appForm.addEventListener('submit', handleFormSubmit);