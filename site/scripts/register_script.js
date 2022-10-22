function equPasswordsInput(userPassword, userPasswordReplay) {
	if(userPassword === userPasswordReplay)
		return true;
	return false;
}

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
	 * Save input user data (login, password and password replay) into object named userInput
	 */
	let userInput = {
		userName: appForm.elements[0].value,
		userPassword: appForm.elements[1].value,
		userPasswordReplay: appForm.elements[2].value
	};

	/* Compare user passwod and it replay. If they matches - return true, otherwise - return false
	 *
	 */
	let result_compare = equPasswordsInput(userInput.userPassword, userInput.userPasswordReplay);

	/*
	 * Enter user data inro function prepareDataToSend(), that ckeck
	 * the presence of empty lines and spaces in the lines. It return
	 * object userInput with user data if all Ok (login and password is not empty and
	 * do not have spaces) and return false otherwise.
	 */
	userInput = prepareDataToSend(userInput);

	let result = userInput && result_compare;

	if(result != false) {
		let urlRegisterSuccess = "register_success.html";
		let serverUrl = "../server/register.php";
		sendData(userInput, urlRegisterSuccess, serverUrl);
	}
	else {
		errorMes.style.color = '#bd1217';
		if(result_compare === false)
			errorMes.innerHTML = 'Пароли не совпадают!';
		else
			errorMes.innerHTML = 'Логин и пароль не могут быть пустыми и не могут содержать пробелы!';
	}
}

/*
 * Save login form into variable appForm
 */
const appForm = document.getElementById('register_form');

/*
 * If button is pressed - go to the function handleFormSubmit
 */
appForm.addEventListener('submit', handleFormSubmit);