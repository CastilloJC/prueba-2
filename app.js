'use strict'
const GI = {
  createElement(tag, atributes) {
    let element = document
    return document.createElement(tag)

  }
}

const to_do = [
  'Alimentar al perro',
  'Estudiar para prueba escrita',
  'Pagar taxes',
  'Pasear a perro',
  'Comprar entradas para el cine',
]

const toDoList = document.getElementById('toDoList');

to_do.forEach(item => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const label = document.createElement('label');
  label.textContent = item;

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      label.style.textDecoration = 'line-through';
      label.style.color = 'gray';
    } else {
      label.style.textDecoration = 'none';
      label.style.color = 'black';
    }
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  toDoList.appendChild(li);
});



