'use strict';
 let money,
    start = function() {
      do {
      money  = prompt('Ваш месячный доход?', 50000); 
      }
      while (isNaN(money) || money === '' || money === null)
    };
    start();

let appData = {
  budget: money,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  monthTarget:0,
  asking: function(){
    appData.addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
    appData.addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
  },
        getExpensesMonth: function () {
          let sum = 0, question;
          for(let i = 0; i < 2; i++) { 
              if(i===0) {
                expenses1 = prompt('Введите обязательную статью расходов', 'foods');   
              } else {
                expenses2 = prompt('Введите обязательную статью расходов', 'clothes');
              }
                 do{
                  question = prompt('Во сколько это обойдётся?', 2500);
                }
            while (isNaN(question) || question === '' || question === null); {
           sum += +question;
             }
            return sum;
          }
        
        },
        getAccumulatedMonth: function () {
           return money - appData.getExpensesMonth();
         },
        getTargetMonth: function() { 
        appData.monthTarget = appData.mission / appData.getAccumulatedMonth();
        return appData.monthTarget;
        },
         getStatusIncome: function () {
          if (budgetDay > 1200) {
            return ("У вас высокий уровень дохода");
          } else if (budgetDay > 600 && appDate.budgetDay <= 1200) {
            return ("У вас средний уровень дохода");
          } else if (budgetDay >= 0 && appDate.budgetDay < 600) {
            return ("К сожалению у вас уровень дохода ниже среднего");
          } else if (budgetDay < 0) {
              return ("Что то пошло не так");
       }
     }

};
appData.asking()
let expenses1, 
    expenses2;


let budgetDay = appData.getAccumulatedMonth() / 30;

console.log(appData.getAccumulatedMonth());
//let monthTarget = appData.getTargetMonth();
console.log(appData.getTargetMonth());

console.log(appData.getStatusIncome()); 

if(appData.getTargetMonth()>0) {
  console.log("Цель будет достигнута за " + Math.ceil(appData.monthTarget) + ' месяца');
} else {
  console.log("Цель не будет достигнута");
}

   
 
     

   

   // let isNumber = function(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }
 
 

