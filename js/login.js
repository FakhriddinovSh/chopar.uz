const elForm = document.querySelector('.register-form');
const elPassworInput = elForm.querySelector('.user-password');
const elNumberInput = elForm.querySelector('.user-number');

const users = JSON.parse(localStorage.getItem('users') || '[]');

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const passwordVal = elPassworInput.value.trim().toLowerCase``;
	const numberVal = elNumberInput.value.trim();

	const registerdUser = users.find((item) => item.user_phone == numberVal);

	if (registerdUser?.password == passwordVal) {
		window.location.href = '/index.html';
	} else {
		alert('Bunday foydalanuvchi mavjud emas');
		return;
	}

	localStorage.setItem('user_id', registerdUser?.id);
});
