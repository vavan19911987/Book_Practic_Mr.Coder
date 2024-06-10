'use strict'
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');
// Добавляем новый ряд
function createCell(tr, value, name) {
    let td = document.createElement('td');
    td.textContent = value ;
    td.classList.add(name);
    tr.appendChild(td);
    return td;
}
add.addEventListener('click', function(event) {
    let tr = document.createElement('tr');
    allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
    createCell(tr, price.value * amount.value,
        'cost');
    createCell(tr, 'удалить', 'remove').addEventListener('click', function(e) {
        this.parentElement.remove();
        recountTotal();
    });
    table.appendChild(tr);
    recountTotal(); // пересчитаем общую сумму
    let inputVal = document.querySelectorAll('.all')
    inputVal.forEach(el => el.value = '');
})
// Функция перещета общего значения
function recountTotal() {
    let costs = table.querySelectorAll('.cost');
    if (costs) {
        // находим сумму и записываем ее в #total
        let totalCounter = 0;
        for (const cost of costs) {
            totalCounter += +cost.textContent;
        }
        total.textContent = String(totalCounter);
    }
}
// Функция редактирования ячейки
function allowEdit(td) {
    td.addEventListener('dblclick', function() {
        let text = td.textContent;
        td.textContent = '';
        let addInput = document.createElement('input');
        addInput.value = text;
        addInput.focus()
        td.appendChild(addInput);

        addInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                td.textContent = this.value;
                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    // выполним перерасчет
                    let tr = td.parentElement;
                    let price = tr.querySelector('.price');
                    let amount = tr.querySelector('.amount');
                    let cost = tr.querySelector('.cost');
                    cost.textContent = price.textContent * amount.textContent;
                    console.log(cost.textContent);
                    recountTotal();
                }
            }
        })
    });
}
