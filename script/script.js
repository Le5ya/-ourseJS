  
let start = document.getElementById('start'),
       btnPlus = document.getElementsByTagName('button'),
       incomePlus = btnPlus[0],
       expensesPlus = btnPlus[1],
       btnPlusExpensesAdd = document.getElementsByTagName('button')[2],
       depositCheck = document.querySelector('#deposit-check'),
       budgetMonthValue = document.getElementsByClassName('budget_month-value')[0], 
       budgetDayValue = document.getElementsByClassName('budget_day-value')[0], 
       expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0], 
       additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0], 
       additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], 
       incomePeriodValue = document.getElementsByClassName('income_period-value')[0], 
       targetMonthValue = document.getElementsByClassName('target_month-value')[0],
       salaryAmount = document.querySelector('.salary-amount'),
       incomeTitle = document.querySelector('.income-title'),                      
      //  incomeAmount = document.querySelector('.income-amount'),
       expensesTitle = document.querySelector('.expenses-title'),
       expensesItems = document.querySelectorAll('.expenses-items'),
       incomeItems = document.querySelectorAll('.income-items'),
       additionalExpensesItem = document.querySelector('.additional_expenses-item'),
       additionalIncomeItem = document.querySelector('.additional_income-item'),
       depositAmount = document.querySelector('.deposit-amount'),
       depositPercent = document.querySelector('.deposit-percent'),
       targetAmount = document.querySelector('.target-amount'),
       periodSelect = document.querySelector('.period-select'),
       periodAmount = document.querySelector('.period-amount');

       let cancel = document.querySelector('#cancel');
       
let appData = {
  budget: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  monthTarget:0,

  start: function() {
    if(salaryAmount.value === ''){
      alert('Ошибка, поле"Месячный доход" должно быть заполнено!');
      return;
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
    showResult: function() {
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(',');
      additionalIncomeValue.value = appData.addIncome.join(',');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();


    },
    addExpensesBlock: function () {
      // let expensesItems = document.querySelectorAll('.expenses-items');
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3) {
       expensesPlus.style.display = 'none';
      }
    },
    addIncomeBlock: function () {
      // let incomeItems = document.querySelectorAll('.expenses-items');
      let cloneIncomeItem = incomeItems[0].cloneNode(true);
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      if(incomeItems.length === 3) {
       incomePlus.style.display = 'none';
      }
    },

    getExpenses: function(){
      expensesItems.forEach(function(item) {
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;
         if(itemExpenses !== '' && cashExpenses !==''){
           appData.expenses[itemExpenses] = cashExpenses;
         }
      });
    },
    getIncome: function() {
         incomeItems.forEach(function(item) {
         let itemIncome = item.querySelector('.income-title').value;
         let cashIncome = item.querySelector('.income-amount').value;
         if(itemIncome !== '' && cashIncome !==''){
           appData.income[itemIncome] = cashIncome;
         }
              for (let key in appData.income) {
             appData.incomeMonth += +appData.income[key];
           }
      });

    },
  getAddExpenses: function() {
    let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
          item = item.trim();
          if(item !==''){
          appData.addExpenses.push(item);
        }
   }) 
    
},
  getAddIncome: function(){
    let addIncome = additionalIncomeItem.value.split(',');
      addIncome.forEach(function(item){
       item = item.trim();
      if (item !== ''){
        appData.addIncome.push(item);
      }
    });
  },

       getExpensesMonth: function () {
         for(let key in appData.expenses) {
           appData.expensesMonth  += +appData.expenses[key];
         }
         return appData.expensesMonth; 
         },
        getBudget: function () {
           appData.budgetMonth = appData.budget - appData.expensesMonth + appData.incomeMonth - appData.expensesMonth;
           appData.budgetDay = appData.budgetMonth / 30;
           return appData.budgetMonth
         },
        getTargetMonth: function() { 
          return targetAmount.value / appData.budgetMonth;
        
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
     },
     getInfoDeposit: function(){
       if(appData.deposit){
         appData.percentDeposit = prompt('Какой годовой процент?', '10');
         appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
       }
     },
     calcPeriod: function() {
       return appData.budgetMonth * periodSelect.value;
       
     }
};


start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);

for(let value=1; value<=12; value++){
 periodAmount.textContent === +periodSelect.getAttribute(value);
}


// appData.getTargetMonth();
//let monthTarget = appData.getTargetMonth();
// if(appData.monthTarget >= 0) {
//     console.log("Цель будет достигнута за " + Math.ceil(appData.monthTarget) + ' месяца');
//   } else {
//     console.log("Цель не будет достигнута");
//   }


// function getData() {
//   let data = [];
//   for(let key in appData){
//   data += appData[key]; 
// }
// return data;
// };

// getData();
//  console.log('Наша программа включает в себя данные: ' + getData());

// appData.getInfoDeposit();
  // asking: function(){
  //   appData.addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую');
  //   appData.addExpenses.toLowerCase().split(',');
  //   appData.deposit = confirm('Есть ли у вас депозит в банке?');
  //   appData.mission = +prompt("Цель?");
    // 
      // let sum = 0, question, a_title;
      // for(let i = 0; i < 2; i++) { 
      //   a_title =  prompt('Введите обязательную статью расходов', 'foods');
      //   question = prompt('Во сколько это обойдётся?', 2500);
      //   appData.expenses[a_title] = question
      //   while (isNaN(question) || question === '' || question === null || typeof a_title !== 'string' ); {

      //       sum += +question;
      //     }
        
      // }
      // appData.expensesMonth = sum;
      // console.log(appData.expenses);
      //return sum;
      // },
      
    //        if(confirm('Есть ли у вас дополнительный заработок?')){
    //   let itemIncome;
    //   do {
    //     itemIncome = prompt('Какой у вас дополнительный заработок?', ' Таксую');
    //   }
    //   while 
    //     (typeof itemIncome !== 'string');
        

    //   let cashIncome;
    //   do {
    //     cashIncome = prompt('Сколько вы на этом зарабатываете?', '10000');
    //   }
    //   while 
    //     (isNaN(cashIncome));
    //     appData.income[itemIncome] = cashIncome;   
    // } 
    //        for (let key in appData.income) {
    //          appData.incomeMonth += +appData.income[key];
    //        }