'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const passwors = prompt ('Введите пожалуйста Ваш пароль');

if (passwors === null) {
    message = 'Отменено пользователем!';
    alert(message);
    
} else if (passwors === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);

} else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
};