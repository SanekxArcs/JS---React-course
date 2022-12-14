"use strict";

////HOME WORK 23
// function firstTask() {
// for(let i=5;i<=10;i++){
//     console.log(i);
// }
// };
// firstTask();

// function secondTask() {
//     for( let i=20; i>=13; i--){
//     console.log(i);
//     }
// }
// secondTask();

// function thirdTask() {
//     for( let i=2; i <= 10; i++){
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// };

// thirdTask();

// function fourthTask() {
//     let i=2;
//     do {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
        
//     } while (i <=16);
    
// }
// fourthTask();

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for(let i=5;i<=10;i++){
//         arrayOfNumbers[i-5]=i;
//         console.log(arrayOfNumbers[i-5]);
//     }
    
    
    
//     return arrayOfNumbers;
// }
// fifthTask()

////HOME WORK 23.1
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     arr.forEach(functionFirstTask); 
//     function functionFirstTask(item,index) {
//         result[index]=item;
//         console.log(result);        
//     }
    
//     // Не трогаем
//     return result;
// }
// firstTask();

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     // Пишем решение вот тут
//     data.forEach(functionSecondTask);

//     function functionSecondTask(item,index){
//         if (typeof(data[index]) === 'number') {
//             data[index]=item*2;
//         }    else {
//             data[index]=item +" - done";
//         }
//     }
//     console.log(data);
//     // // Не трогаем
//     return data;
// }
// secondTask();

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     console.log(data.length);
//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length-1-i];
        
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// }
// thirdTask(); 


////HOME WORK 23.3
// const lines = 5;
// let result = '';

// for (let i = 1; i <= lines+1; i++) {
//     for (let j = 1; j <= lines+1 - i; j++) {
//         result += " ";
// }
// for (let k = 0; k < 2 * i - 1; k++) {
//     result += "*";
//   }
//   result += "\n";
// }
// console.log(result);

//////HOME WORK 27
// Задание на работу с функциями
// В этих заданиях мы с вами потренируемся создавать небольшие полезные функции. Это основа всего в JS и дальше по курсу вы будете в этом убеждаться :)

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// Задачи:

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂

// Место для первой задачи
// function sayHello(name) {
//     return "Привет, " + name;
// }

// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return [number-1, number,number+1];
// }

// // Место для третьей задачи
// function getMathResult(baseNum,times) {
//     let number = 0;
//     if (typeof(times) !== 'number' || times <= 0){
//        return baseNum;
//     } 
//         for(i = 1; i <= times; i++){
//             if( i === times){
//                 number += `${baseNum * i}`;
//             } else {
//                 number += `${baseNum * i}---`;
//             }
//         }
//         return number;
//     }

// console.log(getMathResult(5,5));

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// Примеры
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// Место для первой задачи
function calculateVolumeAndArea(input) {
    if(typeof(input) !== 'number' || input < 0 || !Number.isInteger(input)){
        return `При вычислении произошла ошибка`;
    }else {
        let v = input * input * input;
        let q = 6 * (input*input);
        return `Объем куба: ${v}, площадь всей поверхности: ${q}`;
    }  
}
console.log(calculateVolumeAndArea(15));

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// Пример:
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.

// Место для второй задачи
function getCoupeNumber(input) {
    let couple;
    if (typeof(input) !== 'number' || input < 0 || !Number.isInteger(input)) {
        return console.log('Ошибка. Проверьте правильность введенного номера места');
    }  else if(input <= 0 || input > 36){
        return console.log("Таких мест в вагоне не существует");
    } else {
        if(input == 1 || input == 2 || input == 3 || input == 4) {
            couple=1;
        }else if(input == 5 || input == 6 || input == 7 || input == 8) {
            couple=2;
        }else if(input == 9 || input == 10 || input == 11 || input == 12) {
            couple=3;
        }else if(input == 13 || input == 14 || input == 15 || input == 16) {
            couple=4;
        }else if(input == 17 || input == 18 || input == 19 || input == 20) {
            couple=5;
        }else if(input == 21 || input == 22 || input == 23 || input == 24) {
            couple=6;
        }else if(input == 25 || input == 26 || input == 27 || input == 28) {
            couple=7;
        }else if(input == 29 || input == 30 || input == 31 || input == 32) {
            couple=8;
        }else if(input == 33 || input == 34 || input == 35 || input == 36) {
            couple=9;
        }
        return couple;
    }
   
}
console.log(getCoupeNumber(14,5));


// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
//

// Место для первой задачи
function getTimeFromMinutes(i) {
    let time = i / 60;
    console.log(time);

}
getTimeFromMinutes(150);
//  2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0
// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)
// Ответ с кодом этих задач можно найти тут: ссылка
// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.
// Но постарайтесь решить самостоятельно 🙂
// Место для второй задачи
function findMaxNumber(a,b,c,d) {

}

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"
// Задача непростая для новичков, так что с первого раза может не получится.


function fib(i) {
    
}


// Задачи на работу с объектами
// У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, но ему не хватает навыков. Выполните часть заданий за него.
// Задачи:
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.
// // P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'}
        ,
        showAgeAndLangs: function(plan){
            const {age} = plan;
            const {landuages} =plan.skills;
            let str = `Мне ${age} и я владею языками: `;

            landuages.forEach(function(lang){
                str += `${lang.toUpperCase()}`;
            });
            return str;
        }
    };
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp; 
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str ='';
    const {programmingLangs} = plan.skills;
    for (let value in programmingLangs)
    console.log(str += `Язык ${value} изучен на ${programmingLangs[value]} `);
}
return str;

showProgrammingLangs(personalPlanPeter);

// Задачи:
// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
}

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.
// Может показать сложной с первого взгляда, но это совсем не так 🙂
// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку


const someString = 'This is some strange string';

function reverse(str) {

}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

}

// Задача:
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    
}

// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

}

// let x = 5; alert( x++ ); ///=5

// [ ] + false - null + true ////= NaN

// let y = 1; 
// let x = y = 2; 
// alert(x); ////=2

// [ ] + 1 + 2 ////=12

// alert( "1"[0] ) ///=1

// 2 && 1 && null && 0 && undefined ///=null

// !!( a && b ) === (a && b)   !!==make boolean, not equal

// alert( null || 2 && 3 || 4 ); ////=3

// a = [1, 2, 3]; b = [1, 2, 3];  a == b ////=false

// alert( +"Infinity" ); ///=Infinity

// "Ёжик" > "яблоко" ///=false

// 0 || "" || 2 || undefined || true || falsе ///=2

// Задания на поиск ошибок в коде
// В этом упражнении мы с вами потренируемся находить ошибки и неточности в коде. Дебаг (поиск ошибок, debug) - очень важный навык любого программиста. И чем лучше вы им будете владеть, тем легче будет вам в первую очередь.
// Мы уже разобрали один из важнейших инструментов для поиска ошибок у front-end разработчиков - это консоль разработчика прямо в браузере. Да, позже будут еще наслаиваться инструменты, но это один из основных. Не забывайте его использовать и внимательно читайте те сообщения, которые выводятся. Ведь все это было создано разработчиками для разработчиков, чтобы вам было проще. Ну и никто не отменяет древний метод поиска ошибок - вывод через console.log(). Но это только пока вы новичок :)
// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда. Всю информацию для решения мы проходили в предыдущих уроках.
// Задание:
// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.
// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.
// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).
// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.
// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.
// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
// P.S. Может показаться сложным, но задача решается очень просто, если вы помните один принцип :)
// Ответ с правильным вариантом всех функций можно найти тут: ссылка
// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.
// Но постарайтесь решить самостоятельно 🙂

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return anwser;
}

console.log(isOpen(openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);

// Здесь мы с вами рассмотрим одну из классических задач на рекурсию, которую дают на собеседованиях. Звучит она очень просто:
// Напишите функцию, которая вычисляет факториал.
// Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
// Сам же факториал с примерами выглядит вот так:
// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120
// factorial(4) => 24
// Решить задачу нужно через рекурсию.
// // https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/1_functions/factorial_recursion.js
