  
let start = document.getElementById('start'),
    cancel = document.querySelector('#cancel'),
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
       targetAmount = document.querySelector('.target-amount');
       periodAmount = document.querySelector('.period-amount'),
       periodSelect = document.querySelector('.period-select'),
       input = document.querySelectorAll('input');

  const AppData = function () {
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
  this.monthTarge = 0;
  };
AppData.prototype.start = function() {
    if(salaryAmount.value === ''){
      alert('Ошибка, поле"Месячный доход" должно быть заполнено!');
      return;
    }
      this.budget = +salaryAmount.value;

      AppData.prototype.getExpenses();
      AppData.prototype.getIncome();
      AppData.prototype.getExpensesMonth();
      AppData.prototype.getAddExpenses();
      AppData.prototype.getAddIncome();
      
      AppData.prototype.getBudget();
      AppData.prototype.getPeriodAmount();
      AppData.prototype.showResult();

      start.style.display = 'none';
      cancel.style.display = 'block';
      
    for(elem of input){
      elem.setAttribute("disabled", "true");
    };
      
    };
AppData.prototype.showResult = function() {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(',');
  additionalIncomeValue.value = this.addIncome.join(',');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incomePeriodValue.value = this.calcPeriod();
  periodSelect.addEventListener('change', function(){
    incomePeriodValue.value = _this.calcPeriod();
  })
    

};
AppData.prototype.addExpensesBlock = function () {
  // let expensesItems = document.querySelectorAll('.expenses-items');
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
  expensesItems = document.querySelectorAll('.expenses-items');
  if(expensesItems.length === 3) {
    expensesPlus.style.display = 'none';
  }
};
AppData.prototype.addIncomeBlock = function () {
  // let incomeItems = document.querySelectorAll('.expenses-items');
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
  incomeItems = document.querySelectorAll('.income-items');
  if(incomeItems.length === 3) {
    incomePlus.style.display = 'none';
  }
};
AppData.prototype.getExpenses = function(){
   const _this = this;
  expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !==''){
        _this.expenses[itemExpenses] = cashExpenses;
      }
  });
};
AppData.prototype.getIncome = function() {
      const _this = this
      incomeItems.forEach(function(item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;

      if(itemIncome !== '' && cashIncome !==''){
        _this.income[itemIncome] = cashIncome;
      }
          for (let key in this.income) {
          this.incomeMonth += +this.income[key];
        }
  });

};
AppData.prototype.getAddExpenses = function() {
  let addExpenses = additionalExpensesItem.value.split(',');
      const _this = this;
      addExpenses.forEach(function(item){
        item = item.trim();
        if(item !==''){
        _this.addExpenses.push(item);
      }
  }); 
  
};
AppData.prototype.getAddIncome = function(){
    _this = this;
    addIncome.forEach(function(item){
    let itemValue  = item.value.trim();
    if (itemValue !== ''){
      _this.addIncome.push(itemValue);
    }
  });
};

AppData.prototype.getExpensesMonth = function () {
  for(let key in this.expenses) {
    this.expensesMonth  += +this.expenses[key];
  }
  return this.expensesMonth; 
  };
AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget - this.expensesMonth + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
    return this.budgetMonth
  };
AppData.prototype.getTargetMonth = function() { 
  return targetAmount.value / this.budgetMonth;

return this.monthTarget;
};
AppData.prototype.getStatusIncome = function () {
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
AppData.prototype.getInfoDeposit = function(){
  if(this.deposit){
    this.percentDeposit = prompt('Какой годовой процент?', '10');
    this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
  }
};
AppData.prototype.calcPeriod = function() {
  return this.budgetMonth * periodSelect.value;
  
};
AppData.prototype.getPeriodAmount = function() { 
  periodAmount.textContent = periodSelect.value;
};
AppData.prototype.cancel = function() {
cancel.style.display = 'none';
start.style.display = 'block';

  for(elem of input){
  elem.removeAttribute("disabled", "true");
  elem.value = '';
}
  
  AppData.prototype.start(); 
  
};

AppData.prototype.eventListeners = function () {
  _this = this;
start.addEventListener('click', _this.start);
expensesPlus.addEventListener('click', _this.addExpensesBlock);
incomePlus.addEventListener('click', _this.addIncomeBlock);
periodSelect.onchange = _this.getPeriodAmount;
cancel.addEventListener('click', _this.cancel); 
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