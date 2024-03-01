// (condicao) ? 'valor para verdadeiro' :  'valor falso'
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = 'pink';
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao)


// if (pontuacaoUsuario >+ 1000) {
//     console.log('Usuário VIP');                //jeito maior
// } else {
//     console.log('Usuário normal')
// }