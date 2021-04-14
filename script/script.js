'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
 income = 'freelance',
 addExpenses = prompt('Перечислите возможные расходы через запятую'),
 deposit = confirm('Есть ли у вас депозит в банке?'),
 mission = +prompt('Цель:', 99999.5),
 period = 3;




let start = function(){
money = +prompt('Ваш месячный доход?');

while (!isNumber(money)) {
  money = +prompt('Ваш месячный доход?');
   }
};

start();


let showTypeOf = function (data) {
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(income.length );

let expenses = [];

console.log(addExpenses.toLowerCase().split(','));

let getExpensesMonth = function () {
 let sum = 0;
 for (let i=0; i<2; i++){
  if(i===0){
    expenses[i] = prompt('Введите обязательную статью расходов', 'foods');
    sum+= +prompt('Во сколько это обойдётся?');
   }
 console.log(expenses);
 return sum;

   };
 };
getExpensesMonth();

 let expensesMonth = getExpensesMonth();
 console.log('Расходы за месяц '+ expensesMonth);

 let getAccumulatedMonth = function(){
   return money - expensesMonth;
 }
 let accumulatedMonth = getAccumulatedMonth();

 let getTargetMonth = function(){
  return Math.ceil(mission /accumulatedMonth );
 }

  period = getTargetMonth();


console.log('Цель будет достигнута через ' + period + ' месяцев');

let budgetDay = accumulatedMonth / 30;


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

