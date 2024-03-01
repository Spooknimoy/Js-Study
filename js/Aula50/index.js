// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     return total; // Adicionando um retorno para obter o resultado
// }

// const resultado = funcao(1, 2, 3, 4, 5, 6, 7);
// console.log(resultado); // Imprime o resultado da chamada da função



// Argumentos que sustentam os argumentos enviados
function conta(operador, acumulador, ...numeros) {
    // Loop através dos números fornecidos e os adiciona ao acumulador
    for(let numero of numeros) {
        acumulador += numero;
    }
    console.log(acumulador);
}

// Chamando a função conta com operador '+' e números 20, 30, 40, 50
conta('+', 0, 20, 30, 40, 50);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function conta(operador, acumulador, ...numeros) {
    // Loop através dos números fornecidos e executa a operação correspondente
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

// Chamando a função conta com operador '*' e números 20, 30, 40, 50
conta('*', 1, 20, 30, 40, 50);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const conta = function(operador, acumulador, ...numeros) {
    console.log(arguments);
};

// Chamando a função conta com operador '*' e números 20, 30, 40, 50
conta('*', 1, 20, 30, 40, 50);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const conta = (operador, acumulador, ...numeros) => {
    console.log(arguments); // Erro: arguments não está disponível em arrow functions
};

// Chamando a função conta com operador '*' e números 20, 30, 40, 50
conta('*', 1, 20, 30, 40, 50);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const conta = (...args) => {
    console.log(args);
};

// Chamando a função conta com operador '*' e números 20, 30, 40, 50
conta('*', 1, 20, 30, 40, 50);



