// exportar função genérica para selecionar inputs
export function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  // validador do tipo de input
  if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  // verificação e exibição de campo inválido
  if(input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
  } else {
    input.parentElement.classList.add('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
  }
}


// objeto para identificar tipos de erro dos inputs
const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'customError',
  'patternMismatch'
]

// objeto para receber customização de mensagens de erro
const mensagensDeErro = {
  nome: {
    valueMissing: 'O campo nome não pode estar vazio.'
  },
  email: {
    valueMissing: 'O campo email não pode estar vazio.',
    typeMismatch: 'O email digitado não é válido.'
  },
  senha: {
    valueMissing: 'O campo senha não pode estar vazio.',
    patternMismatch: 'A senha deve conter entre 6 e 12 caracteres, ao menos 1 maiúscula e 1 minúscula e 1 número, sem caracteres especiais.'
  },
  dataNascimento: {
    valueMissing: 'O campo data de nascimento não pode estar vazio',
    customError: 'Você deve ser maior de 18 anos para se cadastrar.'
  },
  cpf: {
    valueMissing:'O campo CPF não pode estar vazio.',
    customError:'O CPF digitado não é válido.'
  }
}

// objeto para selecionar tipo de input
const validadores = {
  dataNascimento:input => validaDataNascimento(input),
  cpf:input => validaCPF(input),
}



// função para exibir mensagem de erro
function mostraMensagemDeErro(tipoDeInput, input){
  let mensagem = '';
  tiposDeErro.forEach(erro => {
    if(input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro]
    }
  });

  return mensagem;
}

// função principal - validar data de nascimento
function validaDataNascimento(input) {
  // recebe valor do input
  const dataRecebida = new Date(input.value);
  // se maior de idade, mensagem vazia
  let mensagem = '';

  // compara se menor de idade
  if (!maiorQue18(dataRecebida)) {
    // se for menor exibe mensagem
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.';
  }

  // validar se input é verdadeiro ou falso para exibir mensagem
  input.setCustomValidity(mensagem);
}

// função para formatar e comparar a data de nascimento com a atual
function maiorQue18(data) {
  // recebe a data atual
  const dataAtual = new Date();

  // formata a data de nascimento e soma 18 anos
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  // retorna nascimento menor ou igual a data atual
  return dataMais18 <= dataAtual;
}

// função geral para validar CPF
function validaCPF(input){
  const cpfFormatado = input.value.replace(/\D/g, '');
  let mensagem ='';

  if(!checaCPFRepetido(cpfFormatado)) {
    mensagem = 'o CPF digitado não é válido.';
  }

  input.setCustomValidity(mensagem);
}

// função para verificar números repetidos do CPF
function checaCPFRepetido(cpf){
  const valoresRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '99999999999'
  ]
  
  let cpfValido = true;

  valoresRepetidos.forEach(valor => {
    if(valor == cpf){
      cpfValido = false;
    }
  })

  return cpfValido;
}