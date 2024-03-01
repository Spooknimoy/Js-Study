// const pessoa1 = {
//     nome: 'Luan',
//     sobrenome: 'pablo',
//     idade: 25
// };

// console.log(pessoa1.nome)



// function criaPessoa (nome, sobrenome, idade) {
//     return{
//      nome, sobrenome, idade
//     }
// }
// const pessoa1 = criaPessoa('Luan',  'pablo', 21);
// const pessoa2 = criaPessoa('Maria',  'lara', 33);
// const pessoa3 = criaPessoa('João',  'Otavio', 42);    
// const pessoa4 = criaPessoa('Junio',  'pablo', 51);
// const pessoa5 = criaPessoa('Cassio',  'pablo', 45);


// console.log(pessoa1.nome, pessoa2.nome);




// const pessoa1 = {
//     nome: 'Luan',
//     sobrenome: 'pablo',
//     idade: 25,

//     fala() {
//         console.log (`${this.nome} ${this.sobrenome} está falando oi ...`);
//     },
    
//     incrementaIdade() {
//         this.idade++;
//     }
// };

// pessoa1.fala();




const pessoa1 = {
    nome: 'Luan',
    sobrenome: 'pablo',
    idade: 25,

    fala() {
        console.log (`A minha idade atual é ${this.idade}. `);
    },
    
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

