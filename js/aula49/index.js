// Declaração de função (Function Hoisting)
// Aqui ocorre o chamado "hoisting" das funções, onde elas podem ser chamadas antes de serem declaradas.
falaOI(); // Isso funciona mesmo sendo chamada antes da declaração da função
function falaOI() {
    console.log('Oie');
}

// First-Class Objects (Objetos de Primeira Classe)
// Function Expression (Expressão de Função)
const souUmDado = function() {
    console.log('Sou um dado.');
}; 
souUmDado(); // Chama a função souUmDado

// Arrow Function (Função de Seta)
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow(); // Chama a função funcaoArrow

// Métodos de objeto
const obj = {
    falar() { // Método falar do objeto obj
        console.log('Estou falando...');
    }
};
obj.falar(); // Chama o método falar do objeto obj
