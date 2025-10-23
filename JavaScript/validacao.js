document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede envio automático

    let valido = true;

    // Função para mostrar erro
    function mostrarErro(id, mensagem) {
      const campo = document.getElementById(id);
      let erro = campo.nextElementSibling;
      if (!erro || !erro.classList.contains("erro")) {
        erro = document.createElement("small");
        erro.classList.add("erro");
        campo.insertAdjacentElement("afterend", erro);
      }
      erro.textContent = mensagem;
      erro.style.color = "red";
      erro.style.fontSize = "0.9em";
      valido = false;
    }

    // Função para limpar erros antigos
    function limparErros() {
      document.querySelectorAll(".erro").forEach((el) => el.remove());
    }

    limparErros();

    // Captura valores
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();

    // Validações
    if (nome === "") mostrarErro("nome", "O nome é obrigatório.");
    if (!email.includes("@")) mostrarErro("email", "E-mail inválido.");
    if (cpf.length < 11) mostrarErro("cpf", "CPF deve ter 11 dígitos.");
    if (telefone.length < 10) mostrarErro("telefone", "Telefone inválido.");
    if (cep.length < 8) mostrarErro("cep", "CEP deve ter 8 dígitos.");

    if (valido) {
      alert("Cadastro enviado com sucesso!");
      form.reset();
    }
  });
});
