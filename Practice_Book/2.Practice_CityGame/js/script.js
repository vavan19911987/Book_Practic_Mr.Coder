'use strict'

// ! Игра в города на JavaScript

// * Пусть у нас начало игры и ходит первый игрок.
// * Он вбивает город и нажимает Enter. Очевидно, что этот город мы
// * сразу можем внести в наш массив с городами.

// * Теперь будет ходить второй игрок. Так как наш массив уже не пуст,
// * то этот второй ход будет описываться тем же алгоритмом, что и все последующие ходы.

// * Что это за алгоритм? Во-первых, нужно проверить то, что первая
// * буква введенного города совпадает с последней буковой предыдущего города.
// * Во-вторых, нужно проверить то, что такого города еще не было в этой игре.
// * Если оба этих условия выполняются, то введенный город записывается в наш массив
// * и ход переходит к следующему игроку. Если же какое-то условие не выполняется, то нужно
// * вывести сообщение об этом.

;(function (root) {
    let parent = document.querySelector(root)
    let field = parent.querySelector('#field');
    let message = parent.querySelector('#message');
    let text = parent.querySelector('#text')
    let cities = [];
    field.addEventListener("keypress", (e) => {
        const enteredValue = field.value.slice(0, 1).toUpperCase();
        const ENTER = 13
        const lengthArr = cities.length;
        const inputStrLow = field.value.toLowerCase();
        if (!enteredValue || e.which !== ENTER) {
            return;
        }
        if (lengthArr === 0) {
            cities.push(inputStrLow);
            console.log(cities)
            if (field.value.slice(-1) === 'ь') {
                text.textContent = cities[cities.length - 1].slice(-2, -1).toUpperCase();
            } else {
                text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
            }
        } else if (lengthArr > 0) {
            for (const city of cities) {
                if (field.value.slice(-1) === 'ь') {
                    cities.push(inputStrLow);
                    console.log(cities)
                    text.textContent = cities[cities.length - 1].slice(-2, -1).toUpperCase();
                    break;

                } else if (cities[cities.length - 1].slice(-1) === 'ь' && cities[cities.length - 1].slice(-2,-1) === field.value.slice(0, 1).toLowerCase()) {
                    cities.push(inputStrLow);
                    console.log(cities)
                    text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                    break;
                } else if (cities[cities.length - 1].slice(-1) === field.value.slice(0, 1).toLowerCase()) {
                    cities.push(inputStrLow);
                    console.log(cities)
                    text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                    break;
                }
            }
            cities.filter((el, i, arr) => {
                if (arr.indexOf(el) !== i) {
                    cities.pop()
                    message.textContent = 'Город уже был назван'
                    if (cities[cities.length - 1].slice(-1) === 'ь') {
                        text.textContent = cities[cities.length - 1].slice(-2,-1).toUpperCase();
                    } else {
                        text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                    }
                } else {
                    message.textContent = '';
                }
            })
        }
        field.value = '';
    })
})('.sectionGame');
// срабатывает на две последние буквы надо исправлять

