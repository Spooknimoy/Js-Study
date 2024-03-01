// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

// for(let numero of numeros) {

//     if (numero === 2) {
//         console.log('Pulei o numero 2')
//         continue;
//     }
//     console.log(numero);

//     if(numero === 7) {
//         console.log('7 encontrando, saindo ...')
//         break;
//     }   
// }


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;

do {
    let numero = numeros[index];

    if (numero === 2) {
        console.log('Pulei o número 2');
        index++; // Incrementa o índice para avançar para o próximo número
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }

    index++; // Incrementa o índice para avançar para o próximo número
} while (index < numeros.length);




//continue = continue para próxima iteração
//Break = sai do laço