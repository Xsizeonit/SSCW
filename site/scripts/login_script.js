function handleFormSubmit(event) {
	/*
	 * Denie to reload page after button has pressed
	 */
	event.preventDefault();

	/*
	 * Save special tag for warning text into errorMes to in future display
	 * errors in user inputing. Plus reset warning text to delete previous
	 * error message.
	 */
	let errorMes = document.getElementById('warning_message');
	errorMes.innerHTML = '';

	/*
	 * Save input user data (login and password) into object named userInput
	 */
	let userInput = {
		userName: appForm.elements[0].value,
		userPassword: appForm.elements[1].value
	};

	/*
	 * Enter user data inro function prepareDataToSend(), that ckeck
	 * the presence of empty lines and spaces in the lines. It return
	 * object userInput with user data if all Ok (login and password is not empty and
	 * do not have spaces) and return false otherwise.
	 */
	userInput = prepareDataToSend(userInput);

	if(userInput != false) {
		let urlLoginSuccess = "login_success.html";
		let serverUrl = "../server/index.php";
		sendData(userInput, urlLoginSuccess, serverUrl);
	}
	else {
		errorMes.style.color = '#bd1217';
		errorMes.innerHTML = 'Логин и пароль не могут быть пустыми и не могут содержать пробелы!';
	}
}

/*
 * Save login form into variable appForm
 */
const appForm = document.getElementById('login_form');

/*
 * If button is pressed - go to the function handleFormSubmit
 */
appForm.addEventListener('submit', handleFormSubmit);
