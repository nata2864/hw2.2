let a=10;
alert(a);
let a1=20;
alert(a1); //Задание 1

const year= 2007;
alert(year); //Задание 2

const name='Эйх Брендан';
alert(name);//Задание 3

let b=10;
let c=2;
let plus=c+b;
alert(plus);
let minus=b-c;
alert(minus);
let times=c*b;
alert(times);
let devided=b/c;
alert(devided);//Задание 4

let d=2;
let e=5;
let result=d**e;
alert(result);//Задание 5

let a2=9;
let b2=2;
let end=a2 % b2;
alert(end);//Задание 6 остаток от деления

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);//Задание 7

let age=(prompt("Сколько Вам лет?"));
alert(age);//Задание 8

const user = {
	name: 'Игорь',
	age: 30,
	isAdmin: true,//Задание 9.0
    "city of recidence": 'Москва'//Задание 9.1
};
user.age=20;
delete user['city of recidence']//Задание 9.3
let info=prompt( "Какую информацию хотите узнать о пользователе?");
alert (user[info])//Задание 9.4

let userName=prompt("Как Вас зовут?");
alert (`Привет, ${userName}!`);//Задание 10
