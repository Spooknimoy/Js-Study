// const tresHoras = 60 * 60 * 3 * 1000;    // explicação 1
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);  // 01/01/1970  Timetamp unix ou época unix


// const data = new Date(2019, 0, 20, 18, 20, 500);   // ano, mes, dia, hora, segundos, milisegundos

// const data = new Date('2019-04-20 20:20:59');   // mais usada
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);  //Mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());   // 0 - domingo, 6- Sábado
// console.log(Date.now())


// console.log(data.toString());

function zeroAEsquerda (num) {
    return num  >= 10 ? num : `0${num}`;
}

function FormataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const Min = zeroAEsquerda(data.getMinutes());
    const Seg = zeroAEsquerda(data.getSeconds());
    return ` ${dia}/${mes}/${ano} ${hora}:${Min}:${Seg}`
} 

const data = new Date ();
const dataBrasil = FormataData(data);
console.log(dataBrasil);