// Declaração de um array chamado 'frutas' com três elementos: 'pera', 'maça', 'uva'
// Índices: 0 -> 'pera', 1 -> 'maça', 2 -> 'uva'
const frutas = ['pera', 'maça', 'uva'];

// Itera sobre cada índice do array 'frutas' usando 'for...in'
// 'for...in' é mais adequado para iterar sobre índices ou chaves de um objeto
for (let indice in frutas) {
    // Imprime cada elemento do array 'frutas' usando o índice atual 'indice'
    console.log("Índice:", indice, "Valor:", frutas[indice]);
}

// Exemplo de um objeto 'pessoa' com propriedades nome, sobrenome e idade
const pessoa = {
    nome: 'Luan',
    sobrenome: 'Pablo',
    idade: 22
};

// Itera sobre as chaves do objeto 'pessoa' usando 'for...in'
// 'for...in' é útil para percorrer as chaves de um objeto
for (let chave in pessoa) {
    // Imprime cada chave e seu valor correspondente no objeto 'pessoa'
    console.log("Chave:", chave, "Valor:", pessoa[chave]);
}

// Acessa e imprime o valor da chave 'nome' diretamente no objeto 'pessoa'
console.log("Nome:", pessoa['nome']);
