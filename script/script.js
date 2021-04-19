
'use strict';
// let isNumber = function(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };
let start = document.getElementById('start'),
       btnPlus = document.getElementsByTagName('button'),
       incomePlus = btnPlus[0],
       expensesPlus = btnPlus[1],
       additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
       depositCheck = document.querySelector('#deposit-check'),
       budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
       budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
       expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
       accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
       additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
       additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
       incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
       targetMonthValue = document.getElementsByClassName('target_month-value')[0],
       salaryAmount = document.querySelector('.salary-amount'),
       incomeTitle = document.querySelector('.income-title'),                      
       incomeAmount = document.querySelector('.income-amount'),
       expensesTitle = document.querySelector('.expenses-title'),
       expensesItems = document.querySelectorAll('.expenses-items'),
       additionalExpenses = document.querySelector('.additional_expenses'),
       additionalExpensesItem = document.querySelector('.additional_expenses-item'),
       targetAmount = document.querySelector('.target-amount'),
       incomeItems = document.querySelectorAll('.income-items'),
       periodSelect = document.querySelector('[type="range"]'),
       periodAmount = document.querySelector('.period-amount');

let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  expensesMonth: 0,
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function(){
    if(salaryAmount.value === ''){
        alert('Заполни  поле "Месячный доход"!');
        return
    }
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();

    appData.showResult();
},
  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.floor(appData.budgetDay);
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcPeriod();

  },
  addExpensesBlock: function () {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
       expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
       expensesItems = document.querySelectorAll('.expenses-items');
       if(expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
       }

    },
  getExpenses: function(){
    expensesItems.forEach(function(item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
     if(itemExpenses !== '' && cashExpenses !== ''){
       appData.expenses[itemExpenses] = cashExpenses;
     };
   });
  },
  addIncomeBlock: function(){
    
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
    }
  },
  getIncome: function() {
    incomeItems.forEach(function(item){
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if(itemIncome !== '' && cashIncome !== ''){
      appData.income[itemIncome] = cashIncome;
      }
      appData.incomeMonth += +cashIncome;
    });
     console.log(appData.incomeMonth);  
     
  },
  getAddExpenses: function(){
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function(item){
    item = item.trim();
    if(item !== ''){
      appData.addExpenses.push(item);
      }
    })
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(item.value !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },

  getExpensesMonth: function () {
    for(let key in appData.expenses) {
      appData.expensesMonth  += +appData.expenses[key];
         }
      return appData.expensesMonth; 
 },
  getBudget: function(){
     appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
     appData.budgetDay = appData.budgetMonth / 30;
     return appData.budgetMonth
 },
  getTargetMonth: function(){
    return targetAmount.value / appData.budgetMonth;
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
  },
  calcPeriod: function(){
    return appData.budgetMonth * periodSelect.value;
  },
  getPeriodSelect: function(){
   periodAmount.textContent = periodSelect.value; 
  }
};
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', appData.getPeriodSelect);

    // if (appData.getTargetMonth() >= 0){
    //  console.log('Цель будет достигнута через ' + Math.ceil (appData.getTargetMonth()) + ' месяцев'); 
    // }else {
    //   console.log('Цель не будет достигнута');
    // } 

//  asking: function(){    
  //  let sum = 0,
  //      question,
  //      a_title;
  //    for (let i=0; i<2; i++){
  //       a_title = prompt('Введите обязательную статью расходов', 'foods');
  //       question = prompt('Во сколько это обойдётся?', 2500);
  //       appData.expenses[a_title] = question;
  //       while (isNaN(question) || question === '' || question === null || typeof a_title !== 'string' ){
  //             sum += +question;
  //         }
  //      }
  //    return sum;

  //},


