import { clienteService } from "../service/cliente-service.js";

(async () => {
  const pegaURL = new URL(window.location);
  const id = pegaURL.searchParams.get('id');
  const inputNome = document.querySelector('[data-nome]');
  const inputEmail = document.querySelector('[data-email]');
  const formulario = document.querySelector('[data-form]');

  try {
    const dados = await clienteService.editaCliente(id);
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
  } catch (error) {
    console.log (error);
    window.location.href = '../telas/erro.html';
  }

  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    try {
      await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
      window.location.href = '../telas/edicao_concluida.html'
    } catch (error) {
      console.log(error);
      window.location.href = '../telas/erro.html';
    }
  });

}) ();




/* clienteService.editaCliente(id)
.then( dados => {
  inputNome.value = dados.nome;
  inputEmail.value = dados.email;
}) */

/* formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
  .then( () => {
    window.location.href = '../telas/edicao_concluida.html'
  })
}) */
