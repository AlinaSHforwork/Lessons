/* Завдання: Калькулятор Чаю 🍵
Опис: Створіть функцію, яка приймає кількість людей та загальну суму рахунку. Вона має розрахувати, скільки кожен повинен заплатити, включаючи чайові (наприклад, 10% від загальної суми).

Навички для практики: Змінні, арифметичні операції, функції, умовні оператори (наприклад, для перевірки, чи вхідні дані є коректними числами).

Ускладнення: Додайте можливість вибору відсотка чайових. Округлюйте кінцеву суму до двох знаків після коми. */

let peopleF = 3;
let billF = 1500;
let tipPercentF = 0.1;   

function calculateBillPerPerson(people, bill, tipPercent) {
    if (typeof people !== "number" || typeof bill !== "number" || typeof tipPercent !== "number") {
        return "Input is not a number"        
    }
    else if (people <= 0 || bill < 0 || tipPercent < 0) {
        return "Input is not correct"        
    }
    else {
        let totalTip = bill * tipPercent;
        let totalBill = bill + totalTip;
        let billPerPerson = totalBill / people;
        return billPerPerson.toFixed(2);
    }
}

console.log("Each person should pay:", calculateBillPerPerson(peopleF, billF, tipPercentF));