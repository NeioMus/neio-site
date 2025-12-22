// JavaScript Document


document.addEventListener("DOMContentLoaded", () => {

  // Se já validou nesta aba, libera
  if (sessionStorage.getItem("acessoLiberado") === "true") {
    return;
  }

  const senha = prompt("Digite a senha de acesso:");

  if (senha === "bahiaunderground2025") {
    sessionStorage.setItem("acessoLiberado", "true");
  } else {
    sessionStorage.removeItem("acessoLiberado");
    document.body.innerHTML = "";
    alert("Acesso restrito aos apoiadores.");
    window.location.replace("about:blank");
  }

});
