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

const app = GI.createElement('div', { id: 'app' })
const list = GI.createElement('ul', { class: 'list' })

to_do.forEach((item) => {
  const li = GI.createElement('li', { class: 'item' })
  const checkbox = GI.createElement('input', { type: 'checkbox' })
  const label = GI.createElement('label', { class: 'label' })

  label.textContent = item
  li.appendChild(checkbox)
  li.appendChild(label)
  list.appendChild(li)

})

app.appendChild(list)

document.body.appendChild(app)



