// componente botão remover tarefa
const BotaoDeleta = () =>{
  const botaoDeleta = document.createElement('button');

  botaoDeleta.innerText = 'deletar';
  botaoDeleta.addEventListener('click', deletarTarefa)
  return botaoDeleta;
}

// função remover tarefa
const deletarTarefa = evento =>{
  const botaoDeleta = evento.target;
  const tarefaCompleta = botaoDeleta.parentElement;

  tarefaCompleta.remove();

  return botaoDeleta;
}

export default BotaoDeleta;