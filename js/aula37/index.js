const nome = ['Luan', 'Pablo', 'Pereira'];

// for clássico - geralmente usado com iteráveis (arrays ou strings)
// Itera sobre os elementos do array 'nome' utilizando um loop for tradicional
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('##########'); // separador

// for in - Retorna o índice ou chave (strings, arrays ou objetos)
// Itera sobre os índices do array 'nome' usando um loop for...in
for (let i in nome) {
    console.log(nome[i]);
}

// for of - Retorna o valor em si (iteráveis, arrays ou strings)
console.log('##########'); // separador

// Itera sobre os valores do array 'nome' usando um loop for...of
for (let valor of nome) {
    console.log(valor);
}

console.log('##########');

// forEach - Método de array que executa uma função para cada elemento do array
// Itera sobre cada elemento do array 'nome' utilizando o método forEach
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

console.log('##########');

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

// for in com objeto - Itera sobre as chaves do objeto 'pessoa'
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
