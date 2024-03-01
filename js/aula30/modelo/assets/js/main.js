const h1 = document.querySelector('.container h1');
const data = new Date();


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemana = '';
            return diaSemanaTexto;
    }
}

function getNomeMes(NumeroMes) {
    let NomeMes;
    switch (NumeroMes) {
        case 0:
            diaSemanaTexto = 'Janeiro';
            return diaSemanaTexto;
            case 1:
            diaSemanaTexto = 'Fevereiro';
            return diaSemanaTexto;
            case 2:
            diaSemanaTexto = 'Março';
            return diaSemanaTexto;
            case 3:
            diaSemanaTexto = 'Abril';
            return diaSemanaTexto;
            case 4:
            diaSemanaTexto = 'Maio';
            return diaSemanaTexto;
            case 5:
            diaSemanaTexto = 'Junho';
            return diaSemanaTexto;
            case 6:
            diaSemanaTexto = 'Julho';
            return diaSemanaTexto;
            case 7:
            diaSemanaTexto = 'Agosto';
            return diaSemanaTexto;
            case 8:
            diaSemanaTexto = 'Setembro';
            return diaSemanaTexto;
            case 9:
            diaSemanaTexto = 'Outubro';
            return diaSemanaTexto;
            case 10:
            diaSemanaTexto = 'Novembro';
            return diaSemanaTexto;
            case 11:
            diaSemanaTexto = 'Dezembro';
            return diaSemanaTexto;
    }
}

function zeroAEsquerda (num) {
    return num  >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const NumeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const NomeMes = getNomeMes(NumeroMes);

    return (
    `${nomeDia}, ${data.getDate()} de ${NomeMes}` +
    ` de ${data.getFullYear()}` + 
    ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    );
}


h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())