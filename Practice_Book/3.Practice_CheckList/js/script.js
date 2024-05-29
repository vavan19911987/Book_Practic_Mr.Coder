'use strict';

let input = document.querySelector('#input');
let list = document.querySelector('#list');
const addNOte = document.querySelector('.btn1');

addNOte.addEventListener('click', function () {
    let note = document.querySelector('.add');
    note.className = 'flex';
})

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        let li = document.createElement('li');

        let task = document.createElement('span');
        task.classList.add('task');
        task.textContent = this.value;
        task.addEventListener('dblclick', function(ev) {
            let inp = document.createElement('input');
            inp.value = this.textContent
            this.textContent = '';
            this.appendChild(inp);
            inp.addEventListener('keypress', function (event) {
                    if (event.key === 'Enter') {
                        task.textContent = inp.value;
                    }
            })
        });
        li.appendChild(task);

        let remove = document.createElement('span');
        remove.classList.add('remove')
        remove.textContent = 'удалить';
        remove.addEventListener('click', function(e) {
            this.parentElement.remove();
        });
        li.appendChild(remove);

        let mark = document.createElement('span');
        mark.classList.add('mark')
        mark.textContent = 'сделано';
        mark.addEventListener('click', function() {
           task.classList.add('done')
        });
        li.appendChild(mark);
        list.appendChild(li);
        input.value = '';
    }
});


