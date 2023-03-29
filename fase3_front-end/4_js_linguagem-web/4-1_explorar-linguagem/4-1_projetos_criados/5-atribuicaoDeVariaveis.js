console.log("Atribuição de variáveis");

const idade = 29;
// const nome = 'Neto';
let nome = 'Neto';
const sobrenome = 'Paiva';
const nomeCompleto = nome + sobrenome;

console.log(nome + sobrenome);
console.log(nome + ' ' + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ` + nome);
console.log(`Meu nome é ${nome} ${sobrenome}`);
console.log(nomeCompleto);

// nome = (nome + ' ' + sobrenome);
nome = `${nome} ${sobrenome}`;

console.log(nome);


console.log();