function equPasswordsInput(userPassword, userPasswordReplay) {
	if(userPassword === userPasswordReplay)
		return true;
	return false;
}

function handleFormSubmit(event) {
	event.preventDefault();

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
		console.log("Error!");
	}
}

const appForm = document.getElementById('register_form');
appForm.addEventListener('submit', handleFormSubmit);