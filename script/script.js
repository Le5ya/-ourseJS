'use strict';

 const start = document.getElementById('start'),
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
       additionalExpenses = document.querySelector('.additional_expenses'),
       additionalExpensesItem = document.querySelector('.additional_expenses-item'),
       targetAmount = document.querySelector('.target-amount'),
       periodSelect = document.querySelector('[type="range"]'),
       periodAmount = document.querySelector('.period-amount'),
       checkBox = document.getElementById('deposit-check'),
       cancel = document.getElementById('cancel');

   let expensesItems = document.querySelectorAll('.expenses-items'),
       incomeItems = document.querySelectorAll('.income-items');
class AppData{
    constructor() {
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
   };

  isNum = function(n) {
  return !isNaN(parseFloat(n) && isFinite(n));
};

  check = function (){
      if(salaryAmount.value !== ''){
      start.removeAttribute('disabled');
    }
};
  start = function(){
    if(salaryAmount.value === ''){
       start.setAttribute('disabled', 'true');
        return;
    }
    let allInput = document.querySelectorAll('.data input[type="text]');
    allInput.forEach(function(item){
      item.setAttribute('disabled', 'true');
    });
    incomePlus.setAttribute('disabled', 'true');
    expensesPlus.setAttribute('disabled', 'true');
    start.style.display = 'none';
    cancel.style.display = 'block';

    this.budget = +salaryAmount.value;

    

    this.budget = parseFloat(salaryAmount.value);
    this.getExpInc();
    this.getBudget();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.calcPeriod();
    this.getInfoDeposit();
    this.getStatusIncome();
   
    this.showResult();
};
  showResult = function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();

    periodSelect.addEventListener('change',  () => {
         incomePeriodValue.value = this.calcPeriod();
         periodAmount.textContent = periodSelect.value; 
         
       });

  };
  addExpensesBlock = function () {
      let cloneExpensesItem = expensesItems[0].cloneNode(true);
       expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
       for(let i=0; i < cloneExpensesItem.childNodes.length; i++) {
         cloneExpensesItem.childNodes[i].value = '';
       }
       expensesItems = document.querySelectorAll('.expenses-items');
       if(expensesItems.length === 3) {
        expensesPlus.style.display = 'none';
       }
      //  this.validate();
    };
  // getExpenses = function(){
   
  //   expensesItems.forEach((item) => {
  //   let itemExpenses = item.querySelector('.expenses-title').value;
  //   let cashExpenses = item.querySelector('.expenses-amount').value;
  //    if(itemExpenses !== '' && cashExpenses !== ''){
  //      this.expenses[itemExpenses] = cashExpenses;
  //    };
  //  });
  // };
  addIncomeBlock = function(){
    
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    for(let i=0; i < cloneIncomeItem.childNodes.length; i++) {
        cloneIncomeItem.childNodes[i].value = '';
      }
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
      incomePlus.style.display = 'none';
    }
    // this.validate();
  };
  // getIncome = function() {
  //   incomeItems.forEach((item) =>{
  //   let itemIncome = item.querySelector('.income-title').value;
  //   let cashIncome = item.querySelector('.income-amount').value;
  //   if(itemIncome !== '' && cashIncome !== ''){
  //     this.income[itemIncome] = cashIncome;
  //     }
  //     this.incomeMonth += +cashIncome;
  //   });
     
  // };
  getExpInc = function () {
    const count = item => {
    const startStr = item.className.split('-')[0];
    const itemTitle = item.querySelector(`.${startStr}-title`).value;
    const itemAmount = item.querySelector(`.${startStr}-amount`).value; 
      if(itemTitle !== '' && itemAmount !== ''){
      this[startStr][itemTitle] = itemAmount;
      } 
    };
    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for(const key in this.income){
      this.incomeMonth += +this.income[key];
    }
  };

  getAddExpenses = function(){
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach((item) =>{
    item = item.trim();
    if(item !== ''){
      this.addExpenses.push(item);
      }
    });
    
  };
  getAddIncome = function () {
    additionalIncomeItem.forEach((item) => {
      const itemValue = item.value.trim();
      if(itemValue !== ''){
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
  getBudget = function(){
     this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
     this.budgetDay = this.budgetMonth / 30;
     return this.budgetMonth
 };
  getTargetMonth = function(){
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
      do {
        this.percentDeposit = prompt('Какой годовой процент?', '10');
      }while(isNaN(this.percentDeposit) || this.percentDeposit === '' ||
       this.percentDeposit === null);
      do {
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      }while(isNaN(this.percentDeposit) || this.percentDeposit === '' ||
       this.percentDeposit === null);  
    }
  };
  calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
  };
  reset = function(){
    let inputTextData = document.querySelectorAll('.data input[type = text]'),
        resultInputAll = document.querySelectorAll('.result input[type = text]');

    inputTextData.forEach(function(elem){
      elem.value = '';
      elem.removeAttribute('disabled');
      periodSelect.value = '0';
      periodAmount.innerHTML = periodSelect.value;
    });
    resultInputAll.forEach(function (elem) {
      elem.value = '';
    });
    for(let i=1; i < incomeItems.length; i++){
     incomeItems[i].parentNode.removeChild(incomeItems[i]);
     incomePlus.style.display = 'block'; 
    }
     for(let i=1; i < expensesItems.length; i++){
     expensesItems[i].parentNode.removeChild(expensesItems[i]);
     expensesPlus.style.display = 'block'; 
    }
  this.budget = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;

  cancel.style.display = 'none';
  start.style.display = 'block';
  expensesPlus.removeAttribute('disabled');
  incomePlus.removeAttribute('disabled');
  checkBox.checked = false;

  };
    eventListener = function () {

    start.addEventListener('click', this.start.bind(appData));
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);
    salaryAmount.addEventListener('keyup', this.check );
    cancel.addEventListener('click', this.reset);

      periodSelect.addEventListener('change', function () {
              periodAmount.textContent = periodSelect.value;   
        });
      let addExp = [];
      for(let i = 0; i < this.addExpenses.length; i++) {
      let element = this.addExpenses[i].trim();
      element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
      addExp.push(element);
          }  
     };
  };
const appData = new AppData();
appData.eventListener();

    // if (this.getTargetMonth() >= 0){
    //  console.log('Цель будет достигнута через ' + Math.ceil (this.getTargetMonth()) + ' месяцев'); 
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
  //       this.expenses[a_title] = question;
  //       while (isNaN(question) || question === '' || question === null || typeof a_title !== 'string' ){
  //             sum += +question;
  //         }
  //      }
  //    return sum;

  //},

