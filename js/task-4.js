const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
	event.preventDefault();
	const formEl = form.elements;
	const emailInput = formEl.email;
	const passwordInput = formEl.password;
	const emailValue = emailInput.value.trim();
	const passwordValue = passwordInput.value.trim();
	if(emailValue === ''|| passwordValue === ''){
		alert("All form fields must be filled in");
		return
	}
	const formData = {
		email: emailValue,
		password: passwordValue
	};
	console.log(formData);
	form.reset();
});

	