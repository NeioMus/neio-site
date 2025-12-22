// JavaScript Document


document.addEventListener("DOMContentLoaded", () => {

  if (sessionStorage.getItem("acessoLiberado") === "true") {
    return;
  }

  let senha = null;

  while (senha !== "bahiaunderground2025") {
    senha = prompt("Digite a senha de acesso:");

    // Cancelou o prompt
    if (senha === null) {
      alert("Acesso restrito aos apoiadores.");
      return;
    }

    // Senha incorreta
    if (senha !== "bahiaunderground2025") {
      alert("Senha incorreta.");
    }
  }

  // Senha correta
  sessionStorage.setItem("acessoLiberado", "true");
  location.reload();

});
