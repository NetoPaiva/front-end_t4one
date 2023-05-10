const listaClientes = async () => {
  const resposta = await fetch(`http://localhost:3000/profile`);
  if (resposta.ok){
    return await resposta.json();
  }
  throw new Error('Não foi possível listar cliente.');
}

const criaCliente = async (nome, email) => {
  const resposta = await fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  });
  if (resposta.ok){
    return resposta.body;
  }
  throw new Error('Não foi possível criar um cliente.');
}

const removeCliente = async (id) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  });
  if (!resposta.ok) {
    throw new Error('Não foi possível remover cliente.');
  }
}

const editaCliente = async (id) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`);
  if (resposta.ok) {
    return await resposta.json();
  }
  throw new Error('Não foi possível editar cliente.');
}

const atualizaCliente = async (id, nome, email) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  if(resposta.ok){
    return await resposta.json();
  }
  throw new Error('Não foi possível atualizar cliente.')
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  editaCliente,
  atualizaCliente
}


// funções originais dadas em aula

/* const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
  .then(resposta => {
    return resposta.json();
  })
} */

/* const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then(resposta => {
    return resposta.body;
  })
} */

/* const editaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`)
  .then(resposta => {
    return resposta.json();
  })
} */

/* const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then( resposta => {
    return resposta.json()
  })
} */
