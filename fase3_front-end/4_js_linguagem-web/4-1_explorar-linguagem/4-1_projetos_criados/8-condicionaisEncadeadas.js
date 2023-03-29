console.log(`Trabalhando com condicionaiss`);

const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 15;

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

// adicionando 3a condição

const estaAcompanhado = true;


if (idadeComprador >= 18) {
  console.log('Comprador maior de idade');
  listaDeDestinos.splice(1,1);
  console.log(listaDeDestinos);
} 
  else if (estaAcompanhado == true){
  console.log('Comprador com', idadeComprador, 'anos de idade acompanhado de adulto.');
  listaDeDestinos.splice(1,1);
  console.log(listaDeDestinos);
} 
  else {
  console.log('Comprador com', idadeComprador, 'anos de idade. Não pode realizar operação.');
  console.log(listaDeDestinos);
}




