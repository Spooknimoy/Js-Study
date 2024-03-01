/*
Primitivos (imutáveis) - string, number, bollean, undefined, null (bigint, symbol) - valor

Referência (mutável) - array, object, fuction
*/


// let a = 'A';
// let b = a; // cópia
// console.log(a, b);

// a = 'outra coisa'
// console.log(a, b)




//não é primitivo   
let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);