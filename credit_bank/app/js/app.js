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

import './modules/forms';
import './modules/tabs';
import './modules/animation';

import {
	validationMixin
} from "vuelidate";
import {
	required,
	minLength,
	email
} from "vuelidate/lib/validators";


document.addEventListener('DOMContentLoaded', () => {
"use strict";

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
				this.$v.$touch()
				if(!this.$v.$error){
					console.log('Валидация успешно');
				
				}else{
					console.log('ошибка валидации');
				
				}
			}
		
		},
	});

	// formsSend();


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


	const myModal = new HystModal({
		linkAttributeName: "data-hystmodal",
		waitTransitions: true,

	});



})