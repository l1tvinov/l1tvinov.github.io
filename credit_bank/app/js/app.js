// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
require('~/app/libs/hystModal/dist/hystmodal.min.js')

// import Vue from 'vue';


document.addEventListener('DOMContentLoaded', () => {

	let app = new Vue({
		el: '#appVue',
		data: {
			errors: [],
			name: null,
			email: null,
			tel: null,
			nationality: null,
			classValid: '',
			
		},
		methods: {
			checkForm: function (e) {
			
				this.errors = [];
	
				if (!this.name) {
					this.errors.push('Требуется указать имя.');
					this.classValid = 'invalid';
				}
				if (!this.email) {
					this.errors.push('Требуется указать электронную почту.');
				}
				else if (!this.validEmail(this.email)) {
					this.errors.push('Укажите корректный адрес электронной почты.');
				}

				if (!this.errors.length) {
					// this.classValid = 'valid';
					return true;
					
				}
	
				e.preventDefault();
			},
			validEmail: function (email) {
				var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				// this.classValid = 'valid';
				return re.test(email);
			}
		}
	});

let tabs = document.querySelector('.tabs')
let btns = tabs.querySelectorAll('.tabs__btn')
let items = tabs.querySelectorAll('.tabs__item')

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('active')})
		item[i].classList.add('active')
	})
}

for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		change([btns, items], i)
	})
}

const myModal = new HystModal({
	linkAttributeName: "data-hystmodal",
	waitTransitions: true,
	
});

})
