<template>


  <div class="container">
    <div class="hystmodal__styled" style="max-width: 700px">
      <h2 class="titleSection">Заявка на карту</h2>
      <form
        action="###"
        id="appVue"
        class="form__body"
        @submit.prevent="checkForm"
      >
        <input type="hidden" name="project_name" value="Кредит банк" />
        <input type="hidden" name="admin_email" value="NEKTO.INC@yandex.ru" />

        <div
          class="form__item"
          v-for="(field, i) in info"
          v-bind:key="field.id"
        >
          <label class="form__label" >{{ field.name }} 
          <span class="form_icon" v-if="field.activated" :class="field.valid ? 'valid' : 'invalid'"></span>
          <input
            type="text"
            name="name"
            class="form__input"
           
            :value="field.value"
            @input="onInput($event.target.value, i)"
          />
         </label>
          <!-- <pre>{{ $v.name }}</pre> -->
          <!-- <div class="error" v-if="$v.name.$error">Введите имя</div> -->
        </div>

        <!-- <div class="form__item">
          <div class="select-wrap">Гражданство</div>
          <select name="nationality" class="select" v-model="nationality">
            <option
              v-for="nationality in nationalities"
              v-bind:key="nationality.id"
              :value="nationality.value"
            >
              {{ nationality.label }}
            </option>
          </select>
        </div> -->

        <div class="form__item">
          <div class="checkbox">
            <input
              id="formAgreement"
              type="checkbox"
              name="agreement"
              class="checkbox__input"
              v-model="agreement"
            />
            <label for="formAgreement" class="checkbox__label">
              <span
                >Я соглашаюсь на
                <a href="#" class="link link-form">обработку</a> моих
                персональных данных
              </span></label
            >
          </div>
        </div>

        <button
          type="submit"
          class="btn form__button"
          v-bind:disabled="!agreement"
        >
          Заказать сейчас
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    info: [
      {
        name: "Name",
        value: "",
        pattern: /^[a-zA-Z ]{2,30}$/,
      },
      {
        name: "Phone",
        value: "",
        pattern: /^[0-9]{7,14}$/,
      },
      {
        name: "Email",
        value: "",
        pattern: /.+/,
      }
   
    ],
    // nationalities: [
    //   {
    //     label: "Российская федерация",
    //     value: "Russia",
    //   },
    //   {
    //     label: "Белорусь",
    //     value: "Белорусь1",
    //   },
    //   {
    //     label: "Украина",
    //     value: "Ukraine",
    //   },
    //   {
    //     label: "Казахстан",
    //     value: "Казахстан1",
    //   },
    // ],
  }),
  computed: {
    // fieldsDone() {
    //   return; // [0, info.length]; this.info.reduce(field)
    // },
    formReady() {
      return this.fieldsDone === this.info.length;
    },
    
  },
  methods: {
    onInput(value, i) {
      let field = this.info[i];
      field.value = value.trim();
      field.activated = true;
      field.valid = field.pattern.test(field.value);
    },
  },
  created() {
    return this.info.forEach((field) => {
      (field.activated = false), // hw field.value != ''
        (field.valid = false); // hw f.p.t(f.v)
    });
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}

.hystmodal {
  &__wrap {
    background-color: #0e0e0e6e;
  }

  &__window {
    background-color: black;
    padding: 35px;
    width: 750px;
  }
}

.valid:after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: -30px;
  z-index: 1;
  border-right: solid #89cc1b;
  border-top: solid #89cc1b;
  width: 19px;
  height: 12px;
  transform: rotate(130deg);
}

.valid-thanks:after {
  top: 10px;
  right: 50%;
}

.invalid:before,
.invalid:after {
  content: "";
  position: absolute;
  width: 24px;
  height: 4px;
  top: 45%;
  right: -35px;
  background: rgb(112, 9, 9);
}
.invalid:before {
  transform: rotate(45deg);
}
.invalid:after {
  transform: rotate(-45deg);
}

.form {
  &__item {
    margin-bottom: 20px;
    margin-right: 35px;
    position: relative;
  }

  &__label {
    top: 32px;
    left: 30px;
    transition: 0.3s;
    font-size: 20px;
  }

  &__input {
    height: 80px;
    width: 100%;
    padding: 0 30px;
    background-color: #191919;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    outline: none;

    &:focus {
      background-color: #333;
    }
    &:focus + label {
      font-size: 12px;
      top: 0;
    }
    &:focus::placeholder {
      font-size: 12px;
      transform: translateY(-100%);
      transition: 0.3s;
    }
    &.invalid{
      border: 1px solid red;
    }
  }

  &__button:disabled {
    background-color: #191919;
    cursor: default;
    color: #6c6c6c;
  }
}
.form__input:focus + .form__label {
  font-size: 12px;
  top: 0;
}
.select-wrap {
  margin-bottom: 10px;
  width: 100%;

  &:after {
    content: "";
    display: block;
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 20px;
    z-index: 1;
    border-right: solid #bbbbbb;
    border-top: solid #bbbbbb;
    width: 15px;
    height: 15px;
    transform: rotate(130deg);
  }
}
.select {
  line-height: 80px;
  height: 80px;
  width: 100%;
  padding: 0 30px;
  background-color: #191919;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;

  &:focus {
    background-color: #333;
  }
}
.checkbox {
  &__input {
    display: none;

    &:checked + .checkbox__label::after {
      opacity: 1;
    }
  }

  &__label {
    display: inline-flex;
    align-items: center;
    position: relative;
    width: 100%;

    &::before {
      content: "";
      align-self: flex-start;
      flex: 0 0 39px;
      height: 39px;
      border-radius: 10px;
      cursor: pointer;
      background-color: #333;
      transition: all 0.3s ease;
      margin-right: 20px;
    }
    &::after {
      content: "";
      display: block;
      cursor: pointer;
      position: absolute;
      top: 10px;
      left: 9px;
      border-right: solid #fff;
      border-top: solid #fff;
      width: 19px;
      height: 12px;
      transform: rotate(130deg);
      opacity: 0;
      transition: 0.3s;
    }
  }
}

input:-webkit-autofill {
  font-size: 20px;
  transition: background-color 500s ease-in-out 0s;
}

.error {
  padding: 10px 30px;
  color: #cc301b;
  font-weight: 500;
  font-size: 12px;
  line-height: 115%;
}

.link-form {
  color: #fff;
  border: none;
  transition: 0.3s;
  &:hover {
    color: #f90;
  }
}

.form__label .form__input{
  border: 1px solid #f90;
}


.checkbox__input:checked + .checkbox__label::after {
    opacity: 1;
}
</style>
