'use strict'

// Сделайте калькулятор, который будет находить площадь и периметр квадрата.

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

// Сделайте калькулятор, который будет находить
// площадь и периметр прямоугольника.

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

// Сделайте калькулятор, который будет
// находить площадь круга и длину окружности.

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


// Сделайте калькулятор, который будет
// находить площадь треугольника по трем сторонам.

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
		intervalResult = intervalResult / 2;
		intervalResult = intervalResult * (intervalResult - +triangleInp1.value) * (intervalResult - +triangleInp2.value) * (intervalResult - +triangleInp3.value)
		result = Math.sqrt(intervalResult);

		// text.textContent = 'S = ' + result.toFixed(2)
		if (result % 1 === 0) {
			text.textContent = 'S = ' + result
		} else {
			text.textContent = 'S = ' + result.toFixed(2)
		}
		triangleInp1.value = '';
		triangleInp2.value = '';
		triangleInp3.value = '';

	})

})('#wrapper4')

// S = √p · (p — a)(p — b)(p — c),