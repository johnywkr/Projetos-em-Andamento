function validar() {
  /* variaveis de sistema */
  var matricula = document.getElementById("text0").value;
  var cpf = document.getElementById("nu1m").value;
  /* variaveis de base local */
  var loginLocal = "jairo@teste.com.br";
  var senhaLocal = "1234";
  if (matricula == loginLocal && cpf == senhaLocal) {
    alert("Sucesso");
  } else {
    alert("Erro");
  }
}
