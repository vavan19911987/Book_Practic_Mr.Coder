'use strict'

let inp = document.querySelectorAll('.inp');
let btn = document.querySelector('#sub');
// let dataValue = inp.getAttribute('data-right');

btn.addEventListener('click', () => {
    for (let inpElement of inp) {
        let dataValue = inpElement.getAttribute('data-right');

        if (dataValue === inpElement.value) {
            inpElement.classList.add('right')
        } else if (dataValue !== inpElement.value) {
            inpElement.classList.add('wrong')
        }
    }

})


