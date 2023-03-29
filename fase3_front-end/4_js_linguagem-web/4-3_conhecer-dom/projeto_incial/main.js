import BotaoConclui from "./componentes_js/concluiTarefa.js";
import BotaoDeleta from "./componentes_js/deletaTarefa.js";


// função criar tarefa
const criarTarefa = evento => {
  evento.preventDefault();

  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;
  const tarefa = document.createElement('li');
  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.classList.add('task');
  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  lista.appendChild(tarefa);

  input.value = '';
}

// seletor/evento do botão nova tarefa
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);