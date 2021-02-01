// const money = document.querySelector('.money'), 
//       incom = document.querySelector('.incom'), 
//       addExpenses = document.querySelector('.add__expenses'), 
//       deposit = document.querySelector('.deposit'), 
//       mission = document.querySelector('.mission'), 
//       period = document.querySelector('.period');
// alert('Start first lesson'); 
// console.log('variabl JS');

// lesson02

let money = 123456;
console.log(typeof money);
let income = 'freelance';
console.log(typeof income);
let addExpenses = ('internet'+','+ 'taxi'+','+ 'communal pay');
console.log(addExpenses.length);
let deposit = true;
console.log(typeof deposit);
let mission = 100000;
let period = 7 ;
console.log('Период равен' + ' '+period +' '+ 'месяцев');
addExpenses.toLowerCase().split(',', Array);
console.log(addExpenses.toLowerCase().split(','));

let budgetDay;
    budgetDay = 1500;
    console.log('budgetDay'+' '+'='+' '+budgetDay);

'use strict';

let incom = prompt('Ваш месячный доход?');
console.log(incom);

let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов', 'foods');
console.log(expenses1)
let amount1 = prompt('Во сколько это обойдётся?');
console.log(amount1);
let expenses2 = prompt('Введите обязательную статью расходов');
console.log(expenses2)
let amount2 = prompt('Во сколько это обойдётся?');
console.log(amount2);

let budgetMonth = incom - amount1 - amount2;
console.log(budgetMonth);

let mission = prompt('Цель:', 99999.5);
console.log("Цель заработать" +" " + mission + " " + "рублей");
let period = Math.ceil(mission / budgetMonth );
console.log("Период равен"+" " + period +" " + "месяцев");

let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

if (budgetDay > 1200) {
  alert("У вас высокий уровень дохода");
} else {
 if (budgetDay > 600 && budgetDay <= 1200) {
   alert("У вас средний уровень дохода");
 } else {
  if (budgetDay >= 0 && budgetDay < 600) {
   alert("К сожалению у вас уровень дохода ниже среднего");
 } else {
   if (budgetDay < 0) {
  alert("Что то пошло не так");
}
 }
 } 
} 


