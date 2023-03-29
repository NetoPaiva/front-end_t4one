// exibir nome do programa
console.log(`\nTrabalhando com for\n---------------------\n`);

// declaração compacta de Array
const listaDeDestinos = [
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
];

// variáveis do comprador
const idadeComprador = 15;
const estaAcompanhado = false;
let temPassagemComprada = false;

// variável com a condição de compra
const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

// variáveis do destino escolhido
const destino = 'Salvador';
let destinoExiste = false;

// variável do contador do índice da lista
let contador = 0;

// exibir lista de destinos
console.log('Destinos possíveis:', listaDeDestinos, '\n');

//verificar existência do destino com "while"
/* while(contador<3){
  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break;
  } 
  contador ++;
} */

// verificar existência do destino com "for"
for(let i = 0; i <3; i++){
  if(listaDeDestinos[i] == destino){
    destinoExiste = true;
  }
}

// exibir o destino escolhido e se a condição é verdadeira ou falsa
/* console.log('Destino escolhido:', destino);
console.log(destino, 'existe:', destinoExiste, '\n'); */

// exibir destino e se existe ou não 
if (destinoExiste) {
  console.log(`Destino escolhido: [ '` + destino + `' ]. Existe. Prosseguir operação.\n`);
} else {
  console.log(`Destino escolhido: [ '` + destino + `' ]. Não existe. Encerrar operação.\n`);
}

//verificare se pode comprar passagem e se destino existe
if(podeComprar && destinoExiste){
  console.log('Tudo OK. Boa viagem!! \n');
} else{
  console.log('Ops! Há um erro.');
  console.log('Pode comprar:', podeComprar, '\nDestino existe:', destinoExiste, '\n');
}