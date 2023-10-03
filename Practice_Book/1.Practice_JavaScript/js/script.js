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

        number.textContent = getRandomInt(1, 100)
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
// * цифрами клавиатуры  компьютера.
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
// * определенный год. Пусть год будет вводится в инпут. По нажатию Enter давайте
// * выведем таблицу событий, случившихся в этот год. Пусть в качестве информации о событии мы
// * хотим видеть дату, название и описание события.

// ? №1

// * Продумайте, как удобнее всего хранить исторические события.

// ? №2

// * Реализуйте описанный сайт.
































