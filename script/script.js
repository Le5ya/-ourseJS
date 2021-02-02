

'use strict';

let money = +prompt('Ваш месячный доход?', 50000);
let income = 'freelance';
let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов', 'foods');
let amount1 = +prompt('Во сколько это обойдётся?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдётся?');
let accumulatedMonth = getAccumulatedMonth();
let mission = +prompt('Цель:', 99999.5);
let period = Math.ceil(mission / accumulatedMonth );
let budgetDay = accumulatedMonth / 30;


let showTypeOf = function (data) {
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(income.length );

let exp = [];
exp += addExpenses;
console.log(exp);

let getExpensesMonth = function (amount) {
  amount = (amount1 + amount2);
  return amount; 
}
console.log(getExpensesMonth());

function getAccumulatedMonth(acc) {
  acc = money - amount1 - amount2;
  return acc;
}
console.log(getAccumulatedMonth());



let getTargetMonth = function(targetMonth){
targetMonth =  mission / accumulatedMonth;
 return targetMonth;
}
getTargetMonth();
console.log(getTargetMonth());


let getStatusIncome = function () {
 if (budgetDay > 1200) {
  return ("У вас высокий уровень дохода");
} else if (budgetDay > 600 && budgetDay <= 1200) {
   return ("У вас средний уровень дохода");
 } else if (budgetDay >= 0 && budgetDay < 600) {
   return ("К сожалению у вас уровень дохода ниже среднего");
 } else if (budgetDay < 0) {
    return ("Что то пошло не так");
       }
     };
   console.log(getStatusIncome()); 
 
 

