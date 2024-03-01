const nome = 'Luan Pablo';
const sobrenome = 'Pereira';
const idade = 21;
const peso = 91;
const alturaEmCm = 1.80;
  
let imc;
let anoNascimento;

imc = peso / (alturaEmCm * alturaEmCm)
anoNascimento = 2024 - idade


//   console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', alturaEmCm, 'e seu IMC é de', imc)
//     console.log(nome, 'nasceu em', anoNascimento)

//templates strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaEmCm} e seu IMC é de, ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
