console.log(`Trabalhando com listas - arrays`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos possíveis:`);
// console.log(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const listaDeDestinos = new Array (
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`)

console.log(listaDeDestinos);

// listaDeDestinos.splice(2,1);
listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

