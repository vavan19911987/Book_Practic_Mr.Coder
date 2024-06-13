'use strict'

// ! Первый вариант
// let inp = document.querySelectorAll('.inp');
// let btn = document.querySelector('#sub');
//
// btn.addEventListener('click', () => {
//     for (let inpElement of inp) {
//         let dataValue = inpElement.getAttribute('data-right');
//         if (dataValue === inpElement.value) {
//             inpElement.classList.add('right')
//         } else if (dataValue !== inpElement.value) {
//             inpElement.classList.add('wrong')
//         }
//     }
// })

// ! Второй вариант
// let inp = document.querySelectorAll('.inp');
// let btn = document.querySelector('#sub');
// let answers = ['90', '4', '360',];
// ];
// btn.addEventListener('click', () => {
//     inp.forEach((input, index) => {
//         if (answers[index] === input.value) {
//             input.classList.add('right');
//             input.classList.remove('wrong');
//         } else {
//             input.classList.add('wrong');
//             input.classList.remove('right');
//         }
//     });
// });

// ! Третий вариант

// let btn = document.querySelector('#sub');
// let main = document.querySelector('#test');
//
// let answers = ['90', '4', '360',];
// let questions = ['Сколько градусов имеет угол квадрата?', 'Сколько углов у квадрата?', 'Сумма градусов углов квадрата?'];
//
// // Создаем вопросы и поля ввода
// questions.forEach((question, index) => {
//     let div = document.createElement('div');
//     let par = document.createElement('p');
//     let input = document.createElement('input');
//
//     // Добавляем элементы в DOM
//     main.appendChild(div);
//     div.appendChild(par);
//     par.textContent = question;
//     div.appendChild(input);
//
//     // Настраиваем поле ввода
//     input.placeholder = 'Введите ответы цифрами';
//     input.classList.add('inp');
// })
// btn.addEventListener('click', () => {
//     let inp = document.querySelectorAll('.inp');
//
//     // Проверяем ответы
//     inp.forEach((input, index) => {
//         if (answers[index] === input.value) {
//             input.classList.add('right');
//             input.classList.remove('wrong');
//         } else {
//             input.classList.add('wrong');
//             input.classList.remove('right');
//         }
//     });
// });

// ! Четвертый вариант

// let btn = document.querySelector('#sub');
// let main = document.querySelector('#test');
//
// let questions = {
//     'Сколько градусов имеет угол квадрата?': '90',
//     'Сколько углов у квадрата?': '4',
//     'Сумма градусов углов квадрата?': '360',
// }
// // ? Создаем вопросы и поля ввода
//
// for (const question in questions) {
//     let div = document.createElement('div');
//     let par = document.createElement('p');
//     let input = document.createElement('input');
//
//     //  ? Добавляем элементы в DOM
//
//     main.appendChild(div);
//     div.appendChild(par);
//     par.textContent = question;
//     div.appendChild(input);
//
//     // ? Настраиваем поле ввода
//
//     input.placeholder = 'Введите ответы цифрами';
//     input.classList.add('inp');
// }
//
// btn.addEventListener('click', () => {
//     let inp = document.querySelectorAll('.inp');
//     let questionKeys = Object.keys(questions);
//
//     // ? Проверяем ответы
//
//     inp.forEach((input, index) => {
//         let correctAnswer = questions[questionKeys[index]];
//
//         if (correctAnswer === input.value) {
//             input.classList.add('right');
//             input.classList.remove('wrong');
//         } else {
//             input.classList.add('wrong');
//             input.classList.remove('right');
//         }
//     });
// });

// ! Пятый вариант

// let btn = document.querySelector('#sub');
// let main = document.querySelector('#test');
//
//
// let questions = [
//     {
//         text:  'Сколько градусов имеет угол квадрата?',
//         right: '90',
//     },
//     {
//         text:  'Сколько углов у квадрата?',
//         right: '4',
//     },
//     {
//         text:  'Сумма градусов углов квадрата?',
//         right: '360',
//     },
//     {
//         text:  'Сколько углов имеет треугольник',
//         right: '3',
//     },
// ];
// // ? Создаем вопросы и поля ввода
//
// questions.forEach((question) => {
//     let div = document.createElement('div');
//     let par = document.createElement('p');
//     let input = document.createElement('input');
//
//     //  ? Добавляем элементы в DOM
//
//     main.appendChild(div);
//     div.appendChild(par);
//     par.textContent = question.text;
//     div.appendChild(input);
//
//     // ? Настраиваем поле ввода
//
//     input.placeholder = 'Введите ответы цифрами';
//     input.classList.add('inp');
// })
//
//
// btn.addEventListener('click', () => {
//     let inp = document.querySelectorAll('.inp');
//
//     // ? Проверяем ответы
//
//     inp.forEach((input, index) => {
//         let correctAnswer = questions[index].right;
//
//         if (correctAnswer === input.value) {
//             input.classList.add('right');
//             input.classList.remove('wrong');
//         } else {
//             input.classList.add('wrong');
//             input.classList.remove('right');
//         }
//     });
// });

// ! Шестой вариант

// let btn = document.querySelector('#sub');
//
// btn.addEventListener('click', () => {
//     // Получаем все вопросы
//     let questions = document.querySelectorAll('#test > div');
//
//     questions.forEach((question) => {
//         // Проверяем, выбрана ли правильная радио-кнопка
//         let correctRadio = question.querySelector('input[type="radio"][data-right]');
//         let selectedRadio = question.querySelector('input[type="radio"]:checked');
//
//         if (selectedRadio) {
//             if (selectedRadio === correctRadio) {
//                 selectedRadio.parentElement.classList.add('right');
//                 selectedRadio.parentElement.classList.remove('wrong');
//             } else {
//                 selectedRadio.parentElement.classList.add('wrong');
//                 selectedRadio.parentElement.classList.remove('right');
//             }
//         }
//     });
// });


// ! Седьмой вариант

// let btn = document.querySelector('#sub');
// let answers = [90, 4, 360];
//
// btn.addEventListener('click', () => {
//     // Получаем все вопросы
//     let questions = document.querySelectorAll('#test > div');
//
//     questions.forEach((question, questionIndex) => {
//         // Получаем все радио-кнопки в текущем вопросе
//         let radios = question.querySelectorAll('input[type="radio"]');
//
//         // Проверяем, выбрана ли какая-либо радио-кнопка
//         let selectedRadio = null;
//         radios.forEach((radio) => {
//             if (radio.checked) {
//                 selectedRadio = radio;
//             }
//         });
//
//         if (selectedRadio) {
//             let selectedValue = parseInt(selectedRadio.nextSibling.textContent.trim());
//             if (selectedValue === answers[questionIndex]) {
//                 selectedRadio.parentElement.classList.add('right');
//                 selectedRadio.parentElement.classList.remove('wrong');
//             } else {
//                 selectedRadio.parentElement.classList.add('wrong');
//                 selectedRadio.parentElement.classList.remove('right');
//             }
//         } else {
//             console.log('Радио-кнопка не выбрана для вопроса', questionIndex + 1);
//         }
//     });
// });

// ! Восьмой вариант

let questions = [
    {
        text: 'Сколько градусов имеет угол квадрата?',
        right: 0,
        variants: [
            '90',
            '94',
            '60'
        ]
    },
    {
        text: 'Сколько углов у квадрата?',
        right: 1,
        variants: [
            '2',
            '4',
            '2'
        ]
    },
    {
        text: 'Сумма градусов углов квадрата?',
        right: 2,
        variants: [
            '363',
            '256',
            '360'
        ]
    },
];

// Получаем контейнер для вопросов и кнопку
let testContainer = document.querySelector('#test');
let btn = document.querySelector('#button');

// Создаем вопросы и варианты ответов
questions.forEach((question, questionIndex) => {
    let div = document.createElement('div');
    let par = document.createElement('p');
    par.textContent = question.text;
    div.appendChild(par);

    question.variants.forEach((variant, variantIndex) => {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = `question-${questionIndex}`;
        input.value = variantIndex;
        label.appendChild(input);
        label.appendChild(document.createTextNode(variant));
        div.appendChild(label);
    });

    testContainer.appendChild(div);
});

// Обработчик события для проверки ответов
btn.addEventListener('click', () => {
    questions.forEach((question, questionIndex) => {
        let selectedRadio = document.querySelector(`input[name="question-${questionIndex}"]:checked`);

        if (selectedRadio) {
            let selectedValue = parseInt(selectedRadio.value);
            let correctIndex = question.right;

            if (selectedValue === correctIndex) {
                selectedRadio.parentElement.classList.add('right');
                selectedRadio.parentElement.classList.remove('wrong');
            } else {
                selectedRadio.parentElement.classList.add('wrong');
                selectedRadio.parentElement.classList.remove('right');
            }
        } else {
            console.log(`Ответ на вопрос ${questionIndex + 1} не выбран`);
        }
    });
});



