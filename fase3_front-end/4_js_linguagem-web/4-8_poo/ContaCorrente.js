// instanciar classe "conta corrente"

import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static quantidadeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  // acessores - proteger atributos

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente;
  }

  get saldo(){
    return this._saldo;
  }

  // construtor

  constructor(cliente, agencia, quantidadeContas){
    this.cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.quantidadeContas += 1;
  }

  // adicionar métodos - comportamentos ao objeto (regras do negócio)

  sacar(valor){
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor){
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valor);
  }
}