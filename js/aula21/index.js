/*
operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
==  igualdade(valor) *********    !!!!não é recomendado usar!!!
=== igualdade estrita(valor e tipo)
!= diferente (valor) ***********   !!!!não é recomendado usar!!!
!== diferente estrito (valor e tipo)
*/

const comparacao = 10 > 5           //>
console.log(comparacao);

const comparacao2 = 10 >= 5;    //>= continua verdadeiro ate chegar no 10
console.log(comparacao2); 

const comparacao3 = 10 < 5;    // < false, 10 não é menor que 5
console.log(comparacao3);     

const comparacao4 = 10 <= 5;    // < false, 10 não é menor que 5 ou igual
console.log(comparacao4); 

const num1 = 10;   //number             // ==, é errado comparar com string
const num2 = '10'; //string     
const comparacao5 = num1 == num2;   
console.log(comparacao5);


const num3 = 10;              // !==, usa esse
const num4 = '10';     
const comparacao6 = num1 !== num2;   
console.log(comparacao6);
