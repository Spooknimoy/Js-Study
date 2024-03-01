let numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById("numero-titulo");
const Texto = document.getElementById("texto");


numeroTitulo.innerHTML = numero
Texto.innerHTML +=  `<p>Raiz quadrada: ${numero ** 0.5}.</p>`
Texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</P>`
Texto.innerHTML +=`<p>${numero} é NaN:${Number.isNaN(numero)} </p>`
Texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
Texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`

