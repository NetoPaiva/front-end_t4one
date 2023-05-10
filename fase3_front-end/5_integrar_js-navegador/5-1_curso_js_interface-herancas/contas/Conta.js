export class Conta{
  
  constructor(saldoInicial, cliente, agencia){
    if (this.constructor == Conta) {
      throw new Error('Esta é uma classe abstrata, não deve ser instaciada!');
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

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

// métodos de movimentação

    sacar(){
      throw new Error('Não instancie um método abstrato!');
    }

    _sacar(valor, taxa){
      const valorSacado = taxa * valor;

      if (this._saldo >= valorSacado) {
        this._saldo -= valorSacado;
        return valorSacado;
      }

      return 0;
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