import randomInteger from './function/random_integer.js';
import writeFile from './function/write_file';

import Stadium from './class/Stadium';
import People from './class/People.js';

// * иницилизируем стадион
const Mettalurg = new Stadium({
    capacity: 20,
    name: "Метталург",
    team_1: "ЦСК",
    team_2: "Зенит"
});

Mettalurg.render(); // * рендерим стадион в браузере

//* Класс фанатов, наледуется от людей
class Fanat extends People {
    constructor(options) {
        super(options)
    }
}


class Player extends People {
    constructor(options) {
        super(options)
    }

    pass() {

        isMatch += `<span>${this.surname} (${this.type})  дал пас</span>`;
    }
    goal() {
        let str = `<span> ${this.surname} (${this.type}) ударил по воротам: `;


        if (randomInteger(0, 1) == 1) {
            str += "<span>ГООООООЛ!!!!</span>";
            isMatch += str;
            return true;
        } else {
            str += "<span>МИМО</span>";
            isMatch += str;
            return false;
        }
    }

    activPlayer() {
        let PlayerEvent = randomInteger(0, 1);
        switch (PlayerEvent) {
            case 0:
                {
                    this.pass();
                    return false;
                }
            case 1:
                {
                    let result = this.goal();
                    return result;
                }

        }
    }

}
class Referee extends People {
    constructor(options) {
        super(options)
    }

    activReferer() {
        let PeopleEvent = randomInteger(0, 3);
        switch (PeopleEvent) {
            case 0:
                {
                    this.stopMatch();
                    return false;
                }
            case 1:
                {
                    this.showRedCard();
                    return true;
                }
            case 2:
                {
                    this.showYellowCard();
                    return true;
                }
            case 3:
                {
                    this.penalty();
                    return true;
                }
        }
    }
    startMatch() {
        isMatch += "<span>Матч начался</span>";
    }
    stopMatch() {
        isMatch += "<span>Стоп матч</span>";
    }
    showRedCard() {
        isMatch += "<span>показать красную карточку </span>";
    }
    showYellowCard() {
        isMatch += "<span>показать желтую карточку </span>";
    }
    penalty() {
        isMatch += "<span>назначить штрафной</span>";
    }
}

// * Создает людей
function initialPeople() {
    for (let i = 0; i < Mettalurg.people; i++) {
        let randomName = randomInteger(0, names.length - 1);
        let randomSurname = randomInteger(0, surnames.length - 1);
        let currentPeople;
        let options = {
                gender: "мужчина",
                age: randomInteger(18, 45),
                name: names[randomName],
                surname: surnames[randomSurname],
                patronymic: patronymics[randomSurname]
            }
            // * Первый создается судья 
        if (i == 0) {
            options.type = "Судья";
            currentPeople = new Referee(options);
            // * игроки 1 команды 
        } else if (i < 12) {
            options.type = `игрок ${Mettalurg.team_1}`;
            currentPeople = new Player(options);
            // * игроки 2 команды 
        } else if (i > 11 && i < 23) {
            options.type = `игрок ${Mettalurg.team_2}`;
            currentPeople = new Player(options);
            // * все остальные болельщики 
        } else {
            options.type = "Фанат";
            currentPeople = new Fanat(options);
        }


        AllPeople[i] = currentPeople;
    }
}

// * массивы имен и фамилий
const names = ['Иван', "Павел", "Николай", "Димитрий", "Василий", "Александр"];
const surnames = ['Иванов', "Петров", "Зибров", "Раков", "Лисов", "Птичкин", "Воробьев"];
const patronymics = ['Иванович', "Петрович", "Валерьевич", "Александрович", "Евгенич", "Романович", "Борисович"];
let countGoal_1 = 0;
let countGoal_2 = 0;
let isMatch = '';



let AllPeople = []; // * общий массив всех людей
initialPeople();

// * запуск матча 
document.querySelector('.showLog').addEventListener('click', function(e) {
    document.querySelector('.log').innerHTML = isMatch;
    e.target.disabled = true;
    window.scrollTo({
        top: e.target.offsetTop + 20,
        behavior: 'smooth'
    });
    // ! эту функцию надо переделать
    // writeFile("matchlog.txt", isMatch);
})




let curentTime = 1; // * счетчик времени
AllPeople[0].startMatch(); // * судья запускает матч
let isGeme = true; // * флаг игры

// * цикл событий на матче
while (isGeme) {
    isMatch += `<hr> С начала матча прошло : ${curentTime} сек. Действие: `;

    let activePeople = randomInteger(0, 22); // * выбираем случайного игрока или судью 

    //* действия судьи
    if (activePeople == 0) {
        isGeme = AllPeople[activePeople].activReferer();
    }
    // * действия игроков
    else {
        let isGoal = AllPeople[activePeople].activPlayer();
        // * считаем количество голлов 
        if (isGoal) {
            if (activePeople < 12) {
                countGoal_1++;
            } else {
                countGoal_2++;
            }
        }
    }

    curentTime++;
}

isMatch += `<p><b>СЧЕТ ${Mettalurg.team_1} : ${Mettalurg.team_2} | ${countGoal_1} : ${countGoal_2}</b></p>`;