// componente botão concluir tarefa
const BotaoConclui = () => { 
  const botaoConclui = document.createElement('button');

  botaoConclui.classList.add('check-button');
  botaoConclui.innerText = 'concluir';
  botaoConclui.addEventListener('click', concluirTarefa);

  return botaoConclui;
}

// função grifar tarefa concluída
const concluirTarefa = evento => {
  const botaoConclui = evento.target;
  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;