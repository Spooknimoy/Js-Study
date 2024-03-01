const elementos = [
    {tag: 'p', texto: 'Qualquer text que você quiser. '},
    {tag: 'div', texto: 'frase 2' },
    {tag: 'Footer', texto: 'frase 3' },
    {tag: 'section', texto: 'frase 4' },
];

const container = document.querySelector('.container')
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i ++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada);
  
}

container.appendChild(div)

 