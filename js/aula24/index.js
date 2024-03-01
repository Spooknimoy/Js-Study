/*
entre 0 - 11 - bom dia
entre 12 - 17 - boa tarde
entre 18 - 23 - boa noite
*/
   

// If PODER SER USADO SOZINHO
// Else não pode ser utilizado sozinho sem o IF
// posso ter varios Else if ...
// Só posse ter um Else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 55;

if (hora >= 0  && hora <= 11) {
    console.log('bom Dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Olá')
} 


const tenhoGrana = true;

if(tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair');
}