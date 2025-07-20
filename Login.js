document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const status = document.getElementById("status");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.email.value.trim();
    const senha = loginForm.senha.value.trim();

    const admin = "zizacaquarta@gmail.com";
    const analistas = ["josecaquarta20@hotmail.com"];

    if (email === admin || analistas.includes(email)) {
      status.textContent = "✅ Login bem-sucedido!";
    } else {
      status.textContent = "❌ Acesso negado.";
    }
  });
});