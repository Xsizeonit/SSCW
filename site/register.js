function handle_form_submit(event) {
	event.preventDefault();

	let password = appForm.elements[1].value;
	let rep_password = appForm.elements[2].value;

	if(password === rep_password)
		alert("Всё ок!");
	else
		alert("Пароли не совпадают");
}

const appForm = document.getElementById('register_form');
appForm.addEventListener('submit', handle_form_submit);

