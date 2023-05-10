// importar módulos (classes)
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// instanciar objetos para cada cliente
const cliente1 = new Cliente ('Ricardo', 11122233345, 123456789);
const cliente2 = new Cliente ('Alice', 66622233345);

// criar contas de clientes
const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102);

// criar conta e cliente
const conta3 = new ContaCorrente();
conta3.cliente = new Cliente('João', 77722233345, 987654321);
conta3.agencia = 103;

// criar movimentação da conta corrente
conta1.depositar(500);
conta1.depositar(100);
conta1.depositar(100);
conta1.depositar(100);

conta1.sacar(50);

conta1.transferir(200, conta2);
conta1.transferir(300, conta3);

// exibir no console
console.log('\n informações do cliente1:\n', cliente1);
console.log('\n informações da conta1:\n', conta1);
console.log('\n informações do cliente2:\n', cliente2);
console.log('\n informações da conta2:\n', conta2);
console.log('\n informações do cliente3:\n', conta3.cliente);
console.log('\n informações da conta3:\n', conta3, '\n');
console.log('quantidade de contas abertas:', ContaCorrente.quantidadeContas);
