// const max = 100;

// function random(min, max) {
//     const r = Math.random() * (max - min + 1) + min; // +1 para incluir o próprio max
//     return Math.floor(r);
// }

// const numeroAleatorio = random(1, max);

// function Divisivel(numeroAleatorio) {
//     if (numeroAleatorio % 3 === 0 && numeroAleatorio % 5 === 0) {
//         console.log('FizzBuzz');
//         return 'FizzBuzz';
//     } else if (numeroAleatorio % 3 === 0) {
//         console.log('Fizz');
//         return 'Fizz';
//     } else if (numeroAleatorio % 5 === 0) {
//         console.log('Buzz');
//         return 'Buzz';
//     } else {
//         console.log(numeroAleatorio);
//         return numeroAleatorio;
//     }
// }

// Divisivel(numeroAleatorio);



function FizzBuzz(numero) {
    // Verifica se 'numero' é divisível por 3 E 5 (FizzBuzz)
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    // Verifica se o tipo de 'numero' não é 'number'
    if (typeof numero !== 'number') return numero;
    // Verifica se 'numero' é divisível por 3 (sem resto)
    if (numero % 3 === 0) return 'Fizz';
    // Verifica se 'numero' é divisível por 5 (sem resto)
    if (numero % 5 === 0) return 'Buzz';
    // Se não for nenhum dos casos acima, retorna o próprio 'numero'
    return numero;
}


for (let i = 0; i <=100; i++) {
    console.log(i, FizzBuzz(i))
}
