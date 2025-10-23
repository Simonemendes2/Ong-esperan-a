// Espera o navegador carregar todo o HTML antes de rodar o JS
document.addEventListener('DOMContentLoaded', function() {

  // 1. Encontra o formulário no HTML usando o ID
  const form = document.getElementById('form-cadastro');

  // 2. Adiciona um "escutador de eventos":
  //    Quando o usuário tentar "enviar" (submit) o formulário...
  form.addEventListener('submit', function(evento) {

    // 3. IMPEDE o formulário de ser enviado (o comportamento padrão)
    evento.preventDefault();

    // --- AQUI COMEÇA NOSSA VERIFICAÇÃO ---

    // 4. Encontra os inputs pelos IDs que você colocou no HTML
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    // (Vamos adicionar os outros depois)

    // 5. Pega o que o usuário digitou (o "valor")
    const nomeValor = nomeInput.value.trim(); // .trim() remove espaços em branco
    const emailValor = emailInput.value.trim();

    // 6. Faz a verificação (exemplo simples)
    if (nomeValor === '') {
      // Se o nome estiver vazio
      alert('Por favor, preencha o campo Nome.');
    } else if (emailValor === '') {
      // Se o e-mail estiver vazio
      alert('Por favor, preencha o campo E-mail.');
    } else {
      // Se tudo estiver OK (por enquanto)
      alert('Cadastro enviado com sucesso!'); 
      // (No futuro, aqui você enviaria os dados de verdade)
      // form.submit(); // Isso enviaria o formulário
    }
  });
});