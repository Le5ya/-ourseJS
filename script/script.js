let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// 'use strict';
let money;
let income = 'freelance';
let addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');

  //  let accumulatedMonth = getAccumulatedMonth();
   let mission = +prompt('Цель:', 99999.5);
   let period = 5;
   let budgetDay = 1000;

let start = function () {
  do {
   money  = prompt('Ваш месячный доход?'); 
  }
  while (!isNumber(money));
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
  for(let i = 0; i < 4; i++) {
    expenses[i]= prompt('Введите обязательную статью расходов', 'foods');
    sum += +prompt('Во сколько это обойдётся?');

      while (!isNumber(sum)) {
    money = prompt('Во сколько это обойдётся?');
    }
  };
 
  console.log(expenses);
  return sum; 
};


let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);



let accumulatedMonth = function () {
  return money - expensesAmount;
};
 console.log(accumulatedMonth());


let targetMonth = function() { 
 period = Math.ceil(mission / accumulatedMonth());
 return period;
};
console.log(targetMonth());


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

   let getTerm = function name(params) {
     if (period >= 0) {
       return ("Цель будет достигнута через "+ period +' '+"месяцев");
     } else {
       return ("Цель не будет достигнута");
     }
     
   };
   console.log(getTerm());
 
 

