'use script';

let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", "");    
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();
let appdata={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses(){
    for (let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце",''),
            b = prompt("Во сколько обойдется?", '');
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && 
            a != '' && b != ''){
               appdata.expenses [a] = b;
           } else {
               i = i - 1;
           }

    }
}


appdata.moneyPerDay = (appdata.budget / 30).toFixed();
//alert(money/30);

function checkSavings(){
    if(appdata.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    appdata.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц: " + appdata.monthIncome);    
    }
}

chooseExpenses();
checkSavings();

