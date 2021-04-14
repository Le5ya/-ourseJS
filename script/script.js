<<<<<<< HEAD
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

// let period = Math.ceil(mission / budgetMonth );


let start = function(){
money = +prompt('Ваш месячный доход?');

while (!isNumber(money)) {
	money = +prompt('Ваш месячный доход?');
   }
};

start();
=======


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
>>>>>>> 6449faeb1c1657934aaff2886e62b42e4b03761b


let showTypeOf = function (data) {
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(income.length );

<<<<<<< HEAD
let expenses = [];

console.log(addExpenses.toLowerCase().split(','));

// let exp = [];
// exp += addExpenses;
// console.log(exp);

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

 let getBudgetMonth = function(){
   return money - expensesMonth;
 }
 let budgetMonth = getBudgetMonth();

let getTargetMonth = function(targetMonth){
 targetMonth =  mission / budgetMonth;
 return targetMonth;
}
getTargetMonth();

console.log('Цель будет достигнута через ' + getTargetMonth());

let budgetDay = budgetMonth / 30;


let getStatusIncome = function () {
	
=======
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
>>>>>>> 6449faeb1c1657934aaff2886e62b42e4b03761b
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
<<<<<<< HEAD

=======
 
 
>>>>>>> 6449faeb1c1657934aaff2886e62b42e4b03761b

