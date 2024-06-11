'use strict'

// Первый вариант
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

// Второй вариант
let inp = document.querySelectorAll('.inp');
let btn = document.querySelector('#sub');
let answers = ['90', '4', '360',];
btn.addEventListener('click', () => {
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

// Третий вариантё 



