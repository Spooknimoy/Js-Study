const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua:'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
// const { endereco: {rua: r =, numero}, endereco }  = pessoa;
// console.log (r, numero, endereco ); 



const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);