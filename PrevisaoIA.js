
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("simulacao");

  try {
    const response = await fetch("mock_jogos.json");
    const dados = await response.json();

    let html = "<h3>Resultados da Simulação</h3><ul>";
    dados.forEach((jogo, index) => {
      html += `<li><strong>Jogo ${index + 1}:</strong> ${jogo.jogador1} vs ${jogo.jogador2} - <em>${jogo.resultado}</em></li>`;
    });
    html += "</ul>";

    container.innerHTML = html;
  } catch (error) {
    container.innerHTML = "<p>Erro ao carregar os dados de simulação.</p>";
  }
});
