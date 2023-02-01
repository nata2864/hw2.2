let password = 'Света';
let check = prompt('Введите пароль');
if (check === password) {
    message = 'Пароль введен верно';
} else {
    message = 'Пароль введен неправильно';
} alert(message); // Задание 1



let c = 3;
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
} 
let c1 = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}// Задание 2 Проверила скрипт с с=10 , -3 , 2 -все работает



let d= 123;
let e=5;
if (d||e>100) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}// Задание 3



let a = '2';
a= Number (2);
let b = '3';
b= Number (3);
alert (a + b);// Задание 4



 let monthNumber = Number(prompt('Введите  номер месяца'));
switch (monthNumber) {
    case 1 && 2 && 12:
        console.log ('Зима');
        break;
    case 3 && 4 && 5:
        console.log ('Весна');
        break;
    case 6 && 7 && 8 :
        console.log ('Лето ');
        break;
    case 9 && 10 && 11:
        console.log ('Осень');
        break;
 
 default:
    console.log('Нужно название месяца');
 } // Задание 5
