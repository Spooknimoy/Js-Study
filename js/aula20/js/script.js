function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    

    const pessoas = [];
    
    function recebeEventoForm (evento) {                  //outro jeito de previnir de att no submit.
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

      pessoas.push({
       nome: nome.value,
       sobrenome: sobrenome.value,
       peso: peso.value,
       altura: altura.value
      });
        
      console.log(pessoas);

      resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();



// form.onsubmit = function(evento) {
//     evento.preventDefault();
//   alert(1);                              // previnir da pagina att.
//   console.log('foi enviado')
  
// };