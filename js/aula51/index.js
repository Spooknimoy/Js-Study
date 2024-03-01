// return
// retorna um valor
// termina a função

// document.addEventListener('click', function() {       // não retorna valor
//     document.body.style.backgroundColor = 'red';
// })


// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('luiz', 'Pablo');
// const p2 = {
//     nome:'luan',
//     sobrenome: 'pablo'
// };


// console.log(p1);
// console.log(p2);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Declaração da função falaFrase
function falaFrase(comeco) {
    // Função interna falaResto que recebe um argumento 'resto'
    function falaResto(resto) {
        // Retorna a concatenação de 'comeco' (argumento de falaFrase) e 'resto' (argumento de falaResto)
        return comeco + ' ' + resto;
    }
    // Retorna a função interna falaResto
    return falaResto;
}

// Atribui a função retornada por falaFrase('olá') à variável olaMundo
const olaMundo = falaFrase('olá');

// Chama a função olaMundo('mundo!'), onde 'mundo!' é o argumento 'resto'
// A função olaMundo é, na verdade, a função interna falaResto com 'comeco' já definido como 'olá'
const resto = olaMundo('mundo!');

// Exibe o resultado
console.log(resto); // Saída: 'olá mundo!'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Função criaMultiplicador que recebe um argumento 'multiplicador'
function criaMultiplicador(multiplicador) {
    // Retorna uma função interna que recebe um argumento 'n'
    return function(n) {
        // Retorna o resultado da multiplicação entre 'n' e 'multiplicador'
        return n * multiplicador;
    };
}

// Criação de três funções: duplica, triplica e quadriplica
const duplica = criaMultiplicador(2); // 'duplica' agora é uma função que multiplica por 2
const triplica = criaMultiplicador(3); // 'triplica' agora é uma função que multiplica por 3
const quadriplica = criaMultiplicador(4); // 'quadriplica' agora é uma função que multiplica por 4

// Chamadas das funções criadas com diferentes argumentos
console.log(duplica(3)); // Saída: 6 (3 * 2)
console.log(triplica(2)); // Saída: 6 (2 * 3)
console.log(quadriplica(10)); // Saída: 40 (10 * 4)
