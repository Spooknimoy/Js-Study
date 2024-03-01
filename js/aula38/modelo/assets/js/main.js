const paragrafos = document.querySelector('.paragrafos');
const ps =  paragrafos.querySelectorAll('p')

const estilosbody = getComputedStyle(document.body);
const backgroudColorBody = estilosbody.backgroundColor;
console.log(backgroudColorBody);

for(let p of ps) {
   p.style.backgroundColor = 'rgb(17, 86, 102'
   p.style.color = 'white'
}