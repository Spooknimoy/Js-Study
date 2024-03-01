/*
operadores Lógicos
&& -> and -> E
|| -> OR -> OU
! => Not -> NÃO
*/

console.log(true && true && true && true);     // pra retornar verdade precisa que todas sejam verdadeiro
console.log(true && true && true && false);    // retornou falso

const expressaoOr = true || false || false || false || false;     // se uma tiver verdadeiro, todas retornam verdadeiro. se tive todas falsas ai retrona falso
console.log(expressaoOr);

console.log(!false);    // estou negando, então se é falso se torna verdadeiro e vice-versa
console.log(!!false);   // estou negando duas, então volta falso.



const usario = 'luan';                       //exemplo que usario digitou
const senha = '123456';                      //exemplo que usario digitou

//                          true                false
const vailogar = usario ==='luan' && senha === '12345';
console.log(vailogar)





