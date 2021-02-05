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
    appData.mission = +prompt("Цель?");
    // 
      let sum = 0, question, a_title;
      for(let i = 0; i < 2; i++) { 
        a_title =  prompt('Введите обязательную статью расходов', 'foods');
        question = prompt('Во сколько это обойдётся?', 2500);
        appData.expenses[a_title] = question
        while (isNaN(question) || question === '' || question === null); {
            sum += +question;
          }
        
      }
      // appData.expensesMonth = sum;
      // console.log(appData.expenses);
      return sum;

        // 
       },
       getExpensesMonth: function () {
         for(let key in appData.expenses) {
           appData.expensesMonth  += +appData.expenses[key];
         }

         return appData.expensesMonth; 
         
         },
        getBudget: function () {
           appData.budgetMonth = appData.budget - appData.expensesMonth;
           appData.budgetDay = appData.budgetMonth / 30;
           return appData.budgetMonth
         },
        getTargetMonth: function() { 
         let accum = appData.getBudget();
        appData.monthTarget = appData.mission / accum;
        
        return appData.monthTarget;
        },
         getStatusIncome: function () {
          if (appData.budgetDay > 1200) {
            return ("У вас высокий уровень дохода");
          } else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
            return ("У вас средний уровень дохода");
          } else if (appData.budgetDay >= 0 && appData.budgetDay < 600) {
            return ("К сожалению у вас уровень дохода ниже среднего");
          } else if (appData.budgetDay < 0) {
              return ("Что то пошло не так");
       }
     }

};
appData.asking()

appData.getExpensesMonth();
appData.getTargetMonth();
appData.getBudget();
//let monthTarget = appData.getTargetMonth();
console.log(appData.expensesMonth);
if(appData.monthTarget >= 0) {
    console.log("Цель будет достигнута за " + Math.ceil(appData.monthTarget) + ' месяца');
  } else {
    console.log("Цель не будет достигнута");
  }
console.log(appData.getStatusIncome());

function getData() {
  let data = [];
  for(let key in appData){
  data += appData[key]; 
}
return data;
};

getData();
 console.log('Наша программа включает в себя данные: ' + getData());

   

   // let isNumber = function(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }
 
 

