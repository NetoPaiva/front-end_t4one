console.log(`Trabalhando com condicionaiss`);

const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 15;

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

// if - condição simples
if (idadeComprador >= 18) {
  console.log('Comprador maior de idade');
  listaDeDestinos.splice(1,1);
}

// if else - condição completa
if (idadeComprador >= 18) {
  console.log('Comprador maior de idade');
  listaDeDestinos.splice(1,1);
  console.log(listaDeDestinos);
} else {
  console.log('A idade do comprador é:', idadeComprador, 'anos.')
  console.log('Não posso vender para menor de idade.')
}




