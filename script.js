'use script';

let bud = prompt("Ваш бюджет на месяц?", 1);

console.log(bud);
let timeData=prompt("Введите дату в формате YYYY-MM-DD");
let appdata={
    bud: bud,
    timeData: timeData,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let first=prompt("Введите обязательную статью расходов в этом месяце");
appdata.optionalExpenses.first = prompt("“Во сколько обойдется?”");
alert(bud/30);




