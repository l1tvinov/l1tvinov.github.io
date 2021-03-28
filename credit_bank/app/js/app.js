
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
require('~/app/libs/hystModal/dist/hystmodal.min.js')


// require('~/app/libs/vue.js')
// import Vue from 'vue';
import Vuelidate from "vuelidate";
// import App from "../App.vue";

Vue.use(Vuelidate);

new Vue({
  render: h => h(App)
}).$mount("#app");

import {
	validationMixin
} from 'vuelidate'
import {
	required,
	minLength,
	email
} from 'vuelidate/lib/validators'


document.addEventListener('DOMContentLoaded', () => {


let app = new Vue({
	el: '#appVue',
	data: {
		name: '',
		email: '',
		tel: null,
		agreement: false,
		nationality: 'Russia',
		classValid: 'valid',
		nationalities: [{
				label: 'Российская федерация',
				value: 'Russia'
			},
			{
				label: 'Белорусь',
				value: 'Белорусь'
			},
			{
				label: 'Украина',
				value: 'Ukraine'
			},
			{
				label: 'Казахстан',
				value: 'Казахстан'
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
				email
			}
		
	},
	methods: {
		checkForm() {

			consol.log('норм');
		},

	}
});

let burger = document.querySelector('.header__burger')
let menuWrap = document.querySelector('.header__menu-wrap')
burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menuWrap.classList.toggle('active');
});
// menuWrap.addEventListener('click', function(){
// 	menuWrap.classList.remove('active');
// 	burger.classList.remove('active');
// });

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

})
