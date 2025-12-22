// JavaScript Document


document.addEventListener("DOMContentLoaded", () => {

  if (sessionStorage.getItem("acessoLiberado") === "true") {
    return;
  }

  const senha = prompt("Digite a senha de acesso:");

  if (senha === "bahiaunderground2025") {
    sessionStorage.setItem("acessoLiberado", "true");
    location.reload();
  } else {
    sessionStorage.removeItem("acessoLiberado");
    document.body.innerHTML = "";
    alert("Acesso restrito aos apoiadores.");
    // NÃO redireciona para about:blank
  }

});
