var nomecompleto = document.getElementById("nome")
var email = document.getElementById("email")
var telefonedecontato = document.getElementById("telefone")
var cpf = document.getElementById("cpf")
var celular = document.getElementById("celular")
var estado = document.getElementById("estado")
var cidade = document.getElementById("cidade")
var mensagem = document.getElementById("inputmsg")

function enviar() {
    if (document.getElementById("nomecompleto").value.length < 3) {
        alert("Por Favor informe seu nome")
    }else if(documento.getElementById("telefone").value.length<8){
        alert("Por Favor informe seu telefone")
    }else if(documento.getElementById("email").value.length<4){
        alert("Por Favor informe seu e-mail")
    }else if(documento.getElementById("estado").value.length<2){
        alert("Por Favor informe seu estado")
    }else if(documento.getElementById("cidade").value.length<3){
        alert("Por Favor informe sua cidade")
    }else if(documento.getElementById("cpf").value.length<11){
        alert("Por Favor informe seu cpf")
    }else if(documento.getElementById("inputmsg").value.length<10){
        alert("Por Favor informe sua mensagem")
    }else if(documento.getElementById("inputmsg").value.length>10){
        alert("Obrigado, sua mensagem foi enviada com sucesso! Dentro de alguns dias entraremos em contato")


}
}