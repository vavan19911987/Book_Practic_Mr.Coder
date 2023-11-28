'use strict'
// *
// ?
// !

// ! Калькуляторы фигур на JavaScript //

// * Сделайте калькулятор, который будет
// * находить площадь и периметр квадрата.

;(function (root) {
    let parent = document.querySelector(root)
    let inpBtn = parent.querySelector('.btn')
    let input = parent.querySelector('.inp')
    let square = parent.querySelector('#square')
    let result = 0
    inpBtn.addEventListener('click', () => {
        result = input.value * 4
        square.textContent = 'P = ' + result
        input.value = ''
    })
})('#wrapper')

;(function (root) {
    let parent = document.querySelector(root)
    let inpBtn = parent.querySelector('.btn2')
    let input = parent.querySelector('.inpS')
    let square = parent.querySelector('#square')
    let sup = document.createElement('sup')
    sup.textContent = '(2)'
    let result = 0
    inpBtn.addEventListener('click', () => {
        result = input.value ** 2
        square.textContent = 'S = ' + result
        square.appendChild(sup)
        input.value = ''
    })
})('#wrapper')

// * Сделайте калькулятор, который будет находить
// * площадь и периметр прямоугольника.

;(function (root) {
    let parent = document.querySelector(root)
    let inpBtn = parent.querySelector('.rectangleBtn')
    let input = parent.querySelector('.callInp')
    let input2 = parent.querySelector('.callInp2')
    let rectangle = parent.querySelector('#rectangle')
    let result = 0
    inpBtn.addEventListener('click', () => {
        result = input.value * input2.value
        rectangle.textContent = 'S = ' + result
        input.value = ''
        input2.value = ''
    })
})('#wrapper2')

;(function (root) {
    let parent = document.querySelector(root)
    let inpBtn = parent.querySelector('.rectangleBtn2')
    let input = parent.querySelector('.callInpS')
    let input2 = parent.querySelector('.callInpS2')
    let rectangle = parent.querySelector('#rectangle')
    let result = 0
    inpBtn.addEventListener('click', () => {
        result = (+input.value + +input2.value) * 2
        rectangle.textContent = 'P = ' + result
        input.value = ''
        input2.value = ''
    })
})('#wrapper2')

// * Сделайте калькулятор, который будет
// * находить площадь круга и длину окружности.

;(function (root) {
    let parent = document.querySelector(root)
    let inpBtn = parent.querySelector('.rectangleBtn')
    let circleInp = parent.querySelector('#circleInp')
    let circle = parent.querySelector('#circle')
    let result = 0
    inpBtn.addEventListener('click', () => {
        result = circleInp.value ** 2 * 3.14
        circle.textContent = 'S = ' + result
        circleInp.value = '';
    })

})('#wrapper3')

;(function (root) {
    let parent = document.querySelector(root)
    let inpBtn = parent.querySelector('.rectangleBtn2') // кнопка
    let circleInpS = parent.querySelector('#circleInpS')
    let circle = parent.querySelector('#circle')
    let result = 0
    inpBtn.addEventListener('click', () => {
        result = 2 * 3.14 * circleInpS.value
        circle.textContent = 'D ~ ' + Math.floor(result)
        circleInpS.value = ''
    })
})('#wrapper3')

// * Сделайте калькулятор, который будет
// * находить площадь треугольника по трем сторонам.

;(function (root) {
    let parent = document.querySelector(root);
    let triangleBtn = parent.querySelector('.triangleBtn')
    let triangleInp1 = parent.querySelector('#triangleInp1')
    let triangleInp2 = parent.querySelector('#triangleInp2')
    let triangleInp3 = parent.querySelector('#triangleInp3')
    let text = parent.querySelector('.text');
    let result = 0;

    triangleBtn.addEventListener('click', () => {
        let intervalResult = 0;
        intervalResult = +triangleInp1.value + +triangleInp2.value + +triangleInp3.value
        intervalResult = intervalResult / 2
        intervalResult = intervalResult * (intervalResult - +triangleInp1.value) * (intervalResult - +triangleInp2.value) * (intervalResult - +triangleInp3.value)
        result = Math.sqrt(intervalResult)

        // text.textContent = 'S = ' + result.toFixed(2)
        if (result % 1 === 0) {
            text.textContent = 'S = ' + result
        } else {
            text.textContent = 'S = ' + result.toFixed(2)
        }
        triangleInp1.value = ''
        triangleInp2.value = ''
        triangleInp3.value = ''

    })

})('#wrapper4')

// ? **************************************** //

// ! Математические калькуляторы на JavaScript //

// * Напишите скрипт, который будет находить корни квадратного уравнения.
// * Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

function prog() {
    let a = document.querySelector('#a').value
    let b = document.querySelector('#b').value
    let c = document.querySelector('#c').value
    document.querySelector('#result').textContent = quad(a, b, c)
    document.querySelector('#squareRes').style.display = 'block'

}

function quad(a, b, c) {
    if (a === 0) {
        return 'Ошибка "a = 0" не допустимое значение!'
    }
    let D = b * b - 4 * a * c
    let x1
    let x2
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a)
        x2 = (-b - Math.sqrt(D)) / (2 * a)
        return 'Коэффициенты: a = ' + a + ', b = ' + b + ', c = ' + c + '\nКорни уравнение: X1 = ' + x1.toFixed(2) + ', X2 = ' + x2.toFixed(2) + '\nДискриминант(D) = ' + D
    } else if (D === 0) {
        x1 = -b / (2 * a)
        return 'Коэффициенты: a = ' + a + ', b = ' + b + ', c = ' + c + '\nКорни уравнение: X1 = ' + x1.toFixed(2) + '\nДискриминант(D) = ' + D
    } else if (D < 0) {
        return 'Коэффициенты: a = ' + a + ', b = ' + b + ', c = ' + c + '\nКорней нет:\nДискриминант(D) = ' + D

    }
}

// * Даны 3 инпута. В них вводятся числа.
// * Проверьте, что эти числа являются тройкой Пифагора:
// * квадрат самого большого числа должен быть равен сумме
// * квадратов двух остальных.

let btn = document.querySelector('#btn')
let pre = document.querySelector('#pythRes')
let over = document.querySelector('.pythagorasResult')
let x = document.querySelector('#x')
let y = document.querySelector('#y')
let z = document.querySelector('#z')

function isPythagoras() {
    if (x.value ** 2 + y.value ** 2 === z.value ** 2) {
        return 'Тройка пифагора'
    } else {
        return 'Числа не являются Тройкой Пифагора'
    }
}

btn.addEventListener('click', function test() {
    if (x.value === '' || y.value === '' || z.value === '') {
        pre.textContent = 'Числа не введены'
    } else {
        pre.textContent = isPythagoras()
    }
    over.style.display = 'block'
})

// * Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку
// * выведите список делителей этого числа.

let btnDivider = document.querySelector('#btnDivider')
let inpDivider = document.querySelector('#inpDivider')
let divRes = document.querySelector('#divRes')
let dividerResult = document.querySelector('.dividerResult')

function divider() {
    let res = []
    for (let i = 0; i * 2 <= inpDivider.value + 1; i++) {
        if (inpDivider.value % i === 0) {
            res.push(i)
        }
    }
    return divRes.textContent = `Делители этого числа:` + ' ' + res.join(', ')
}

btnDivider.addEventListener('click', () => {
    if (inpDivider.value === '') {
        divRes.textContent = 'Введите число'
    } else {
        divRes.textContent = divider();
    }
    dividerResult.style.display = 'block'
})

// * Даны 2 инпута и кнопка. В инпуты вводятся числа.
// * По нажатию на кнопку выведите список общих делителей этих двух чисел.
// * Даны 2 инпута и кнопка. В инпуты вводятся числа.
// * По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
// * Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите
// * наименьшее число, которое делится и на одно, и на второе из введенных чисел.
// ? Три задачи обьеденил в одну

let isInpDivider = document.querySelector('#isInpDivider');
let isInpDivider2 = document.querySelector('#isInpDivider2');
let isBtnDivider = document.querySelector('#isBtnDivider');
let isDividerResult = document.querySelector('.isDividerResult');
let isDivRes = document.querySelector('#isDivRes');
let isDivRes2 = document.querySelector('#isDivRes2');
let isDivRes3 = document.querySelector('#isDivRes3');

function isDivider() {
    let arrDivider1 = [];
    let arrDivider2 = [];
    let arrResultDiv = [];
    for (let i = 2; i * 2 <= isInpDivider.value; i++) {
        if (isInpDivider.value % i === 0) {
            arrDivider1.push(i);
        }
    }
    for (let i = 2; i * 2 <= isInpDivider2.value; i++) {
        if (isInpDivider2.value % i === 0) {
            arrDivider2.push(i)
        }
    }
    arrResultDiv.push(...arrDivider1, ...arrDivider2);

    if (isInpDivider2.value === '' || isInpDivider.value === '') {
        isDivRes.textContent = 'Введите числа'
    } else {
        let duplicate = arrResultDiv.filter((num, i, el) => {
            return el.indexOf(num) !== i;
        })
        if (duplicate.length === 0) {
            isDivRes.textContent = 'Общих делителей нет'
            isDivRes2.textContent = 'Наибольших делителей нет'
            isDivRes3.textContent = 'Наимениших делителей нет'
        } else {
            isDivRes.textContent = 'Обший делитель чисел' + ' ' + duplicate
            isDivRes2.textContent = 'Наибольший делитель' + ' ' + Math.max(...duplicate)
            isDivRes3.textContent = 'Наименьший делитель' + ' ' + Math.min(...duplicate)
        }

    }


}

isBtnDivider.addEventListener('click', () => {
    isDivider();
    isDividerResult.style.display = 'block';
})

// ? **************************************** //

// ! Игра угадай число на JavaScript

// * Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100.
// * В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
// * Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше',
// * а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.

let number = document.querySelector('.numRes');
let compBtn = document.querySelector('#compBtn')

function getGenerator() {
    compBtn.addEventListener('click', () => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        number.textContent = getRandomInt(1, 100);
    })
}

getGenerator();

let peopleInp = document.querySelector('#peopleInp');
let peopleBnt = document.querySelector('#peopleBtn');
let peopleRes = document.querySelector('#res');
let peopleResult = document.querySelector('.result')

function checkNumber() {
    peopleBnt.addEventListener('click', () => {
        if (+number.textContent === +peopleInp.value) {
            peopleRes.textContent = 'Ура Вы угадали';
            number.style.display = 'block';
            peopleResult.style.display = 'block'
        } else if (+number.textContent > +peopleInp.value) {
            peopleRes.textContent = 'Введите число побольше';
            peopleResult.style.display = 'block'
        } else if (+number.textContent < +peopleInp.value) {
            peopleRes.textContent = 'Введите число поменьше';
            peopleResult.style.display = 'block'
        }
    })
}

checkNumber();

// ? **************************************** //

// ! Игра угадай ячейку на JavaScript

// * Давайте теперь реализуем игру угадай ячейку.
// * В этой игре будет дана таблица 10 на 10.
// * Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
// * Игроку нужно кликать на клетки пока он не найдет все загаданные
// * компьютером клетки

// ? №1

// * Модифицируйте предыдущую задачу, добавив таймер обратного отсчета.
// * Если игрок не успеет угадать числа за отведенное время - он проиграл.

let gamesCell = document.querySelector('.gamesCell');
let arrTable = {
    row: ['', '', '', '', '', '', '', '', '', ''],
    col: ['', '', '', '', '', '', '', '', '', ''],
    col2: ['', '', '', '', '', '', '', '', '', ''],
}

function addTable() {
    let table = document.createElement('table');
    table.classList.add('isTable')
    gamesCell.append(table)
    for (let el in arrTable) {
        let tr = document.createElement('tr')
        table.append(tr)
        for (let i = 0; i < arrTable[el].length; i++) {
            let td = document.createElement('td')
            tr.append(td);
            td.classList.add('test')
        }
    }
}

addTable()

let tr = document.querySelectorAll('.test')

function getTable(e) {
    const colors = ['white', 'white', 'white', 'white', 'white'];
    for (let i = 0; i < 5; i++) {
        let j = Math.random() * (i + 25) | 0;
        [colors[i], colors[j]] = [colors[j], colors[i]];

    }
    tr.forEach((el, i) => {
        el.style.backgroundColor = colors[i]
    });
}

let cellBtn = document.querySelector('#cellBtn')

let time = document.querySelector('.time')
let reset = document.querySelector('#reset')
let isTable = document.querySelector('.isTable')
let testColor = 0
cellBtn.addEventListener('click', function stop() {
    getTable();
    let seconds = 0;
    let timerId = setInterval(function () {
        seconds++;
        time.innerHTML = "00:0" + seconds.toString();
        if (seconds >= 10) {
            time.innerHTML = '00:' + seconds.toString()
        }
        if (seconds >= 18) {
            time.classList.add('red')
        }
        if (seconds === 25) {
            clearInterval(timerId)
            time.textContent = 'Game Over'
            cellBtn.style.display = 'none'
            reset.style.display = 'block'
            isTable.style.display = 'none'
        }
        if (testColor === 5) {
            clearInterval(timerId)
            time.textContent = 'Вы справились за ' + seconds.toString() + 'сек';
            cellBtn.style.display = 'none'
            reset.style.display = 'block'
            isTable.style.display = 'none'
        }
    }, 1000);
    cellBtn.removeEventListener('click', stop)
})
tr.forEach(function (el) {
    el.addEventListener('click', function () {
        if (el.style.backgroundColor === 'white') {
            el.style.backgroundColor = 'green'
        } else {
            el.classList.add('test2')
        }
        if (el.style.backgroundColor === 'green') {
            testColor += 1;
        }
    })
})

// ! Экранная клавиатура на JavaScript

// * Давайте реализуем экранную клавиатуру.
// * На ней должны быть кнопочки со всеми буквами и
// * цифрами клавиатуры компьютера.
// * Кликая мышкой по этим кнопочкам мы сможем вводить данные,
// * например, при неработающей клавиатуре.

// ? №1

// * Реализуйте описанную клавиатуру.
// * Пусть эта клавиатура будет привязана к какому-нибудь инпуту,
// * то есть кликая по ней, мы будем вводить данные в этот инпут.

// ? №2

// * Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так,
// * чтобы все буквы переводились в верхний регистр.

let keyText = document.querySelector('#keyText');
let keyboard = document.querySelector('.keyboard');
let key = document.querySelectorAll('.key');
let CapsLock = document.querySelector('.CapsLock');
let not = document.querySelectorAll('.not');
let shift = document.querySelector('.shift');
let addShift = document.querySelectorAll('.addShift');
let isShift = document.querySelectorAll('.isSift')
key.forEach((el, i) => {
    let value = el.textContent
    el.addEventListener('click', (ev, i) => {
        if (value === 'Backspace') {
            keyText.value = keyText.value.slice(0, -1)
        } else if (value === 'Space') {
            keyText.value += ' ';
        } else if (value === 'shift') {
            shift.classList.toggle('greyColor');
            keyboard.classList.toggle('uppercase');
            not.forEach((notEl) => {
                notEl.style.textTransform = 'none'
            })
            addShift.forEach((el) => {
                el.classList.toggle('addShift');
            })
            isShift.forEach((el) => {
                el.classList.toggle('isSift2');
            })
        } else if (shift.matches('.greyColor')) {
            keyText.value += value.toUpperCase()
        } else if (value === 'CapsLock') {
            CapsLock.classList.toggle('greyColor');
            keyboard.classList.toggle('uppercase')
            not.forEach((notEl) => {
                notEl.style.textTransform = 'none'
            })
        } else if (CapsLock.matches('.greyColor')) {
            keyText.value += value.toUpperCase()
        } else if (value === 'Enter') {
            console.log(keyText.value)
            keyText.value = '';
        } else {
            keyText.value += value
        }
    })
})


// ! Линейный календарь на JavaScript

// ? №1
// * Выведите в виде списка ul все числа текущего месяца.
// * Средствами CSS поставьте пункты списка в ряд.

// ? №2
// * Сделайте так, чтобы текущий день в календаре был выделен
// * каким-нибудь цветом.

// ? №3
// * Сделайте так, чтобы над списком было написано
// * название текущего месяца по-русски и номер года.

// ? №4
// * Сделайте так, чтобы над календарем появились
// * ссылки вперед и назад, позволяющие менять месяц.
// * Месяц и год, выводимые над календарем, должны соответствовать
// * отображаемому месяцу.

let numberList = document.querySelectorAll('li');
let monthText = document.querySelector('#month');
let list = document.querySelector('.list')
let arrowRight = document.querySelector('.arrowRight');
let arrowLeft = document.querySelector('.arrowLeft');
let test31 = document.querySelector('.test31')
let test30 = document.querySelector('.test30')
let test29 = document.querySelector('.test29')
let arrMonth = ['Январь', 'Феврвль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
let data = new Date();
let year = data.getFullYear()

function calendar() {
    let month = data.getMonth();

    function lastDate() {
        let data4
        let currentMonth = new Date(year, month, 1)
        let nextMonth = new Date(year, month + 1, 1);
        return data4 = Math.round((nextMonth - currentMonth) / 1000 / 3600 / 24);
    }

    function test() {
        switch (lastDate()) {
            case 31:
                test31.style.display = 'block'
                test30.style.display = 'block'
                test29.style.display = 'block'
                break;

            case 29:
                test30.style.display = 'none'
                test31.style.display = 'none'
                break;

            case 28:
                test29.style.display = 'none'
                test30.style.display = 'none'
                test31.style.display = 'none'
                break;

            default:
                test31.style.display = 'none'
        }
    }

    numberList.forEach((el) => {
        if (+el.textContent === data.getDate()) {
            el.style.backgroundColor = 'red'
        }
    })
    for (let i = 0; i <= arrMonth.length - 1; i++) {
        if (i === data.getMonth()) {
            monthText.textContent = arrMonth[i] + ' ' + year;
            arrowRight.addEventListener('click', () => {
                if (i >= 11) {
                    i = -1
                    year += 1
                }
                monthText.textContent = arrMonth[++i] + ' ' + year;
                month = i
                lastDate();
                test()
            })
            arrowLeft.addEventListener('click', () => {
                if (i <= 0) {
                    i = 12
                    year -= 1
                }
                monthText.textContent = arrMonth[--i] + ' ' + year;
                month = i
                lastDate();
                test()
            })
        }
    }
    test()
}

calendar();


// ! Поиск тегов на JavaScript

// * Сейчас мы сделаем сайт, который будет помогать определить значение HTML тега.
// * Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега.
// * После этого по нажатию на Enter под инпутом пусть выдается описание этого тега.

// ? №1

// * Продумайте, как удобнее всего хранить имена
// * тегов и их описания в соответствии с поставленной задачей.

// ? №2

// * Реализуйте описанный сайт.

let tagText = document.querySelector('#tagText');
let descriptionTag = document.querySelector('.descriptionTag')
tagText.addEventListener('keypress', (e) => {
    for (let tagKey in tag) {
        if (e.which === 13 && tagKey === tagText.value) {
            descriptionTag.textContent = tagKey + ' - ' + tag[tagKey]
        }
    }
})

let tag = {
    DOCTYPE: 'Объявляет тип документа и предоставляет основную информацию для браузера — его язык и версия.',
    a: 'Создаёт гипертекстовые ссылки.',
    abbr: 'Определяет текст как аббревиатуру или акроним. Поясняющий текст задаётся с помощью атрибута title.',
    address: 'Задает контактные данные автора/владельца документа или статьи. Отображается в браузере курсивом.',
    area: 'Представляет собой гиперссылку с текстом, соответствующей определенной области на карте-изображении или активную область внутри карты-изображения. Всегда вложен внутрь элемента <"map">.',
    article: 'Раздел контента, который образует независимую часть документа или сайта, например, статья в журнале, запись в блоге, комментарий.',
    aside: 'Представляет контент страницы, который имеет косвенное отношение к основному контенту страницы/сайта.',
    audio: 'Загружает звуковой контент на веб-страницу.',
    b: 'Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному.',
    base: 'Задает базовый адрес (URL), относительно которого вычисляются все относительные адреса. Это поможет избежать проблем при переносе страницы в другое место, так как все ссылки будут работать, как и прежде.',
    bdi: 'Изолирует отрывок текста, написанный на языке, в котором чтение текста происходит справа налево, от остального текста.',
    bdo: 'Отображает текст в направлении, указанном в атрибуте dir, переопределяя текущее направление написания текста.',
    blockquote: ' Выделяет текст как цитату, применяется для описания больших цитат.',
    body: 'Представляет тело документа (содержимое, не относящееся к метаданным документа).',
    br: 'Перенос текста на новую строку.',
    button: 'Создает интерактивную кнопку. Элемент может содержать текст или изображение.',
    canvas: 'Холст-контейнер для динамического отображения изображений, таких как простые изображения, диаграммы, графики и т.п. Для рисования используется скриптовый язык JavaScript.',
    caption: 'Добавляет подпись к таблице. Вставляется сразу после открывающего тега <"table">.',
    cite: 'Используется для указания источника цитирования. Отображается курсивом.',
    code: 'Представляет фрагмент программного кода, отображается шрифтом семейства monospace.',
    col: 'Выбирает для форматирования один или несколько столбцов таблицы, не содержащих информацию одного типа.',
    colgroup: 'Создает структурную группу столбцов, выделяющую множество логически однородных ячеек.',
    data: 'Элемент используется для связывания значения атрибута value, которое представлено в машиночитаемом формате и может быть обработано компьютером, с содержимым элемента.',
    datalist: 'Элемент-контейнер для выпадающего списка элемента <"input">. Варианты значений помещаются в элементы <"option">.',
    dd: 'Используется для описания термина из элемента < dt >.',
    del: 'Помечает текст как удаленный, перечёркивая его.',
    details: 'Создаёт интерактивный виджет, который пользователь может открыть или закрыть. Представляет собой контейнер для контента, видимый заголовок виджета помещается в элемент <"summary">.',
    dfn: 'Определяет слово как термин,  выделяя его курсивом. Текст,  идущий следом,  должен содержать расшифровку этого термина.',
    dialog: 'Интерактивный элемент,  с которым взаимодействует пользователь для выполнения задачи,  например,  диалоговое окно,  инспектор или окно. Без атрибута open не виден для пользователя.',
    div: 'Элемент - контейнер для разделов HTML-документа.Используется для группировки блочных элементов с целью форматирования стилями.',
    dl: 'Элемент - контейнер, внутри которого находятся термин и его описание.',
    dt: 'Используется для задания термина.',
    em: 'Выделяет важные фрагменты текста, отображая их курсивом.',
    embed: 'Элемент-контейнер для встраивания внешнего интерактивного контента или плагина.',
    fieldset: 'Группирует связанные элементы в форме,  рисуя рамку вокруг них.',
    figcaption: 'Заголовок/подпись для элемента <"figure">.',
    figure: 'Самодостаточный элемент-контейнер для такого контента как иллюстрации, диаграммы, фотографии, примеры кода, обычно с подписью.',
    footer: 'Определяет завершающую область (нижний колонтитул) документа или раздела.',
    form: 'Форма для сбора и отправки на сервер информации от пользователей. Не работает без атрибута action.',
    h1: 'h1 - h6 Создают заголовки шести уровней для связанных с ними разделов.',
    head: 'Элемент-контейнер для метаданных HTML-документа, таких как <"title">, <meta>, <script>, <link>, <style>.',
    header: 'Секция для вводной информации сайта или группы навигационных ссылок. Может содержать один или несколько заголовков,  логотип,  информацию об авторе.',
    hr: 'Горизонтальная линия для тематического разделения параграфов.',
    html: 'Корневой элемент HTML-документа. Сообщает браузеру, что это HTML-документ. Является контейнером для всех остальных html-элементов.',
    i: 'Выделяет отрывок текста курсивом, не придавая ему дополнительный акцент.',
    iframe: 'Создает встроенный фрейм, загружая в текущий HTML-документ другой документ.',
    img: 'Встраивает изображения в HTML-документ с помощью атрибута src, значением которого является адрес встраиваемого изображения.',
    input: 'Создает многофункциональные поля формы, в которые пользователь может вводить данные.',
    ins: 'Выделяет текст подчеркиванием. Применяется для выделения изменений, вносимых в документ.',
    kbd: 'Выделяет текст, который должен быть введён пользователем с клавиатуры, шрифтом семейства monospace.',
    label: 'Добавляет текстовую метку для элемента <"input">.',
    li: 'Элемент маркированного или нумерованного списка.',
    link: 'Определяет отношения между документом и внешним ресурсом. Также используется для подключения внешних таблиц стилей.',
    main: 'Контейнер для основного уникального содержимого документа. На одной странице должно быть не более одного элемента <"main">.',
    map: 'Создаёт активные области на карте-изображении. Является контейнером для элементов <"area">.',
    mark: 'Выделяет фрагменты текста, помечая их желтым фоном.',
    meta: 'Используется для хранения дополнительной информации о странице. Эту информацию используют браузеры для обработки страницы, а поисковые системы — для ее индексации. В блоке <"head"> может быть несколько элементов <meta>, так как в зависимости от используемых атрибутов они несут разную информацию.',
    meter: 'Индикатор измерения в заданном диапазоне.',
    nav: 'Раздел документа, содержащий навигационные ссылки по сайту.',
    noscript: 'Определяет секцию, не поддерживающую сценарий (скрипт).',
    object: 'Контейнер для встраивания мультимедиа (например, аудио, видео, Java-апплеты, ActiveX, PDF и Flash). Также можно вставить другую веб-страницу в текущий HTML-документ. Для передачи параметров встраиваемого плагина используется элемент <"param">.',
    ol: 'Упорядоченный нумерованный список. Нумерация может быть числовая или алфавитная.',
    optgroup: 'Контейнер с заголовком для группы элементов <"option">.',
    option: 'Определяет вариант/опцию для выбора в раскрывающемся списке <"select">, <"optgroup"> или <datalist>.',
    output: 'Поле для вывода результата вычисления, рассчитанного с помощью скрипта.',
    p: 'Параграфы в тексте.',
    param: 'Определяет параметры для плагинов, встраиваемых с помощью элемента <"object">.',
    picture: ' Элемент-контейнер, содержащий один элемент <"img"> и ноль или несколько элементов <source>. Сам по себе ничего не отображает. Дает возможность браузеру выбирать наиболее подходящее изображение.',
    pre: 'Выводит текст без форматирования, с сохранением пробелов и переносов текста. Может быть использован для отображения компьютерного кода, сообщения электронной почты и т.д.',
    progress: 'Индикатор выполнения задачи любого рода.',
    q: 'Определяет краткую цитату.',
    ruby: 'Контейнер для Восточно-Азиатских символов и их расшифровки.',
    rb: 'Определяет вложенный в него текст как базовый компонент аннотации.',
    rt: 'Добавляет краткую характеристику сверху или снизу от символов, заключенных в элементе <"ruby">, выводится уменьшенным шрифтом.',
    rtc: 'Отмечает вложенный в него текст как дополнительную аннотацию.',
    rp: 'Выводит альтернативный текст в случае если браузер не поддерживает элемент <"ruby">.',
    s: 'Отображает текст, не являющийся актуальным, перечеркнутым.',
    samp: 'Используется для вывода текста, представляющего результат выполнения программного кода или скрипта, а также системные сообщения. Отображается моноширинным шрифтом.',
    script: 'Используется для определения сценария на стороне клиента (обычно JavaScript). Содержит либо текст скрипта, либо указывает на внешний файл сценария с помощью атрибута src.',
    section: 'Определяет логическую область (раздел) страницы, обычно с заголовком.',
    select: 'Элемент управления, позволяющий выбирать значения из предложенного множества. Варианты значений помещаются в <"option">.',
    small: 'Отображает текст шрифтом меньшего размера.',
    source: 'Указывает местоположение и тип альтернативных медиаресурсов для элементов <"picture">, <video>, <audio>.',
    span: 'Контейнер для строчных элементов. Можно использовать для форматирования отрывков текста, например, выделения цветом отдельных слов.',
    strong: 'Расставляет акценты в тексте, выделяя полужирным.',
    style: 'Подключает встраиваемые таблицы стилей.',
    sub: 'Задает подстрочное написание символов, например, индекса элемента в химических формулах.',
    summary: 'Создаёт видимый заголовок для элемента <"details">. Отображается с закрашенным треугольником, кликнув по которому можно просмотреть подробности заголовка.',
    sup: 'Задает надстрочное написание символов.',
    table: 'Элемент для создания таблицы.',
    tbody: 'Определяет тело таблицы.',
    td: 'Создает ячейку таблицы.',
    template: 'Используется для объявления фрагментов HTML-кода, которые могут быть клонированы и вставлены в документ скриптом. Содержимое элемента не является его дочерним элементом.',
    textarea: 'Создает большие поля для ввода текста.',
    tfoot: 'Определяет нижний колонтитул таблицы.',
    th: 'Создает заголовок ячейки таблицы.',
    thead: 'Определяет заголовок таблицы.',
    time: 'Определяет дату/время.',
    title: 'Заголовок HTML-документа, отображаемый в верхней части строки заголовка браузера. Также может отображаться в результатах поиска, поэтому это следует принимать во внимание предоставление названия.',
    tr: 'Создает строку таблицы.',
    track: 'Добавляет субтитры для элементов <"audio"> и <video>.',
    u: 'Выделяет отрывок текста подчёркиванием, без дополнительного акцента.',
    ul: 'Создает маркированный список.',
    var: 'Выделяет переменные из программ, отображая их курсивом.',
    video: 'Добавляет на страницу видео-файлы. Поддерживает 3 видео формата: MP4, WebM, Ogg.',
    wbr: 'Указывает браузеру возможное место разрыва длинной строки.',
}


// ! Поиск исторических события на JavaScript

// * Пусть мы хотим написать сайт, показывающий таблицу исторических событий за
// * определенный год. Пусть год будет, вводится в инпут. По нажатию Enter давайте
// * выведем таблицу событий, случившихся в этот год. Пусть в качестве информации о событии мы
// * хотим видеть дату, название и описание события.

// ? №1

// * Продумайте, как удобнее всего хранить исторические события.

// ? №2

// * Реализуйте описанный сайт.

let input = document.querySelector('#input');
let table = document.querySelector('#table');
// let td = document.querySelector('td')
let dateEvent = {
    2000: [{
        date: '01.01.2001', event: 'XXI век', descrip: 'Начался XXI век и третье тысячелетие. '
    }, {
        date: '11.09.2001',
        event: 'Терракт',
        descrip: 'Крупнейший террористический акт в США и один из крупнейших в мировой истории. Уничтожен Всемирный торговый центр, повреждён Пентагон, погибло около трёх тысяч человек.'
    }, {
        date: '07.10.2001', event: 'Война', descrip: 'Начало войны в Афганистане'
    }, {
        date: '25.10.2001', event: 'Windows', descrip: 'Выпуск Windows XP'
    }], 2001: [{
        date: '01.01.2001', event: 'XXI век', descrip: 'Начался XXI век и третье тысячелетие. '
    }, {
        date: '11.09.2001',
        event: 'Терракт',
        descrip: 'Крупнейший террористический акт в США и один из крупнейших в мировой истории. Уничтожен Всемирный торговый центр, повреждён Пентагон, погибло около трёх тысяч человек.'
    }, {
        date: '07.10.2001', event: 'Война', descrip: 'Начало войны в Афганистане'
    }, {
        date: '25.10.2001', event: 'Windows', descrip: 'Выпуск Windows XP'
    }], 2002: [{
        date: '01.01.2002', event: 'Евро', descrip: 'Введение банкнот и монет евро в Европейском союзе.'
    }, {
        date: '08.02 по 24.02.2002',
        event: 'Олимпийские игры',
        descrip: 'IX зимние Олимпийские игры (Солт-Лейк-Сити, США).'
    }, {
        date: '20.05.2002', event: 'Независимость', descrip: 'Восточный Тимор получил независимость от Индонезии.'
    }], 2003: [{
        date: '01.03.2003', event: 'Колумбия', descrip: 'Катастрофа шаттла «Колумбия».'
    }, {
        date: '08.02.2003', event: 'Война', descrip: 'Начало войны в Ираке.'
    }, {
        date: '20.05.2003', event: 'Независимость', descrip: 'Восточный Тимор получил независимость от Индонезии.'
    }], 2004: [{
        date: '04.02.2004', event: 'Facebook', descrip: 'Создание Facebook.'
    }, {
        date: '13 по 29.02.2004', event: 'Олимпийские игры', descrip: 'XXVIII летние Олимпийские игры в Афинах.'
    }, {
        date: '22.11.2004 по 08.12.2004', event: 'Украина', descrip: '«Оранжевая революция» на Украине.'
    }, {
        date: '26.12.2004',
        event: 'Землетрясение',
        descrip: 'землетрясение в Индийском океане вызвало цунами, погибло 230 тысяч человек.'
    }], 2005: [{
        date: '07.02.2005',
        event: 'Великобритания',
        descrip: 'Эллен Макартур (Великобритания) установила новый мировой рекорд для кругосветного плавания в одиночку на парусном тримаране — 71 сутки 14 часов 18 минут и 33 секунды. Она была в пути с 28 ноября 2004 года.'
    }, {
        date: '14.02.2005', event: 'YouTube', descrip: 'создание YouTube.'
    },], 2006: [{
        date: '10 по 26.02.2006', event: 'Олимпийские игры', descrip: 'XX зимние Олимпийские игры в Турине (Италия).'
    }, {
        date: '03.06.2006',
        event: 'Черногория',
        descrip: 'Черногория получила независимость на референдуме и стала 192-м членом ООН.'
    }, {
        date: '24.08.2006', event: 'Планеты', descrip: 'Плутон лишён статуса планеты.'
    },], 2007: [{
        date: '09.01.2007', event: 'Apple', descrip: 'компания Apple представила iPhone первого поколения.'
    }, {
        date: '20.01.2007', event: 'Windows', descrip: 'Выпуск Windows Vista.'
    },],
}

function getEvent() {
    input.addEventListener('keypress', (e) => {
        if (e.which === 13) {
            let year = input.value;
            if (dateEvent[year]) {
                table.textContent = '';
                for (let elEvent of dateEvent[year]) {
                    let tr = document.createElement('tr');
                    let td;
                    td = document.createElement('td');
                    td.textContent = elEvent.date
                    tr.append(td);

                    td = document.createElement('td');
                    td.textContent = elEvent.event
                    tr.append(td);

                    td = document.createElement('td');
                    td.textContent = elEvent.descrip
                    tr.append(td);
                    table.append(tr);
                }
            }
        }
    })
}

getEvent();

// ! Гороскоп на JavaScript

// * Сейчас мы реализуем сайт-гороскоп.
// * Этот сайт будет выдавать гороскопы на сегодня.
// * Пусть пользователь по заходу на сайт видит инпут,
// * в который нужно вбить дату своего рождения. Пусть по нажатию Enter наш сайт
// * выдаст пользователю гороскоп на текущий день за его знак Зодиака.
// ? **********
// * Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра.
// * Сделаем так, чтобы в зависимости от выбора выводился гороскоп на
// * соответствующий день. Очевидно, что по умолчанию будет выбрано
// * сегодня, но пользователь при желании может изменить свой выбор.

// ? №1

// * Продумайте, как вы будете хранить гороскопы в
// * соответствии с поставленной задачей.

// ? №2

// * Реализуйте показ гороскопа за текущий день.

// ? №3

// * А теперь реализуйте работу радиокнопок, позволяющих выбрать день,
// * за который нужно показать гороскоп.

let today = document.querySelector('#today');
let tomorrow = document.querySelector('#tomorrow');
let afterTomorrow = document.querySelector('#afterTomorrow');
let radio = document.getElementsByName('contact')
let horoscopeInp = document.querySelector('#horoscopeInp');
let horoscopeText = document.querySelector('.horoscopeText');
let text = document.querySelector('#text');

let test = {
    '01.21': {
        'Водолей': {
            today: 'Этот день не обойдется без сюрпризов. Скорее всего, ' + 'планы придется менять часто: многое будет идти совсем не так,' + ' как вы ожидали. Важную роль сыграет неожиданная встреча или знакомство' + ' с человеком, о котором вы раньше много слышали. Не исключено ' + 'и получение чрезвычайно важной информации. Она поможет принять ' + 'верное решение, подскажет, как лучше действовать.\n' + '\n' + 'Вероятны спонтанные покупки. Незапланированные расходы чаще' + ' всего будут вызваны вашим желанием порадовать близких. Жалеть' + ' о таких тратах не придется.',
            tomorrow: 'Сегодня особенно полезно думать о будущем и строить планы. Вы проявите завидную предусмотрительность, быстро догадаетесь, как будут развиваться события и что предпримут окружающие. Идеи, которыми вы поделитесь, многих удивят. Но едва ли кто-то будет мешать вам осуществить задуманное.\n' + '\n' + 'Старайтесь больше времени проводить с теми, кто понимает и поддерживает вас. Общение с людьми, привыкшими критиковать все вокруг и делать саркастические замечания по любому поводу, может надолго испортить настроение. Держитесь от таких особ подальше, и день пройдет очень приятно.',
            afterTomorrow: 'Неделя подойдет для того, чтобы реализовать старые идеи, воплотить в жизнь то, что было задумано давным-давно.\n' + '\n' + 'Будет возможность восстановить старые связи. Если вы обратитесь за помощью или поддержкой к людям, с которыми когда-то вместе учились или работали, они не откажут. Но и новые знакомые могут сделать для вас что-то полезное. Правда, сначала вам нужно будет найти с ними общий язык. Это будет не так-то просто, поскольку людей вы на этой неделе встретите очень необычных, совсем не похожих на тех, кого вы знали раньше. Поладить с ними поможет интуиция.\n' + '\n' + 'Если вы сосредоточитесь на работе, то наверняка добьетесь в ней заметных успехов. Руководство поймет, на что вы способны, и вскоре у вас появится шанс подняться по карьерной лестнице. Пока же больше внимания нетипичным задачам, старайтесь чаще отвлекаться от рутины и подходить к любым делам творчески.',
        },
    }, '02.21': {
        'Рыбы': {
            today: 'Сегодня вы будете особенно внимательны к мелочам, серьезны и подозрительны. Это значит, что никто не сможет обвести вас вокруг пальца, обмануть или запутать. Однако из-за долгих сомнений вы рискуете упустить какую-то интересную возможность. Имейте в виду: там, где речь пойдет исключительно о достижении ваших личных целей, лучшие решения придут в голову первыми.\n' + '\n' + 'День подойдет для общения с давними знакомыми, восстановления старых связей. Приятно будет поговорить с теми, от кого вы в последнее время не получали известий. Возможны хорошие новости, неожиданные подарки.',
            tomorrow: 'Тратить время напрасно не захочется, удастся сделать много полезного и для себя, и для других. Интуиция подскажет, с чего начать и куда двигаться дальше, и вы обязательно к ней прислушаетесь. Не исключено, что у вас появится возможность реализовать какие-то старые идеи, осуществить то, что было задумано давным-давно. Тут потребуются некоторые усилия, но все получится просто отлично!\n' + '\n' + 'В первой половине дня вы вряд ли будете расположены к общению. А вот вторая подойдет встреч и разговоров с самыми разными людьми. Возможно, у вас появятся новые друзья.',
            afterTomorrow: 'Вам едва ли захочется придерживаться старых планов. Гораздо интереснее будет пробовать что-то новое, воплощать в жизнь идеи, появившиеся совсем недавно. Эксперименты и импровизации будут удачными, благодаря умению быстро ориентироваться в ситуации вы добьетесь отличных результатов. Однако забывать об осторожности не стоит, как и рассчитывать на то, что звезды поддержат любые ваши начинания, даже самые безумные и рискованные. Руководствуйтесь здравым смыслом, обращайте внимание на советы тех, кто хорошо вас знает. Это позволит избежать многих неприятных моментов.\n' + '\n' + 'Неделя будет благоприятной для общения. Рядом с вами всегда будут люди, готовые поддержать и помочь, если это требуется. Возможно начало деловых отношений, которые вскоре примут неформальный характер, станут более теплыми и непринужденными.\n' + '\n' + 'Дела могут отнимать больше времени и энергии, чем обычно. Не забывайте делать паузы для отдыха. Это позволит сохранить позитивный настрой до конца недели.',
        },
    }, '03.21': {
        'Овен': {
            today: 'Планируя какие-то дела на сегодняшний день,\n' + 'внесите поправку, которая позволила бы вам скользить по графику.\n' + 'Вам наверняка придется что-то спешно менять.',
            tomorrow: 'Лучше не доверять первому впечатлению ни о людях, с которыми вы встретитесь, ни о делах, которыми нужно будет заняться. Потребуется время, чтобы понять, с кем вы имеете дело и как решать возникающие задачи. Так что запаситесь терпением и старайтесь обращать внимание на мелкие детали. Умение не только собирать информацию, но и делать из нее правильные выводы, вам очень пригодится.\n' + '\n' + 'Друзья и другие близкие люди охотно поддержат вас, помогут советом, если это потребуется. А еще они могут поделиться отличными идеями или вдохновляющими новостями.',
            afterTomorrow: 'Скучать не придется, день вас ждет яркий и интересный. Вероятны какие-то неожиданные события, приятные сюрпризы. Некоторые Овны получат вдохновляющие известия издалека или предложения, от которых не захотят отказаться. Вы во многих делах добьетесь успеха благодаря умению прислушиваться к хорошим советам и на лету подхватывать стоящие идеи.\n' + '\n' + 'Ваша фантазия и творческий подход к решению любых вопросов сегодня удивят многих. Люди, прежде недооценивавшие ваши таланты, поймут, как сильно ошибались. А те, кто прежде держался холодно и отстраненно, постараются с вами подружиться.',
        },
    }, '04.21': {
        'Телец': {
            today: 'Сегодня надо быть особенно честным во всем и со всеми, \n' + 'особенно с самим собой. Оно, конечно, всегда полезно, \n' + 'но иногда очень уж сильно искушение...',
            tomorrow: 'День будет не самым простым, но пройдет очень плодотворно. Да, проблемы могут возникнуть, причем, скорее всего, там, где никто их не ожидал. Но пока остальные будут пребывать в растерянности, вы найдете выход из положения и начнете действовать. Благодаря опыту, полученному давным-давно, вы быстро возьмете ситуацию под контроль и достигнете цели.\n' + '\n' + 'Многим потребуется ваша помощь. Вы постараетесь никому не отказывать, при этом не забыв и о собственных интересах. Все, что вы сегодня будете делать для других, вам тоже пойдет на пользу.',
            afterTomorrow: 'День не принесет трудностей, многое будет складываться хорошо. Утром дел может оказаться больше, чем вы ожидали, однако справиться с ними удастся быстро. Вы не станете тратить время напрасно, постараетесь не упустить ни одной интересной возможности, вовремя проявите инициативу и добьетесь успеха.\n' + '\n' + 'Вторая половина дня будет особенно благоприятной для семейных мероприятий, встреч с родственниками, а также обсуждения домашних дел. Не исключены денежные поступления и полезные подарки. Расходы тоже возможны, однако они едва ли будут значительными. ',
        },
    }, '05.21': {
        'Близнецы': {
            today: 'Сегодня вам стоит слегка умерить гордыню.\n' + 'Демонстрация легкого смирения иногда идет делам на пользу. \n' + 'Заодно и парочку конфликтов разрешите.',
            tomorrow: 'День можно начать с решения серьезных вопросов, касающихся работы, бизнеса или финансов. Вы не станете строить иллюзий, будете внимательны и ничего не упустите из виду, поэтому и ошибок не сделаете. Некоторые Близнецы поймут, что нужно сделать, чтобы увеличить доходы, и сразу начнут двигаться к этой цели.\n' + '\n' + 'Вторая половина дня подойдет для общения с друзьями и хорошими знакомыми, встреч в неформальной обстановке. Легко будет и поладить с теми, с кем вы сегодня встретитесь впервые, и восстановить какие-то старые связи.',
            afterTomorrow: 'Смело беритесь за новые дела: справитесь вы с ними сегодня просто отлично. Не придется тратить много времени на то, чтобы научиться чему-то полезному. Все, что нужно, вы запомните с первого раза. Нетрудно будет и найти помощников, если они потребуются. Среди ваших новых знакомых могут оказаться люди, способные преодолеть любые трудности.\n' + '\n' + 'Не исключено, что нужно будет отправиться в небольшое путешествие, причем узнаете вы об этом в последний момент, так что собираться придется быстро. Поездка в любом случае окажется приятной, подарит массу ярких впечатлений.',
        },
    }, '06.22': {
        'Рак': {
            today: 'Нынче вы будете очень коммуникабельны.\n' + 'Так что если вы собираетесь устраиваться на работу,\n' + 'где это качество немаловажно - спешите попасть на\n' + 'собеседование сегодня. Возьмут.',
            tomorrow: 'Начало дня порадует. Обстоятельства будут складываться удачно, благодаря поддержке звезд вы быстро справитесь со сложными делами, поймете, как решать задачи, прежде всех ставившие в тупик. Это время подойдет для того, чтобы взяться за что-то новое. Вы легко найдете помощников, поддержать вас захотят даже люди, отношения с которыми прежде складывались непросто.\n' + '\n' + 'Вторая половина дня подойдет для учебы, а также любых занятий, требующих сосредоточенности и внимательности. Можно собирать и анализировать информацию, сопоставлять факты и делать выводы – с этим никто не справится лучше, чем вы. А вот общение с новыми знакомыми порой будет даваться нелегко.',
            afterTomorrow: 'Старайтесь сохранять спокойствие. День будет отличаться довольно напряженным эмоциональным фоном. Вы можете остро реагировать на мелочи, близко к сердцу принимать любые незначительные события. Постарайтесь настроиться на позитивный лад; именно с этого начнутся перемены к лучшему.\n' + '\n' + 'Это подходящий день для полезных дел, в которых вам не потребуется ничья помощь. Вы многого добьетесь, если не станете тратить время на долгие обсуждения, споры о мелких деталях. Вечер порадует хорошими новостями, касающимися кого-то из близких.',
        },
    }, '07.23': {
        'Лев': {
            today: 'Сегодня вам, похоже, придется забыть о личной жизни. \n' + 'Кто-то позовет вас на помощь, и вы целый день будете добросовестно\n' + 'заниматься чужими проблемами.',
            tomorrow: 'Обязательно обратите внимание на идеи, которые появятся в первой половине дня. Они могут показаться слишком смелыми, почти фантастическими, и поэтому не всем понравятся. Но возможность реализовать задуманное у вас обязательно появится. Постарайтесь не забыть (а лучше запишите), что вы придумали.\n' + '\n' + 'День будет насыщенным. Наверняка появится несколько новых задач, так что заниматься вам предстоит несколькими делами сразу. Это будет нелегко, так что к вечеру может накопиться усталость. Однако она не помешает вам приятно провести время с друзьями или другими близкими людьми.',
            afterTomorrow: 'Вы успеете сделать гораздо больше, чем планировали, и даже особенно торопиться для этого не придется. Обстоятельства будут складываться удачно, а вы не упустите свой шанс достичь давно поставленной цели. День подойдет для покупок; можно приобретать подарки для близких.\n' + '\n' + 'Вероятны незапланированные встречи, не исключено знакомство с человеком, который сразу вам понравится. Могут начаться и дружеские, и романтические отношения. Тут все будет зависеть от того, как вы себя поведете. Вечер подойдет для общения с любимым человеком, свидания в каком-то необычном месте.',
        },
    }, '08.24': {
        'Дева': {
            today: 'Сегодняшний день принесет вам какие-то перемены, точнее, \n' + 'возможность что-либо переменить. Подобной возможностью \n' + 'грех не воспользоваться.',
            tomorrow: 'Едва ли вам придется всерьез о чем-то волноваться; куда вероятнее, что день пройдет очень спокойно. Он подойдет для занятий, требующих сосредоточенности. Никто не станет отвлекать вас, поэтому удастся быстро со всем справиться, не допустить ошибок. Благоприятным день будет и для работы с документами, и для решения организационных вопросов.\n' + '\n' + 'Общение с самыми близкими людьми порадует. А вот на многолюдных мероприятиях вы можете чувствовать себя не очень хорошо. Прислушивайтесь к себе и старайтесь не задерживаться надолго там, где вам не нравится, – это позволит избежать неприятных моментов.',
            afterTomorrow: 'Если вы запланировали на этот день что-то важное, старайтесь действовать осторожно и не принимать серьезных решений сгоряча. Если вы не станете спешить, то увидите возможности, которых прежде никто не замечали. Будет шанс исправить ошибки, допущенные раньше, и вы не упустите его.\n' + '\n' + 'В отношениях, которые прежде складывались напряженно, вероятны перемены к лучшему. Во многом это будет вашей заслугой: вы прислушаетесь к интуиции и найдете подход к тому, с кем раньше было трудно ладить.',
        },
    }, '09.24': {
        'Весы': {
            today: 'Ваша способность видеть и чувствовать то, \n' + 'что другие заметить не могут, сегодня усилится под \n' + 'влиянием Луны. Если что-то до сих пор и оставалось\n' + 'для вас загадкой, то нынче вы наверняка найдете ответ.',
            tomorrow: 'День отлично подойдет для того, чтобы заниматься привычными делами, решать знакомые задачи. Тут не будет неприятных сюрпризов или неожиданных трудностей. Также можно вернуться к вопросам, которые вы уже не раз безуспешно пытались решить. На этот раз звезды будут на вашей стороне, все сложится удачно.\n' + '\n' + 'Легко будет ладить с коллегами. Важные беседы с руководством лучше планировать на вторую половину дня – в это время вы сможете быстро обо всем договориться. А вот общение с близкими всегда будет очень приятным.',
            afterTomorrow: 'День может начаться не слишком удачно. Возможны мелкие недоразумения, происшествия, из-за которых нужно будет изменить планы. Постарайтесь не принимать важных решений хотя бы до полудня: вам непросто будет правильно оценить ситуацию, догадаться, какие последствия могут иметь ваши действия. Подождите немного, очень скоро все прояснится.\n' + '\n' + 'Во второй половине дня влияние позитивных тенденций усилится, это будет заметно во всех сферах жизни. Некоторые Весы получат приятные известия от старых друзей. Не исключены и предложения, от которых не захочется отказываться.',
        },
    }, '10.24': {
        'Скорпион': {
            today: 'Нынче вы будете много думать о будущем - своем, своих детей,\n' + 'всего человечества. Утром, уходя из дома, прихватите с собой\n' + 'какую-нибудь научно-фантастическую книгу, подобного рода литература\n' + 'доставит вам сегодня наибольшее удовольствие.',
            tomorrow: 'Сегодня вы будете принимать близко к сердцу даже то, чего в другое время просто не заметили бы. Незначительное событие может надолго вывести из равновесия, а мелкое недоразумение покажется некоторым Скорпионам серьезной проблемой. Однако рядом будут люди, которые поддержат и вдохновят вас, помогут настроиться на позитивный лад.\n' + '\n' + 'Дома возможны мелкие недоразумения. Не исключены бытовые проблемы, например, поломка какой-то бытовой техники. С такими трудностями вы быстро справитесь. Вероятны приятные события в семье, хорошие новости, касающиеся близких.',
            afterTomorrow: 'День будет довольно беспокойным, но удачным. Лучше начинать его с решения знакомых задач. Подходящий момент для того, чтобы взяться за что-то новое, наступит чуть позже. Не исключены приятные знакомства, встречи с людьми, о которых вы раньше много слышали.\n' + '\n' + 'Во второй половине дня дел будет особенно много, придется думать о нескольких вещах сразу. Вы будете внимательны, ничего не перепутаете и не упустите из виду. К вечеру накопится усталость, захочется отвлечься от забот. И такая возможность у вас наверняка появится!',
        },
    }, '11.23': {
        'Стрелец': {
            today: 'Торопиться не нужно. У вас будет гораздо больше шансов достичь цели, если двигаться к ним вы станете осторожно и не спеша, избегая суеты и не совершая необдуманных поступков. Придерживаться планов, составленных раньше, вероятно, не удастся. Но у вас будет достаточно времени на то, чтобы обдумать сложившуюся ситуацию и понять, на чем нужно сосредоточиться сейчас.\n' + '\n' + 'Окружающие могут вмешиваться в ваши дела гораздо чаще, чем обычно. Поначалу это будет раздражать, но очень скоро вы поймете, как извлечь пользу из происходящего.',
            tomorrow: 'Сегодня вы будете более решительны, чем обычно, и столь же вспыльчивы. Постарайтесь не совершать необдуманных поступков! Вам потребуется время, чтобы оценить ситуацию, понять, какие последствия могут иметь ваши действия и слова. Стоит прислушаться к советам давним знакомых: не исключено, что они располагают какой-то важной информацией.\n' + '\n' + 'Вы отлично справитесь с делами, требующими творческого подхода. Нужно придумать что-то новое? С этим никто не справится лучше, чем вы! Появятся такие идеи, которые больше никому не пришли бы в голову. Вскоре найдутся желающие помочь вам в осуществлении задуманного.',
            afterTomorrow: 'Начало недели будет интересным и приятным. Даже если ничего особенного в это время не произойдет, вы почувствуете, что большие перемены не за горами. И интуиция вас не обманет: это действительно так. Полезно будет завершить начатые дела, разобраться с тем, что вы долго откладывали. Тогда чуть позже вы с удовольствием переключитесь на что-то совершенно новое.\n' + '\n' + 'Будет много необычных встреч. Даже Стрельцы, у которых масса жизненного опыта, многое узнают о людях, по-иному взглянут на ситуации, казавшиеся простыми и однозначными. Станет проще найти подход к тем, с кем вы прежде не ладили.\n' + '\n' + 'Вам удастся с новыми целями, расставить приоритеты. Не исключено, что вы поймете, что много времени потратили напрасно. Но не поздно все исправить: если вы быстро перейдете от планирования к конкретным действиям, то не пожалеете об этом.',
        },
    }, '12.22': {
        'Козерог': {
            today: 'Начало дня подойдет для того, чтобы обдумать какие-то серьезные вопросы. Решения, которые вы примете самостоятельно, окажутся верными. Советам окружающих не всегда стоит следовать: сегодня их особенно часто будут давать люди, которые плохо разбираются в ситуации или просто находятся в плену своих иллюзий.\n' + '\n' + 'Вторая половина дня будет легкой и приятной. Могут неожиданно появиться новые дела и задачи, но вы быстро с ними справитесь. Не возникнет проблем в общении с близкими. Вы о многом договоритесь, избежав разногласий и споров.',
            tomorrow: 'Хотите быстро справиться с важным делом? Тогда не стройте иллюзий, смотрите на вещи реально. Если вы правильно оцените свои возможности, то не допустите ошибок, которые могли бы дорого обойтись. Постарайтесь избежать хаоса и неразберихи. Если у вас будет хорошо продуманный план действий, многое будет даваться проще.\n' + '\n' + 'Отлично пройдут семейные мероприятия, не будет поводов для разногласий и споров с родственниками. Могут неожиданно зайти в гости люди, по которым вы в последнее время очень скучали. Общение с ними будет очень приятным!',
            afterTomorrow: 'На этой неделе вы чаще, чем обычно, будете размышлять о будущем, тревожиться о том, что может случиться или с нетерпением ждать каких-то событий. Следите за тем, чтобы это не отвлекало вас от текущих дел, не заставляло выходить из привычного графика. Постарайтесь сдержать все обещания, которые дали раньше, не нарушить договоренностей.\n' + '\n' + 'Первые дни недели пройдут относительно спокойно, а вот в середине ее могут произойти неожиданные события. Появятся новые задачи, требующие решения, работы станет больше. Вы неплохо со всем справитесь. Однако постарайтесь не погружаться в дела с головой. Полезно будет отдохнуть и сменить обстановку, отправиться в небольшую поездку вместе с друзьями.\n' + '\n' + 'Конец недели принесет хорошие новости. Не всегда они будут касаться вас лично, но настроение в любом случае заметно улучшится.',
        },
    }
}

function enter(e) {
    horoscopeInp.addEventListener('keypress', (e) => {
        if (e.which === 13) {
            horoscope(test);
        }
    })
}

enter(); // вспомогательная функция

function horoscope(obj) {
    // console.log('работает');
    for (let objKey in obj) {
        if (horoscopeInp.value >= '01.21' && horoscopeInp.value <= '02.20') {
            if (objKey >= '01.21' && objKey <= '02.20') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Водолей 01.21 - 02.20
                }
            }
        } else if (horoscopeInp.value >= '02.21' && horoscopeInp.value <= '03.20') {
            if (objKey >= '02.21' && objKey <= '03.20') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Рыбы 02.21 - 03.20
                }
            }
        } else if (horoscopeInp.value >= '03.21' && horoscopeInp.value <= '04.20') {
            if (objKey >= '03.21' && objKey <= '04.20') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Овен 03.21 - 04.20
                }
            }
        } else if (horoscopeInp.value >= '04.21' && horoscopeInp.value <= '05.20') {
            if (objKey >= '04.21' && objKey <= '05.20') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    } // Телец 04.21 - 05.20
                }
            }
        } else if (horoscopeInp.value >= '05.21' && horoscopeInp.value <= '06.21') {
            if (objKey >= '05.21' && objKey <= '06.21') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Близнецы 05.21 - 06.21
                }
            }
        } else if (horoscopeInp.value >= '06.22' && horoscopeInp.value <= '07.22') {
            if (objKey >= '06.22' && objKey <= '07.22') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Рак 06.22 - 07.22
                }
            }
        } else if (horoscopeInp.value >= '07.23' && horoscopeInp.value <= '08.23') {
            if (objKey >= '07.23' && objKey <= '08.23') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Лев 07.23 - 08.23
                }
            }
        } else if (horoscopeInp.value >= '08.24' && horoscopeInp.value <= '09.23') {
            if (objKey >= '08.24' && objKey <= '09.23') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Дева 08.24 - 09.23
                }
            }
        } else if (horoscopeInp.value >= '09.24' && horoscopeInp.value <= '10.23') {
            if (objKey >= '09.24' && objKey <= '10.23') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Весы 09.24 - 10.23
                }
            }
        } else if (horoscopeInp.value >= '10.24' && horoscopeInp.value <= '11.22') {
            if (objKey >= '10.24' && objKey <= '11.22') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Скорпион 10.24 - 11.22
                }
            }
        } else if (horoscopeInp.value >= '11.23' && horoscopeInp.value <= '12.21') {
            if (objKey >= '11.23' && objKey <= '12.21') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Стрелец 11.23 - 12.21
                }
            }
        } else if (horoscopeInp.value >= '12.22' && horoscopeInp.value <= '12.31' || horoscopeInp.value >= '01.01' && horoscopeInp.value <= '01.20') {
            if (objKey >= '12.22') {
                let el = obj[objKey]
                for (let elem in el) {
                    text.textContent = elem
                    let content = el[elem]
                    for (let contentKey in content) {
                        for (let elem of radio) {
                            if (elem.checked) {
                                if (contentKey === elem.value) {
                                    horoscopeText.textContent = content[contentKey]
                                }
                            }
                        }
                    }
                    // Козерог 12.22 - 01.20
                }
            }
        }
    }
}


// ! Сайт предсказаний на JavaScript

// * Сейчас мы сделаем сайт, который будет выдавать предсказания.
// * Пусть на этом сайте будет кнопка, по нажатию на которую будет
// * запускаться таймер, который будет каждые 0.1 секунд выводить
// * в какой-нибудь див случайное число от 1 до некоторого максимального.
// * Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер
// * и зафиксировать некоторое число в диве. Это число будет номером предсказания. После этого покажите пользователю
// * предсказание с этим номером, а все лишние кнопки уберите с экрана,
// * чтобы пользователь не мог получить еще одно предсказание. То есть на один заход на сайт - одно предсказание.

// ? №1

// * Продумайте, как удобнее хранить предсказания.

// ? №2

// * Реализуйте описанный сайт.

// ? №3

// * Сделайте так, чтобы предсказания были двух видов: хорошие и плохие.
// * Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.

let button = document.querySelector('.button');
let button2 = document.querySelector('.button2');
let numTimer = document.querySelector('.numTimer');
let predictionsText = document.querySelector('.predictionsText');


let predictions = {
    test1: ['у вас сегодня будет замечательный день', 'сегодня лучше не выходите из дома', 'сегодня вас ждет удача и успех во всех начинаниях', 'сегодня вас ждет успех при изучении JavaScript', 'сегодня лучше полежите весь день на диване', 'сегодня вы рискуете что-нибудь забыть при выходе из дома', 'устройте сегодня себе выходной - пусть весь мир подождет'],
    test2: ['У вас не удачный день', 'Вам предстоит потратить много денег в пустую', 'Вы какашка', 'Не стоило заходить на этот сайт', 'Уйдите с сайта вам тут делать не чего', 'Вы слюнтяй',],
    test3: ['У вас просто не хватает везения', 'Попробуйте еще', 'Вам не стоит крутить это колесо', 'Что то пошло не поплачу попробуйте еще раз',]
}
let random;
let arr1;
let timerId;
let testArr;

function starts() {
    button.addEventListener('click', () => {
        arr1 = Object.values(predictions);
        testArr = Math.floor(Math.random() * arr1.length);
        if (testArr === 1) {
            predictionsText.style.color = 'red';
        } else if (testArr === 0) {
            predictionsText.style.color = 'green'
        } else if (testArr === 2) {
            predictionsText.style.color = 'blue'
        }
        button.style.display = 'none';
        button2.style.display = 'block';
        timerId = setInterval(function () {
            numTimer.textContent = random = getRandomInt(1, arr1[testArr].length);
        }, 100);
    })
    button2.addEventListener('click', () => {
        button2.style.display = 'none';
        numTimer.style.display = 'none';
        clearInterval(timerId);
        predictionsText.textContent = arr1[testArr][random - 1];
    })
}

starts();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ! Автодополнение на JavaScript

// * Сейчас мы реализуем автодополнение. Под этим термином понимается
// * выпадающая подсказка при вводе текста в инпут. Давайте посмотрим на примере.
// * Ниже я сделал инпут, в который можно ввести название страны. При этом, если
// * ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на
// * введенную строку.
// * При желании можно, чтобы не вводить целиком имя страны,
// * кликнуть мышкой на любую страну и она появится в инпуте.
// * Для этого, в общем-то, автодополнение и нужно. В примере для простоты я сделал
// * только три страны: Belarus, Belgium и Bulgaria. Введите в приведенный ниже инпут сначала символ
// * 'В' английское, а потом 'e' и посмотрите, что будет:

let elemInput = document.querySelector('#elem');
let elemList = document.querySelector('#list');

let arrCountry = ['Abkhazia', 'Australia', 'Austria', 'Azerbaijan', 'Aland Islands', 'Albania', 'Algeria', 'Anguilla', 'Angola', 'Andorra', 'Argentina', 'Armenia', 'Aruba', 'Afghanistan', 'Bahamas', 'Bangladesh', 'Barbados', 'Bahrain', 'Belarus', 'Belize', 'Belgium', 'Benin', 'Bulgaria', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Burundi', 'Bhutan', 'Vatican City', 'United Kingdom', 'Hungary', 'Venezuela', 'Timor, East', 'Viet Nam', 'Gabon', 'Haiti', 'Gambia', 'Ghana', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Germany', 'Gibraltar', 'Hong Kong', 'Honduras', 'Grenada', 'Greenland', 'Greece', 'Georgia', 'Guam', 'Denmark', 'Dominica', 'Dominican Republic', 'Egypt', 'Zambia', 'Western Sahara', 'Zimbabwe', 'Israel', 'India', 'Indonesia', 'Jordan', 'Iraq', 'Iran', 'Ireland', 'Iceland', 'Spain', 'Italy', 'Yemen', 'Kazakhstan', 'Cambodia', 'Cameroon', 'Canada', 'Qatar', 'Kenya', 'Cyprus', 'Kyrgyzstan', 'Kiribati', 'China', 'Colombia', 'Korea, D.P.R.', 'Korea', 'Costa Rica', 'Cuba', 'Kuwait', 'Lao P.D.R.', 'Latvia', 'Lesotho', 'Liberia', 'Lebanon', 'Libyan Arab Jamahiriya', 'Lithuania', 'Liechtenstein', 'Luxembourg', 'Mauritius', 'Mauritania', 'Madagascar', 'Macedonia', 'Malawi', 'Malaysia', 'Mali', 'Maldives', 'Malta', 'Morocco', 'Mexico', 'Mozambique', 'Moldova', 'Monaco', 'Mongolia', 'Namibia', 'Nepal', 'Niger', 'Nigeria', 'Netherlands', 'Nicaragua', 'New Zealand', 'Norway', 'United Arab Emirates', 'Oman', 'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Poland', 'Portugal', 'Russia', 'Romania', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Singapore', 'Syrian Arab Republic', 'Slovakia', 'Slovenia', 'Somalia', 'Sudan', 'USA', 'Tajikistan', 'Thailand', 'Tanzania', 'Togo', 'Tunisia', 'Turkmenistan', 'Turkey', 'Uganda', 'Uzbekistan', 'Ukraine', 'Uruguay', 'Micronesia', 'Fiji', 'Philippines', 'Finland', 'France', 'Croatia', 'Chad', 'Montenegro', 'Czech Republic', 'Chile', 'Switzerland', 'Sweden', 'Sri Lanka', 'Ecuador', 'Eritrea', 'Estonia', 'Ethiopia', 'South Africa', 'Jamaica', 'Japan'];

function isInput(arr) {
    elemInput.addEventListener('input', () => {
        elemList.textContent = '';
        if (elemInput.value !== '') {
            let newArr = arrCountry.filter(el => el.startsWith(elemInput.value))
            if (newArr.length > 0) {
                for (let string of newArr) {
                    let li = document.createElement('li');
                    li.textContent = string
                    elemList.append(li);
                    li.addEventListener('click', () => {
                        elemInput.value = li.textContent;
                        elemList.textContent = '';
                    })
                }
            }
        }
    })
}

isInput();


// ! Спойлер на JavaScript
// * Сейчас мы научимся делать спойлеры. Под спойлерами я понимаю блоки,
// * которые можно развернуть, либо свернуть с помощью специальной ссылки.

let linkSpoiler = document.querySelectorAll('.toggle');
let spoiler = document.querySelector('.spoiler');
linkSpoiler.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        el.nextElementSibling.classList.toggle('active');
    })
})


// !  Вкладки на JavaScript

// * Давайте теперь обсудим то, как решать эту задачу.
// * Очевидно, что нужно как-то связать ссылки
// * с соответствующими им вкладками. В данном "уроке" из теоретического
// * учебника мы уже разбирали возможные варианты.
// * В данном случае я предлагаю связать ссылки и вкладки просто по позиции:
// * первая ссылка будет открывать первую вкладку, вторая ссылка - вторую вкладку
// * и так далее.
// * Общий алгоритм будет выглядеть так: по нажатию на кнопку мы должны найти ссылку
// * с классом и убрать ей этот класс. Аналогичным образом мы должны найти вкладку с
// * этим классом и тоже убрать ей этот класс.
// * Затем мы должны взять ссылку, на которую был клик и активировать ее.
// * Затем мы должны взять вкладку, которая имеет такой же номер, как и наша
// * ссылка - и тоже активировать ее.

let linkMenu = document.querySelectorAll('.menu a');
let tab = document.querySelectorAll('.tab')

for (let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].addEventListener('click', (ev) => {
        ev.preventDefault();
        let activeLink = document.querySelector('.menu a.active');
        activeLink.classList.remove('active');

        let activeTab = document.querySelector('.tab.active');
        activeTab.classList.remove('active');

        tab[i].classList.add('active');
        linkMenu[i].classList.add('active');
    })
}







