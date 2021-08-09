// // Import vendor jQuery plugin example (not module)

require('../libs/hystModal/dist/hystmodal.min.js');

// import "core-js/stable";
import "regenerator-runtime/runtime";
// require('~/app/libs/vue.js')
// import Vue from 'vue';
// import App from "../App.vue";


// new Vue({
//   render: h => h(App)
// }).$mount("#appVue");

// import './modules/forms';
import './modules/tabs';
import './modules/animation';
// import Inputmask from "inputmask";
// import {IMaskComponent} from 'vue-imask';
import IMask from 'imask';


import {
    validationMixin
} from "vuelidate";
import {
    required,
    minLength,
    email,
    numeric
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
                required,
                // minLength: minLength(16),
            },
        },

        methods: {
            checkForm() {
                this.$v.$touch()
                if (!this.$v.$error) {
                    console.log('Валидация успешно');
                    formsSend();
                    myModal.open('#thanks');

                } else {
                    console.log('ошибка валидации');

                }
            }

        },
    });


    // var selector = document.querySelectorAll("input[type='tel']");
    // var im = new Inputmask("+7 (999) 999-99-99");
    // im.mask(selector);

    var element = document.getElementById('formTel')
    var maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: false
    }
    var mask = new IMask(element, maskOptions);



    const formsSend = () => {
        const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input');


        const message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };

        const postData = async(url, data) => {
            document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });

            return await res.text();
        };


        const clearInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
        };
        form.forEach(item => {
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('../mail.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    };


    let burger = document.querySelector('.header__burger')
    let menuWrap = document.querySelector('.header__menu-wrap')
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        menuWrap.classList.toggle('active');
    });
    menuWrap.addEventListener('click', function() {
        menuWrap.classList.remove('active');
        burger.classList.remove('active');
    });


    const myModal = new HystModal({
        linkAttributeName: "data-hystmodal",
        waitTransitions: true,

    });



})