console.log(`\nTrabalhando com operadores lógicos encadeados \n`);

const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 15;

console.log('Destinos possíveis:');
console.log(listaDeDestinos, '\n');

// adicionando 3a condição

const estaAcompanhado = true;
const temPassagemComprada = true;

// operador lógico "ou" ( || )

if (idadeComprador >= 18 || estaAcompanhado == true) {
  console.log('Status da compra: \nPessoa maior de idade ou acompanhada de adulto.');
  listaDeDestinos.splice(2, 1);
  console.log(listaDeDestinos);
} else {
  console.log('Status da compra: \nPessoa com', idadeComprador, 'anos de idade e desacompanhada. \nOperação não pode ser realizada.');
  // console.log(listaDeDestinos);
}

console.log('\nStatus do embarque:');

if (idadeComprador >= 18 && temPassagemComprada) {
  console.log('Tudo em ordem. Boa viagem! \n');
} else {
  console.log('Sem passagem não pode embarcar. \n')
}


