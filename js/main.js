const elList = document.querySelector('.list');
const user_id = localStorage.getItem('user_id');
const users = JSON.parse(localStorage.getItem('users'));
const badgeElement = document.querySelector('.badge-element');
const modalList = document.querySelector('.modal-list');

if (!user_id) {
	window.location.href = '/register.html';
}

const products = [
	{
		id: 1,
		product_image:
			'https://api.choparpizza.uz/storage/products/2023/07/31/GFEUGsUkKcjn7sJXPUVQte4qAHaIWUKPcHc5ApDP.webp',
		product_name: 'QUVVAT',
		product_recipe:
			"Maxsus tomatli sous, Motsarella pishlog'i, toy go'shti, limon, zaytun",
		product_price: '88000',
		product_count: 1,
	},
	{
		id: 2,
		product_image:
			'https://api.choparpizza.uz/storage/products/2023/07/31/USDB5Am9E5Ca0pRzGMn5FsG2MeLwF04Lnr5nIJlz.webp',
		product_name: 'OVCHI',
		product_recipe:
			"Maxsus tomatli sous, Motsarella pishlog'i, Ovchi kolbasalari, shampinyon qo'ziqorinlari, qizil va yashil bulg'or qalampiri, pomidor bo'lakchalari",
		product_price: '72000',
		product_count: 1,
	},
	{
		id: 3,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/sBn4pIcnjbvtPRq93tpN9gcyQHsKpleHMMF1lnm4.webp',
		product_name: 'IKKI KARRA PEPPERONI',
		product_recipe:
			"Maxsus pomidor sousi, mozzarella pishloq, undan ham ko'proq dudlangan kolbasa",
		product_price: '72000',
		product_count: 1,
	},
	{
		id: 4,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/06/27/IG4VTMiYdhGr0aDj2TuOouyR2jykDJwJZ4W6woJm.webp',
		product_name: 'CHOPAR SPECIAL',
		product_recipe:
			' Ikki qavatli pitsa 35 sm Maxsus tomatli sous, Motsarella pishlog‘i, dudlangan mol go‘shti, mol go‘shti qiymasi, pomidor',
		product_price: '109000',
		product_count: 1,
	},
	{
		id: 5,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/QgRwO12RvWLMqJ2CrjxJBc23IHOE4rNyAOh0OPX9.webp',
		product_name: 'JULYEN',
		product_recipe:
			"Maxsus oq sous, Mozzarella pishloq, tovuq filesi, shampinyon qo'ziqorinlari, ukrop",
		product_price: '70000',
		product_count: 1,
	},
	{
		id: 6,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/4Ovju00tCZYf9yFvO4dZ6W1evHZRUwqXKQXuUqAk.webp',
		product_name: 'PISHLOQLI',
		product_recipe: 'Maxsus pomidor sousi, mozzarella pishloq',
		product_price: '60000',
		product_count: 1,
	},
	{
		id: 7,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/syuYiGANr8pVOvfPtD07APz02bb6PRz298fm0KZf.webp',
		product_name: 'ROSTBIF',
		product_recipe:
			"Maxsus pomidor sousi, mozzarella pishloqi, mol go'shti, quritilgan pomidor, rukkola, qizil piyoz",
		product_price: '80000',
		product_count: 1,
	},
	{
		id: 8,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/dXbMedBpXqHZxCOOlQl58wp5R1zPA1X11YH74sTw.webp',
		product_name: 'Bayram',
		product_recipe:
			"Maxsus pomidor sousi, mozzarella pishloqi, go'sht aralashmasi( mol go'shti, qo'zichoq), qizil piyoz, zaytun, rayhon.",
		product_price: '94000',
		product_count: 1,
	},
	{
		id: 9,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/2GRLwqqQb0h1YslPViBqoZLOl7SxroY0PLoxHJCn.webp',
		product_name: 'Barbekyu',
		product_recipe:
			"Maxsus pomidor sousi, mozzarella pishloq, mol go'shti kotleti, pomidor, qizil piyoz, tuzlangan bodring",
		product_price: '76000',
		product_count: 1,
	},
	{
		id: 10,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/fIyDBwVdiETji98csIkVA8lrWIrrKSYvhwXgblx9.webp',
		product_name: 'TOVUQLI',
		product_recipe:
			' Maxsus tomatli sous, mozzarella pishloq, tovuq filesi, shampinyon, pomidor, barbekyu sousi',
		product_price: '70000',
		product_count: 1,
	},
	{
		id: 11,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/WSF1XWOigK0U8mDmDoscfffNi7QLlGaYa4uL89HQ.webp',
		product_name: 'QO‘ZIQORINLI',
		product_recipe:
			"Maxsus pomidor sousi, Mozzarella pishloqi, shampinyon qo'ziqorinlari, maydalangan qora qalampir",
		product_price: '70000',
		product_count: 1,
	},
	{
		id: 12,
		product_image:
			'https://api.choparpizza.uz/storage/products/2022/03/03/OtNBcIQZPzRggQgkXi28R0BpXs8Ce1HDpth3NfhT.webp',
		product_name: 'GAVAYI',
		product_recipe:
			'Maxsus oq sous, Mozzarella pishloq, tovuq filesi, dudlangan kurka, qora zaytun, konservalangan ananas',
		product_price: '70000',
		product_count: 1,
	},
];

const orders = JSON.parse(localStorage.getItem('orders') || '[]');
localStorage.setItem('orders', JSON.stringify(orders));
renderOrders(orders);

function seperateUsers(data) {
	const filterOrders = data.filter((item) => item.user_id == user_id);
	const userOrderArr = [];
	filterOrders.forEach((item) => userOrderArr.push(item?.orders));

	return userOrderArr;
}

function renderProduct(data) {
	elList.innerHTML = '';
	for (let item of data) {
		const liElement = document.createElement('li');
		const imgElement = document.createElement('img');
		const wrapperElement = document.createElement('div');
		const titleElement = document.createElement('h3');
		const descElement = document.createElement('p');
		const priceElement = document.createElement('p');
		const bookmarkBtn = document.createElement('button');

		liElement.classList.add('card', 'list-item');
		imgElement.classList.add('card-img-top');
		imgElement.setAttribute('src', item.product_image);
		imgElement.width = 150;
		imgElement.height = 250;
		imgElement.setAttribute('alt', item.product_name);
		wrapperElement.classList.add('card-body');
		titleElement.classList.add('card-title');
		descElement.classList.add('card-text', 'list-summary');
		priceElement.classList.add('card-text', 'text-danger');
		bookmarkBtn.classList.add('btn', 'btn-success', 'order-btn');

		titleElement.textContent = item.product_name;
		descElement.textContent = item.product_recipe;
		priceElement.textContent = `${item.product_price} so'm`;
		bookmarkBtn.dataset.id = item.id;
		bookmarkBtn.textContent = "Savatga qo'shish";

		wrapperElement.append(
			titleElement,
			descElement,
			priceElement,
			bookmarkBtn,
		);
		liElement.append(imgElement, wrapperElement);
		elList.appendChild(liElement);
	}
}
renderProduct(products);

function addPlus(id) {
	const foundedOrder = seperateUsers(orders);
	const singleOrder = foundedOrder.find((item) => item.id == id);
	++singleOrder.product_count;
	renderOrders(orders);
	localStorage.setItem('orders', JSON.stringify(orders));
}

function addMinus(id) {
	const foundedOrder = seperateUsers(orders);
	const singleOrder = foundedOrder.find((item) => item.id == id);
	if (singleOrder.product_count > 1) {
		--singleOrder.product_count;
	} else {
		alert("Buyurtma soni kamida 1ta bo'lishi kk");
	}
	renderOrders(orders);
	localStorage.setItem('orders', JSON.stringify(orders));
}

elList.addEventListener('click', (evt) => {
	if (evt.target.matches('.order-btn')) {
		const btnId = evt.target.dataset.id;
		const findedProduct = products.find((item) => item.id == btnId);

		const checkOrder = orders.find((item) => item.id == btnId);
		if (!checkOrder) {
			const new_order = {
				user_id: user_id,
				orders: findedProduct,
			};
			orders.push(new_order);
			localStorage.setItem('orders', JSON.stringify(orders));
		}
		badgeElement.textContent = orders.length;
		renderOrders(orders);
	}
});

modalList.addEventListener('click', (evt) => {
	if (evt.target.matches('.plus-btn')) {
		addPlus(evt.target.dataset.id);
	}
	if (evt.target.matches('.minus-btn')) {
		addMinus(evt.target.dataset.id);
	}

	if (evt.target.matches('.delete-order')) {
		const btnId = evt.target.dataset.id;
		const findDeleteOrder = orders.findIndex((item) => item.id == btnId);
		orders.splice(findDeleteOrder, 1);
		renderOrders(orders);
		localStorage.setItem('orders', JSON.stringify(orders));
	}
});

function renderOrders(data) {
	modalList.innerHTML = '';

	const foundedOrder = seperateUsers(data);
	if (foundedOrder.length) {
		badgeElement.style.display = 'block';
		badgeElement.textContent = foundedOrder.length;
	} else {
		badgeElement.style.display = 'none';
	}

	console.log(data);

	for (let order of foundedOrder) {
		const liElement = document.createElement('li');
		const productName = document.createElement('h6');
		const productPrice = document.createElement('p');
		const countWrapper = document.createElement('div');
		const countPlus = document.createElement('button');
		const countMinus = document.createElement('button');
		const countElement = document.createElement('span');
		const deleteOrder = document.createElement('button');
		const totalElement = document.createElement('p');
		// totalElement.textContent = totalCount;
		deleteOrder.dataset.id = order.id;
		deleteOrder.classList.add('btn', 'btn-close', 'delete-order');

		liElement.classList.add(
			'd-flex',
			'justify-content-between',
			'shadow',
			'align-items-center',
			'p-3',
		);
		const price = +order.product_price;
		const count = order.product_count;
		const totalPrice = price * count;

		// console.log(price, count);
		productName.textContent = order.product_name;
		productPrice.textContent = `${totalPrice} so'm`;
		countPlus.textContent = '+';
		countMinus.textContent = '-';
		countPlus.classList.add('btn', 'plus-btn');
		countMinus.classList.add('btn', 'minus-btn');
		countPlus.dataset.id = order.id;
		countMinus.dataset.id = order.id;

		countElement.textContent = order.product_count;

		countWrapper.classList.add('d-flex', 'align-items-center', 'shadow');

		countWrapper.append(countMinus, countElement, countPlus);

		liElement.append(productName, productPrice, countWrapper, deleteOrder);
		modalList.append(liElement);
	}
}

const elFinishOrder = document.querySelector('.finish-order');

elFinishOrder.addEventListener('click', () => {
	const smth = seperateUsers(orders);
	const myUser = users.find((item) => item.id == user_id);
	myUser.user_orders = smth;
	localStorage.setItem('users', JSON.stringify(users));
	alert('Buyurtmangiz qabul qilindi.');
});
