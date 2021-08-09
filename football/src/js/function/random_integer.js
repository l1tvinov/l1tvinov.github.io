// * Примимает минимальное и максимальное число, возвращает случайное целое число в этом диапазане
export default function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    let result = Math.floor(rand);
    return result;
}