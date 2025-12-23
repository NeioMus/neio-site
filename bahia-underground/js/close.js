// JavaScript Document


const senhaCorreta = "bahiaunderground2025";

if (!sessionStorage.getItem("acessoLiberado")) {
  const entrada = prompt("Digite a senha de acesso:");

  if (entrada === senhaCorreta) {
    sessionStorage.setItem("acessoLiberado", "true");
  } else {
    alert("Acesso restrito aos apoiadores.");
    document.body.innerHTML = "";
  }
}
