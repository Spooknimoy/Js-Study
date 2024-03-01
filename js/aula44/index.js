// try {
//     console.log(naoExiste);
// } catch(err) {
//     console.log('naoExiste não existe.')
//     console.log(err);
// }

// Função 'soma' que recebe dois parâmetros 'x' e 'y'
function soma(x, y) {
    // Verifica se 'x' ou 'y' não são números
    if (typeof x !== 'number' || typeof y !== 'number') {
        // Se um dos parâmetros não for um número, lança um erro
        throw new Error('x e y precisam ser números.');
    }

    // Se 'x' e 'y' forem números, retorna a soma deles
    return x + y;
}

// Bloco 'try' para tentar executar o código e lidar com erros
try {
    // Tentativa de chamar a função 'soma' com números
    console.log(soma(1, 2));  // Deve imprimir 3
    console.log(soma('1', 2));  // Deve lançar um erro devido ao '1' ser uma string

} catch(error) {
    // Se ocorrer um erro durante o 'try', ele será capturado aqui
    // e o código dentro deste bloco 'catch' será executado
    console.log('Alguma coisa mais amigável pro usuário.');  // Mensagem amigável ao usuário
}
