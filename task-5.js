'use string';

let feedbackFromUser = prompt('Укажите страну страну для дставки');
let country;
let price;

feedbackFromUser = feedbackFromUser.toLocaleLowerCase();

switch (feedbackFromUser) {
    case 'китай' :
        price = 100;
        country = 'Китай';
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
        
    case 'чили' :
        price = 250;
        country = 'Чили';
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'австралия' :
        price = 170;
        country = 'Австралия';
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
        
    case 'индия' :
        price = 80;
        country = 'Индия';
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;    

    case 'ямайка' :
        price = 120;
        country = 'Ямайка';
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
        break; 
    
     default:
         alert ('В вашей стране доставка не доступна');
}