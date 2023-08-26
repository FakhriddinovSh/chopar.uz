const users = JSON.parse(localStorage.getItem('users') || '[]');
const elSidebarTopList = document.querySelector('.sidebar-top__list');
const elList = document.querySelector('.sidebar-list');
const elOrdersList = document.querySelector('.orders-list');

function renderUsers(data) {
	elList.innerHTML = '';
	data.forEach((item) => {
		const liElement = document.createElement('li');
		const wrapperElement = document.createElement('div');
		const titleElement = document.createElement('h2');
		const spanElement = document.createElement('span');
		const telElement = document.createElement('a');
		const btnElement = document.createElement('button');

		liElement.classList.add(
			'w-100',
			'shadow',
			'd-flex',
			'p-4',
			'mb-3',
			'align-items-center',
			'justify-content-between',
		);
		titleElement.classList.add('m-0');
		wrapperElement.classList.add('d-flex', 'flex-column', 'text-start');
		btnElement.classList.add('btn', 'shadow');
		spanElement.style.opacity = '0.5';

		titleElement.textContent = item.user_name;
		spanElement.textContent = item.register_date;
		telElement.textContent = item.user_phone;
		btnElement.textContent = '▶';
		btnElement.dataset.id = item.id;
		btnElement.addEventListener('click', () => {
			const filterUser = users.find(
				(item) => item.id == btnElement.dataset.id,
			);
			renderOrders(filterUser.user_orders);
		});
		telElement.setAttribute('href', `tel:${item.user_phone}`);

		wrapperElement.append(titleElement, spanElement, telElement);
		liElement.append(wrapperElement, btnElement);
		elList.append(liElement);
	});
}

renderUsers(users);

elSidebarTopList.addEventListener('click', (evt) => {
	if (evt.target.matches('.users-item')) {
		renderUsers(users);
	}
	if (evt.target.matches('.orders-item')) {
		const haveOrder = users.filter((item) => {
			return item.user_orders.length > 0;
		});
		renderUsers(haveOrder);
	}
});

function renderOrders(data) {
	console.log(data);
	elOrdersList.innerHTML = '';

	if (data.length) {
		data.forEach((order) => {
			const liElement = document.createElement('li');
			const productName = document.createElement('h6');
			const productPrice = document.createElement('p');
			const productCount = document.createElement('p');
			liElement.classList.add(
				'd-flex',
				'justify-content-between',
				'shadow',
				'align-items-center',
				'p-3',
			);
			productCount.textContent = `Count: ${order.product_count}`;
			productName.textContent = order.product_name;
			productPrice.textContent = `${order.product_price} so'm`;

			liElement.append(productName, productCount, productPrice);
			elOrdersList.append(liElement);
		});
	} else {
		const errorMessage = document.createElement('h2');
		errorMessage.textContent = 'Buyurtma topilmadi';
		elOrdersList.append(errorMessage);
	}
}
