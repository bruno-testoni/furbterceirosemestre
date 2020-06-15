
var nomecompleto = document.getElementById("nomecompleto")
var email = document.getElementById("email")
var datanascimento = document.getElementById("datanascimento")
var cpf = document.getElementById("cpf")
var senha = document.getElementById("senha")
var emails = [];
var cpfs = [];

function cadastrar() {
  var email = document.getElementById("email").value;
  var cpf = document.getElementById("cpf").value;
  if (document.getElementById("nomecompleto").value.length < 3) {
    alert("Por Favor informe seu nome")

  } else if (document.getElementById("email").value.length < 3) {
    alert("Por Favor informe seu email")

    /*}else if(document.getElementById("email").value.length == emailcadastro){
   alert("Email ja cadastrado")*/

  } else if (emails.indexOf(email) >= 0) {
    alert("Email ja cadastrado")
  /*} else if (document.getElementById("email").vale.length = localStorage.getItem(emails)) {
    alert("Email ja cadastrado")*/

  } else if (document.getElementById("datadenascimento").value.length < 3) {
    alert("Por Favor informe sua data de nascimento")

  } else if (document.getElementById("cpf").value.length < 3) {
    alert("Por Favor informe seu cpf ")

    /*}else if(document.getElementById("cpf").value.length == cpfcadastro){
      alert("Cpf ja cadastrado")*/
  } else if (cpfs.indexOf(cpf) >= 0) {
    alert("Cpf ja cadastrado")

  } else if (document.getElementById("senha").value.length < 5) {
    alert("Por Favor digite uma senha valida")

  } else if (document.getElementById("confirmasenha").value.length < 1) {
    alert("Por Favor confirme sua senha")

  } else if (document.getElementById("senha").value.length != document.getElementById("confirmasenha").value.length) {
    alert("Senhas digitadas sao diferentes, favor verifique")

  } else if (document.getElementById("senha").value.length == document.getElementById("confirmasenha").value.length) {

    alert("Bem vindo(a), sua conta foi cadastrada com sucesso!")

  }
  emails.push(email);

  cpfs.push(cpf);
  /*if (typeof (Storage) !== "undefined") {
    
    localStorage.setItem(emails);*/
  }
