const elForm = document.querySelector('.register-form');
const elUserNameInput = elForm.querySelector('.user-name');
const elUserPasswordInput = elForm.querySelector('.user-password');
const elUserNumberInput = elForm.querySelector('.user-number');

const users = JSON.parse(localStorage.getItem('users') || '[]');
localStorage.setItem('users', JSON.stringify(users));

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const new_date = new Date();
	const current_day = new_date.getDate().toString().padStart(2, '0');
	const current_month = (new_date.getMonth() + 1).toString().padStart(2, '0');
	const current_year = new_date.getFullYear().toString();
	const current_hour = new_date.getHours().toString().padStart(2, '0');
	const current_minute = new_date.getMinutes().toString().padStart(2, '0');

	const nameVal = elUserNameInput.value.trim();
	const passwordVal = elUserPasswordInput.value.trim();
	const telVal = elUserNumberInput.value;

	if (nameVal.length < 2 || nameVal.length >= 20) {
		alert('Username 2tadan uzun bolishi kerak');
		return;
	}

	if (passwordVal.length < 8) {
		alert('Password 8 tadan katta bolishi kerak');
		return;
	}

	if (telVal.length < 13) {
		alert('Telefon raqam +99890xxxxxxx korinishida bolishi kerak');
		return;
	}

	const existsUser = users.find((item) => item.user_phone == telVal);

	if (existsUser) {
		alert('Bu raqam allaqachon royxatdan otgan');
		return;
	}

	const new_user = {
		id: users.length ? users.length + 1 : 1,
		user_name: nameVal,
		password: passwordVal,
		user_phone: telVal,
		user_orders: [],
		register_date: `${current_day}/${current_month}/${current_year} ${current_hour}:${current_minute}`,
	};

	users.push(new_user);
	localStorage.setItem('users', JSON.stringify(users));

	localStorage.setItem('user_id', new_user.id);

	elUserNameInput.value = '';
	elUserPasswordInput.value = '';
	elUserNumberInput.value = '';

	window.location.href = '/index.html';
});
