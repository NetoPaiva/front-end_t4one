export class SistemaAutenticacao{
  static login(usuario, senha){
    if(SistemaAutenticacao.ehUsuario(usuario)){
      return usuario.autenticar(senha);
    }
    return false;
  }
  static ehUsuario(usuario){
    return 'autenticar' in usuario 
    && usuario.autenticar instanceof Function;
  }
}