/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"



FALSY
*false 
0
'' "" ``
NULL / UNDEFINED
NaN
*/

console.log('luiz' && NaN && 'Maria');       // retornou o false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function falaOi () {                                // &&
    return 'oi';
}

let vaiExecutar = 'joazinho';

console.log(vaiExecutar && falaOi());


console.log(0 || false || null || 'Luan pablo' || true);   // sempre retorna o verdadeiro !!!


const corUsuario = 'vermelho';                          // retorna o primeiro verdadeiro !!!!!!!
const corPadrao =  corUsuario || 'preto';

console.log(corPadrao);


const a = 0;
const b = null;
const c = 'false';             //esse é valor literalm, por isso aparece falso literal !!
const d = false;
const e = NaN;

console.log(a || b || c || d || e);







