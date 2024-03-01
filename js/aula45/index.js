// Função 'retornaHora' que recebe um parâmetro 'data'
function retornaHora(data) {
    // Verifica se 'data' existe e não é uma instância de Date
    if (data && !(data instanceof Date)){
        // Se 'data' não for uma instância de Date, lança um erro
        throw new TypeError('Esperando instância de Date.');
    }

    // Se 'data' não for passada, cria uma nova instância de Date com a data e hora atuais
    if (!data) {
        data = new Date();
    }

    // Retorna a hora formatada para o idioma Português do Brasil ('pt-BR'),
    // e configurada para mostrar no formato de 24 horas (hour12: false)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Bloco 'try' para tentar executar o código e lidar com erros
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora); // Imprime a hora formatada
} catch (e) {
    // Se ocorrer um erro durante o 'try', ele será capturado aqui
    // e o código dentro deste bloco 'catch' será executado
    console.log('Algo deu errado:', e.message); // Mensagem de erro
} finally {
    // O bloco 'finally' é executado independentemente de ter ocorrido um erro ou não
    console.log('Tenha um bom dia.'); // Mensagem de finalização
}
