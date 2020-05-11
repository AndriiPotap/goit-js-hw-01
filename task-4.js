'use string';

const credits = 23580;
const pricePerDroid = 3000;

let message;
let totalPrice;
let totalAmount;

const amountOfDroid = prompt ('Сколько ремонтных дроидов Вы желаете купить?');

if (amountOfDroid === null) {
    message = 'Отменено пользователем!';
    alert (message);
} else if (pricePerDroid * amountOfDroid > credits) {
    message = 'Недостаточно средств на счету!';
    alert(message);
} else {
    totalPrice = amountOfDroid * pricePerDroid;
    totalAmount = credits - totalPrice;
    alert(`Вы купили ${amountOfDroid} дроидов, на счету осталось ${totalAmount} кредитов.`)
};