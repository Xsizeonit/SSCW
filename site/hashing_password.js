function HandleFormSubmit(event) {
	event.preventDefault();

	let password = appForm.elements[1].value;
	console.log(password);
}

const appForm = document.getElementById('login_form');
appForm.addEventListener('submit', HandleFormSubmit);
