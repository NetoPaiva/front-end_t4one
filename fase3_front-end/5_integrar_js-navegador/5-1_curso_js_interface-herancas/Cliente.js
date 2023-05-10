export class Cliente {
  get cpf(){
    return this._cpf;
  }

  constructor(nome, cpf, rg, senha){
    this.nome = nome;
    this._cpf = cpf;
    this._rg = rg;
    this._senha = senha;
  }

  autenticar(){
    return true;
  }
}