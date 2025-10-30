// JavaScript/spa.js

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  // Função para carregar páginas dinamicamente
  async function carregarPagina(url) {
    const resposta = await fetch(url);
    const html = await resposta.text();
    main.innerHTML = html;
  }

  // Intercepta os cliques do menu
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Evita recarregar a página
      const url = event.target.getAttribute("href");
      carregarPagina(url);
      window.history.pushState({}, "", url); // Atualiza o endereço da URL
    });
  });

  // Permite navegar com os botões do navegador
  window.addEventListener("popstate", () => {
    carregarPagina(window.location.pathname);
  });
});
