  
const start = document.getElementById('start'),
    cancel = document.querySelector('#cancel'),
       btnPlus = document.getElementsByTagName('button'),
       incomePlus = btnPlus[0],
       expensesPlus = btnPlus[1],
       btnPlusExpensesAdd = document.getElementsByTagName('button')[2],
       depositCheck = document.querySelector('#deposit-check'),
       budgetMonthValue = document.querySelector('.result-budget_month input'), 
       budgetDayValue = document.querySelector('.result-budget_day input'), 
       expensesMonthValue = document.querySelector('.result-expenses_month input'), 
       addIncomeValue = document.querySelector('.result-additional_income input'), 
       addExpensesValue = document.querySelector('.result-additional_expenses input'), 
       incomePeriodValue = document.querySelector('.result-income_period input'), 
       targetMonthValue = document.querySelector('.result-target_month input'),
       salaryAmount = document.querySelector('.salary-amount'),
       incomeTitle = document.querySelector('.income-title'),                      
      //  incomeAmount = document.querySelector('.income-amount'),
       expensesTitle = document.querySelector('.expenses-title'),
       expensesItems = document.querySelectorAll('.expenses-items'),
       incomeItems = document.querySelectorAll('.income-items'),
       addExpensesItem = document.querySelector('.additional_expenses-item'),
       addIncomeItem = document.querySelector('.additional_income-item'),
       depositAmount = document.querySelector('.deposit-amount'),
       depositPercent = document.querySelector('.deposit-percent'),
       targetAmount = document.querySelector('.target-amount');
       periodAmount = document.querySelector('.period-amount'),
       periodSelect = document.querySelector('.period-select'),
       input = document.querySelectorAll('.data input[type = text]');

  class AppData {
    constructor() {
  this.budget = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.period = 3;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.monthTarget = 0;
    };

  check = function() {
   if(salaryAmount.value === '') {
     start.removeAttribute('disabled', 'true');
   }
  };

  start = function() {
   if(salaryAmount.value === '') {
     start.setAttribute('disabled', 'true');
     return;
   }
   input.forEach((item) => {
     item.setAttribute('disabled', 'disabled');
   });
   incomePlus.setAttribute('disabled', 'disabled');
   expensesPlus.setAttribute('disabled', 'disabled');
   start.style.display = 'none';
   cancel.style.display = 'block';

      this.budget = +salaryAmount.value;

      this.getExpenses();
      this.getIncome();
      this.getExpensesMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.getInfoDeposit();
      this.getStatusIncome();
      this.getPeriodAmount();
      this.showResult();

      start.style.display = 'none';
      cancel.style.display = 'block';
      
    for(elem of input){
      elem.setAttribute("disabled", "true");
    }  
    };
showResult = function() {
  // const _this = this;
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = this.budgetDay;
      expensesMonthValue.value = this.expensesMonth;
      addExpensesValue.value = this.addExpenses.join(',');
      addIncomeValue.value = this.addIncome.join(',');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcPeriod();
      periodSelect.addEventListener('change', () => {
        periodAmount.innerHTML = periodSelect.value;
      });
      // periodSelect.onchange = this.getPeriodAmount;
};
addExpensesBlock = function () {
  // let expensesItems = document.querySelectorAll('.expenses-items');
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3) {
    expensesPlus.style.display = 'none';
  }
};
addIncomeBlock = function () {
  // let incomeItems = document.querySelectorAll('.expenses-items');
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll('.income-items');
  if(incomeItems.length === 3) {
    incomePlus.style.display = 'none';
  }
};
getExpenses = function(){
  //  const _this = this;
  expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !==''){
        this.expenses[itemExpenses] = cashExpenses;
      }
  });
};
getIncome = function() {
      // const _this = this;
      incomeItems.forEach((item) => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;

      if(itemIncome !== '' && cashIncome !==''){
        this.income[itemIncome] = cashIncome;
      }
          for (let key in this.income) {
          this.incomeMonth += +this.income[key];
        }
  });

};
getAddExpenses = function() {
  let addExpenses = addExpensesItem.value.split(',');
      // const _this = this;
      addExpenses.forEach((item) =>{
        item = item.trim();
        if(item !==''){
        this.addExpenses.push(item);
      }
  }); 
  
};
getAddIncome = function(){
    // _this = this;
    addIncome.forEach((item) => {
    let itemValue  = item.value.trim();
    if (itemValue !== ''){
      this.addIncome.push(itemValue);
    }
  });
};

getExpensesMonth = function () {
  for(let key in this.expenses) {
    this.expensesMonth  += +this.expenses[key];
  }
  return this.expensesMonth; 
  };
getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
           this.budgetDay = Math.floor(this.budgetMonth / 30); 
  };
getTargetMonth = function() { 
  return targetAmount.value / this.budgetMonth;

};
getStatusIncome = function () {
  if (this.budgetDay > 1200) {
    return ("У вас высокий уровень дохода");
  } else if (this.budgetDay > 600 && this.budgetDay <= 1200) {
    return ("У вас средний уровень дохода");
  } else if (this.budgetDay >= 0 && this.budgetDay < 600) {
    return ("К сожалению у вас уровень дохода ниже среднего");
  } else if (this.budgetDay < 0) {
      return ("Что то пошло не так");
}
};
getInfoDeposit = function(){
    if(this.deposit){
    do{
      this.percentDeposit = prompt('Какой годовой процент?', '10');
    } while (isNaN(this.percentDeposit ) || this.percentDeposit === ' ' || this.percentDeposit === null);
    do {
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
    } while (isNaN(thismoneytDeposit ) || this.moneyDeposit === ' ' || this.moneyDeposit === null);
    
    }
};
calcPeriod = function() {
  return this.budgetMonth * periodSelect.value;
  
};
getPeriodAmount = function() { 
  periodAmount.textContent = periodSelect.value;
};
getPeriodAmount = function() {
  periodAmount.textContent = periodSelect.value;
};

cancel = function() {
  let inputTextData = document.querySelectorAll('.data input[type = text]'),
      resultInputAll = document.querySelectorAll('.data input[type = text]');
  inputTextData.forEach((elem) => {
    elem.value = '';
    elem.removeAttribute('disabled');
    periodSelect.value = '0';
    periodAmount.innerHTML = periodSelect.value;
  });
  for (let i = 1; i < incomeItems.length; i++) {
    incomeItems[i].parentNode.removeChild(incomeItems[i]);
    expensesPlus.display = 'block';
    cancel.style.display = 'none';
    start.style.display = 'block';
  }
  this.budget = 0,
  this.income = {},
  this.incomeMonth = 0,
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.period = 3;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.monthTarget = [];

  cancel.style.display = 'none';
  start.style.display = 'block';
  incomePlus.removeAttribute('disabled');
  expensesPlus.removeAttribute('disabled');
  checkBox.checked = false;
      
     AppData.prototype.start(); 
};
eventListeners = function () {

start.addEventListener('click', this.start.bind(this));
expensesPlus.addEventListener('click', this.addExpensesBlock);
incomePlus.addEventListener('click', this.addIncomeBlock);
salaryAmount.addEventListener('keyup', this.check);
cancel.addEventListener('click', this.cancel.bind(this));
periodSelect.addEventListener('change', () => {
  periodAmount.innerHTML = periodSelect.value;
     });
   };
};          
const appData = new AppData();
AppData.prototype.eventListeners();


console.log(appData);




 

 



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