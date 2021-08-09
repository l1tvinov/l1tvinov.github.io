export default class Stadium {
    constructor(options) {
        this.name = options.name
        this.capacity = options.capacity
        this.team_1 = options.team_1
        this.team_2 = options.team_2
        this.fanat = randomInteger(0, this.capacity)
        this.people = this.fanat + 11 * 2 + 1;
        // this.render();
    }

    render() {
        document.querySelector('.renderStadium').innerHTML = `
      <ul>
        <li>Название стадиона: ${this.name}</li>
        <li>Вместимость болелщиков: ${this.capacity} человек</li>
        <li>Болелщиков пришло сегодня: ${this.fanat} человек</li>
        <li>Команды: ${this.team_1}, ${this.team_2}</li>
        <li>Всего людей: ${this.people} из них 22 игрока и 1 судья</li>
      </ul>`
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    let result = Math.floor(rand);
    return result;
}