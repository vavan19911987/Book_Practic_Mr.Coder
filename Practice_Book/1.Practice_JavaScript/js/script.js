'use strict'

// Калькуляторы фигур на JavaScript //
// ******************************* //

// Сделайте калькулятор, который будет
// находить площадь и периметр квадрата.

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

// Математические калькуляторы на JavaScript //
// **************************************** //

// Напишите скрипт, который будет находить корни квадратного уравнения.
// Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

function prog () {
	let a = document.querySelector('#a').value
	let b = document.querySelector('#b').value
	let c = document.querySelector('#c').value
	document.querySelector('#result').textContent = quad(a, b, c)
	document.querySelector('#squareRes').style.display = 'block'

}

function quad (a, b, c) {
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

// Даны 3 инпута. В них вводятся числа.
// Проверьте, что эти числа являются тройкой Пифагора:
// квадрат самого большого числа должен быть равен сумме
// квадратов двух остальных.

let btn = document.querySelector('#btn')
let pre = document.querySelector('#pythRes')
let over = document.querySelector('.pythagorasResult')
let x = document.querySelector('#x')
let y = document.querySelector('#y')
let z = document.querySelector('#z')

function isPythagoras () {
	if (x.value ** 2 + y.value ** 2 === z.value ** 2) {
		return 'Тройка пифагора'
	} else {
		return 'Числа не являются Тройкой Пифагора'
	}
}

btn.addEventListener('click', function test () {
	if (x.value === '' || y.value === '' || z.value === '') {
		pre.textContent = 'Числа не введены'
	} else {
		pre.textContent = isPythagoras()
	}
	over.style.display = 'block'
})

// Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку
// выведите список делителей этого числа.
let btnDivider = document.querySelector('#btnDivider')
let inpDivider = document.querySelector('#inpDivider')
let divRes = document.querySelector('#divRes')
let dividerResult = document.querySelector('.dividerResult')

function divider () {
	let res = []
	for (let i = 0; i * 2 <= inpDivider.value + 1; i++) {
		if (inpDivider.value % i === 0) {
			res.push(i)
		}
	}
	return divRes.textContent = `Делители этого числа:`+ ' ' + res.join(', ')
}
btnDivider.addEventListener('click', () => {
	if (inpDivider.value === '') {
		divRes.textContent = 'Введите число'
	} else {
		divRes.textContent = divider();
	}
	dividerResult.style.display = 'block'
})
