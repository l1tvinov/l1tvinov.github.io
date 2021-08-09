//* Создаем общий класс для всех людей
export default class People {
    constructor(options) {
        this.gender = options.gender
        this.age = options.age
        this.name = options.name
        this.surname = options.surname
        this.patronymic = options.patronymic
        this.type = options.type
        this.render()
    }
    render() {
        document.querySelector('.renderPeople').innerHTML += `
      <ul>
        <li>Статус: ${this.type}</li>
        <li>Пол: ${this.gender}</li>
        <li>Возраст: ${this.age}</li>
        <li>Фамилия: ${this.surname}</li>
        <li>Имя: ${this.name}</li>
        <li>Отчество: ${this.patronymic}</li>
        
      </ul>`
    }
}