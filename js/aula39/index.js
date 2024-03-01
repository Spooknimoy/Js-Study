// Função que gera um número aleatório entre min e max
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

// Definição dos valores mínimo e máximo para a geração do número aleatório
const min = 1;
const max = 50;

// Geração do primeiro número aleatório
let rand = random(min, max);

// Loop while que continua gerando números aleatórios até que o número seja 10
while (rand !== 10) {
    // Gerando novo número aleatório
    rand = random(min, max);
    // Imprimindo o número aleatório no console
    console.log(rand);
}

// Mensagem para separar a primeira parte do código da próxima
console.log('############')

// Loop do-while que gera números aleatórios até que o número seja 10
do {
    // Gerando novo número aleatório
    rand = random(min, max);
    // Imprimindo o número aleatório no console
    console.log(rand);
} while (rand !== 10);
