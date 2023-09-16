// Validação form
const formulario = document.getElementById('formulario');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const celularInput = document.getElementById('celular');
const mensagemErro = document.getElementById('mensagemErro');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!validarNome(nomeInput.value)) {
    exibirErro('Invalid name.');
    return;
  }

  if (!validarEmail(emailInput.value)) {
    exibirErro('Invalid email.');
    return;
  }

  if (!validarCelular(celularInput.value)) {
    exibirErro('Invalid cell phone number.');
    return;
  }

  mensagemErro.textContent = 'Form sent successfully!';
  mensagemErro.style.color = 'green';
});

// Adicione um manipulador de eventos para o botão de redefinição
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function () {
  // Use o método reset() para redefinir o formulário
  formulario.reset();
  mensagemErro.textContent = ''; // Limpa qualquer mensagem de erro
});

function exibirErro(mensagem) {
  mensagemErro.textContent = mensagem;
  mensagemErro.style.color = 'red';
}

function validarNome(nome) {
  return nome.length > 0;
}

function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regexEmail.test(email);
}

function validarCelular(celular) {
  const regexCelular = /^\d{10,}$/;
  return regexCelular.test(celular);
}
