

function continuar() {

    if (document.getElementById("email").value.length < 3) {
        alert("Por Favor informe seu email")
        /* } else if (document.getElementById("email").value.length > 3) {*/

    } else if (document.getElementById("senha").value.length < 5) {
        alert("Senha Invalida")

    } else if (document.getElementById("senha").value.length > 5) {
        alert("Login realizado com sucesso")

    }

}

