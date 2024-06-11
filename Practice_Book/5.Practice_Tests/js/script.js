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

// ! Третий вариантё

let btn = document.querySelector('#sub');
let main = document.querySelector('#test');

let answers = ['90', '4', '360',];
let questions = ['Сколько градусов имеет угол квадрата?', 'Сколько углов у квадрата?', 'Сумма градусов углов квадрата?'];

// Создаем вопросы и поля ввода
questions.forEach((question, index) => {
    let div = document.createElement('div');
    let par = document.createElement('p');
    let input = document.createElement('input');

    // Добавляем элементы в DOM
    main.appendChild(div);
    div.appendChild(par);
    par.textContent = question;
    div.appendChild(input);

    // Настраиваем поле ввода
    input.placeholder = 'Введите ответы цифрами';
    input.classList.add('inp');
})
btn.addEventListener('click', () => {
    let inp = document.querySelectorAll('.inp');

    // Проверяем ответы
    inp.forEach((input, index) => {
        if (answers[index] === input.value) {
            input.classList.add('right');
            input.classList.remove('wrong');
        } else {
            input.classList.add('wrong');
            input.classList.remove('right');
        }
    });
});







