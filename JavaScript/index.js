function atualizarDireitosAutorais() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const direitosAutorais = document.getElementById("direitos-autorais");
  direitosAutorais.textContent = `&copy; ${anoAtual} - Todos os direitos reservados.`;
}

atualizarDireitosAutorais();
