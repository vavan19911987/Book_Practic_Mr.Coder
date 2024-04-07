'use strict'

// ! Игра в города на JavaScript

;(function (root) {
    let parent = document.querySelector(root)
    let field = parent.querySelector('#field');
    let message = parent.querySelector('#message');
    let text = parent.querySelector('#text');
    let list = document.querySelector('.sectionGame ul');
    let listLi = document.querySelectorAll('.sectionGame ul')
    let cities = [];
    const allCities = [
        "Абака",
        "Агата",
        "Азова",
        "взова",
        "узовф",
    ] // Города России


    function test(arr1, val) {
        let test2 = val[val.length -1].slice(-1)

        console.log(test2);

    }



    function Duplicate(arr,arr2) {
        arr.filter((el, i, arr) => {
            if (arr.indexOf(el) !== i) {
                cities.pop();
                errorLi(listLi);
                message.textContent = 'Город уже был назван'
                setTimeout(function() {
                    message.textContent = '';
                }, 3000);
                // addIf();
            }
        })



    }
    function checkArrCities(arrCities, val) {
        let filteredArray = allCities.filter(item => item === val).map(item => item);
        if (filteredArray.length === 0) {
            message.textContent = 'Такого города в России нет'
            setTimeout(function() {
                message.textContent = '';
            }, 3000);
        } else if (filteredArray.length !== 0) {
            cities.push(val);
            addLi();
        } else {
            console.log('yes');
        }
        // addIf();
    }
    function addLi() {
        let li = document.createElement('li');
        li.textContent = cities[cities.length - 1].charAt(0).toUpperCase() + cities[cities.length - 1].slice(1);
        list.append(li);
    } // Добавление города в список
    function errorLi(arrLi) {
        arrLi.forEach((el) => {
            el.lastElementChild.style.color = 'red'
            el.lastElementChild.style.fontSize = '20px'
            setTimeout(function() {
                el.lastElementChild.remove()
            }, 3000);
        })
    } // Вывод ошибки

    field.addEventListener("keypress", (e) => {
        const enteredValue = field.value.slice(0, 1).toUpperCase();
        const ENTER = 13
        const lengthArr = cities.length;
        const inputStrLow = field.value.toLowerCase();
        let inputValue = field.value.slice(0, 1).toUpperCase() + field.value.slice(1);

        if (!enteredValue || e.which !== ENTER) {
            return;
        }
        if (lengthArr === 0) { // происходит первая запись в массив
            checkArrCities(allCities, inputValue);
            if (field.value.slice(- 2, -1) === 'ы') {
                text.textContent = cities[cities.length - 1].slice(-3, -2).toUpperCase();
                robot(allCities, inputValue);
                test(allCities, inputValue);
            } else if (field.value.slice(-1) === 'ь' || field.value.slice(-1) === 'й' || field.value.slice(-1) === 'ы') { // проверяем последнюю букву в ИНПУТЕ
                text.textContent = cities[cities.length - 1].slice(-2, -1).toUpperCase();
                robot(allCities, inputValue);
                test(allCities, inputValue);
            } else {
                text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                robot(allCities, inputValue);
                test(allCities, inputValue);
            }
        } else if (lengthArr > 0) {  // происходит вторая запись в массив
                if (field.value.slice(-1) === 'ь' || field.value.slice(-1) === 'й' || field.value.slice(-1) === 'ы') {
                    checkArrCities(allCities, inputValue);
                    text.textContent = cities[cities.length - 1].slice(-2, -1).toUpperCase();
                    robot(allCities, inputValue);
                    test(allCities, inputValue);

                } else if ((cities[cities.length - 1].slice(-1) === 'ь' && cities[cities.length - 1].slice(-2, -1) === field.value.slice(0, 1).toLowerCase()) || (cities[cities.length - 1].slice(-1) === 'й' && cities[cities.length - 1].slice(-2, -1) === field.value.slice(0, 1).toLowerCase())) {
                    checkArrCities(allCities, inputValue);
                    text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                    robot(allCities, inputValue);
                    test(allCities, inputValue);
                } else if (cities[cities.length - 1].slice(-1) === field.value.slice(0, 1).toLowerCase()) {
                    checkArrCities(allCities, inputValue);
                    text.textContent = cities[cities.length - 1].slice(-1).toUpperCase();
                    robot(allCities, inputValue);
                    test(allCities, inputValue);
                }

            Duplicate(cities,allCities);
        }
        console.log(cities)
        field.value = '';
    });
    function robot(arrCiti) {
        let robotCiti = arrCiti.filter(item => {
            if (item.slice(0,1) === text.textContent) {
                return item;
            }
        }).map(item => item);
        let random = Math.floor(Math.random() * robotCiti.length);
        let randomCity = robotCiti[random];

        if (randomCity[randomCity.length - 1] === 'ь' || randomCity[randomCity.length - 1] === 'й' || randomCity[randomCity.length - 1] === 'ы') {
            text.textContent = randomCity[randomCity.length - 2].slice(-1).toUpperCase()
        } else {
            text.textContent = randomCity[randomCity.length - 1].slice(-1).toUpperCase();
        }
        cities.push(randomCity);
        addLi();




    }

})('.sectionGame');


// сделать проверку на дубликат у робота
// нужно чделать так чтобы функция дебликат проверяла не только букву но и
// колличество городов в массисе на эту букву и если городов больше нет то выдовала соответствующий код
//