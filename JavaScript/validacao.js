// Espera o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-cadastro');

  form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede envio automático

    // Captura os campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const nascimento = document.getElementById('nascimento').value.trim();

    // ======== VALIDAÇÕES ========

    if (nome === '') {
      alert('Por favor, preencha o campo Nome.');
      return;
    }

    if (email === '') {
      alert('Por favor, preencha o campo E-mail.');
      return;
    }

    // E-mail simples
    const emailValido = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!emailValido) {
      alert('E-mail inválido! Verifique o formato.');
      return;
    }

    if (cpf === '') {
      alert('Por favor, preencha o campo CPF.');
      return;
    }

    const cpfLimpo = cpf.replace(/[^\d]+/g, '');
    if (!validaCPF(cpfLimpo)) {
      alert('CPF inválido! Verifique e tente novamente.');
      return;
    }

    if (telefone === '') {
      alert('Por favor, preencha o campo Telefone.');
      return;
    }

    const telefoneValido = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefone);
    if (!telefoneValido) {
      alert('Telefone inválido! Use o formato (11) 91234-5678.');
      return;
    }

    if (nascimento === '') {
      alert('Por favor, preencha a Data de Nascimento.');
      return;
    }

    // Tudo certo!
    alert('Cadastro enviado com sucesso!');
    form.reset();
  });

  // ======== FUNÇÃO DE VALIDAÇÃO CPF ========
  function validaCPF(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
  }
});

// ======== FUNÇÃO PARA MÁSCARAS ========
function aplicarMascara(campo, tipo) {
  let valor = campo.value.replace(/\D/g, ''); // remove tudo que não é número

  if (tipo === 'cpf') {
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  if (tipo === 'telefone') {
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
  }

  if (tipo === 'cep') {
    valor = valor.replace(/(\d{5})(\d{3})$/, '$1-$2');
  }

  campo.value = valor;
}
