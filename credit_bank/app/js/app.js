// // Import vendor jQuery plugin example (not module)

require('~/app/libs/hystModal/dist/hystmodal.min.js')


// require('~/app/libs/vue.js')
// import Vue from 'vue';
// import Vuelidate from "vuelidate";
// import App from "../App.vue";

// Vue.use(Vuelidate);

// new Vue({
//   render: h => h(App)
// }).$mount("#appVue");

// import {
// 	validationMixin
// } from 'vuelidate'
// import {
// 	required,
// 	minLength,
// 	email
// } from 'vuelidate/lib/validators'


import {
	validationMixin
} from "vuelidate";
import {
	required,
	minLength,
	email
} from "vuelidate/lib/validators";

document.addEventListener('DOMContentLoaded', () => {


	new Vue({

		mixins: [validationMixin],
		el: '#appVue',
		data: {
			name: "",
			email: "",
			tel: "",
			agreement: false,
			nationality: "Russia",
			classValid: "valid",
			nationalities: [{
					label: "Российская федерация",
					value: "Russia",
				},
				{
					label: "Белорусь",
					value: "Белорусь1",
				},
				{
					label: "Украина",
					value: "Ukraine",
				},
				{
					label: "Казахстан",
					value: "Казахстан1",
				},
			],
		},

		validations: {
			name: {
				required,
				minLength: minLength(2),
			},
			email: {
				required,
				email,
			},
			tel: {
				minLength: minLength(4),
			},
		},
		methods: {
			checkForm() {
				if (this.$v.$invalid) {
					this.$v.$touch();
					return;
				}
			},
		},
	});

	// const ajaxSend = async (formData) => {
	// 	const fetchResp = await fetch('mail.php', {
	// 		method: 'POST',
	// 		body: formData
	// 	});
	// 	if (!fetchResp.ok) {
	// 		throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
	// 	}
	// 	return await fetchResp.text();
	// };

	// const forms = document.querySelectorAll('form');
	// forms.forEach(form => {
	// 	form.addEventListener('submit', function (e) {
	// 		e.preventDefault();
	// 		const formData = new FormData(this);

	// 		ajaxSend(formData)
	// 			.then((response) => {
	// 				console.log(response);
	// 				form.reset(); // очищаем поля формы 
	// 			})
	// 			.catch((err) => console.error(err))
	// 	});
	// });


	let burger = document.querySelector('.header__burger')
	let menuWrap = document.querySelector('.header__menu-wrap')
	burger.addEventListener('click', function () {
		burger.classList.toggle('active');
		menuWrap.classList.toggle('active');
	});
	menuWrap.addEventListener('click', function () {
		menuWrap.classList.remove('active');
		burger.classList.remove('active');
	});

	let tabs = document.querySelector('.tabs')
	let btns = tabs.querySelectorAll('.tabs__btn')
	let items = tabs.querySelectorAll('.tabs__item')

	function change(arr, i) {
		arr.forEach(item => {
			item.forEach(i => {
				i.classList.remove('active')
			})
			item[i].classList.add('active')
		})
	}

	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', () => {
			change([btns, items], i)
		})
	}

	const myModal = new HystModal({
		linkAttributeName: "data-hystmodal",
		waitTransitions: true,

	});

	let animation = document.querySelectorAll('.animation');

	function animOnScroll() {
		for (let index = 0; index < animation.length; index++) {
			const animItem = animation[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;

			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('showAnim');
			}
			// else{animItem.classList.remove('showAnim');}
		}
	}


	function offset(el) {
		const rect = el.getBoundingClientRect();
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}

	if (animation.length > 0) {
		window.addEventListener('scroll', animOnScroll);
	}

	setTimeout(() => {
		animOnScroll();
	}, 500);

})