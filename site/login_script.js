function handleFormSubmit(event) {
	event.preventDefault();

	let userInput = {
		userName: appForm.elements[0].value,
		userPassword: appForm.elements[1].value
	};

	userInput = prepareDataToSend(userInput);

	if(userInput != false) {
		console.log("sending_data");
	}
	else {
		console.log("Error");
	}
}

const appForm = document.getElementById('login_form');
appForm.addEventListener('submit', handleFormSubmit);
