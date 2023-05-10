// ============
// FUNCIONÁRIOS
// ============

import { Cliente } from "./Cliente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor('Rodrigo', 12345678900, 10000);
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Ricardo', 12368945601, 5000);
gerente.cadastrarSenha('456789');

const cliente3 = new Cliente('Lais', 98765432100, 98765432, '456');

const logadoDiretor = SistemaAutenticacao.login(diretor, "123456");
const logadoGerente = SistemaAutenticacao.login(gerente, "456789");
const logadoCliente3 = SistemaAutenticacao.login(cliente3, "456");

console.log(logadoDiretor, logadoGerente, logadoCliente3);


/*  CÓDIGO REFERENTE AOS CLIENTES
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./contas/ContaCorrente.js";
import { ContaPoupanca } from "./contas/ContaPoupanca.js";
import { ContaSalario } from "./contas/ContaSalario.js";

const cliente1 = new Cliente ('Ricardo', 11122233345, 123456789);

const conta1 = new ContaCorrente(cliente1, 101);
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 101);
const contaSalario1 = new ContaSalario(cliente1);

conta1.depositar(500);
conta1.depositar(100);
contaSalario1.depositar(100);

conta1.sacar(50);
conta1.sacar(600);
contaPoupanca1.sacar(10);
contaSalario1.sacar(10);

// console.log(conta1);
// console.log(contaPoupanca1);
console.log(contaSalario1);

*/

