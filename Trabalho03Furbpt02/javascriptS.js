//Salgado
function verificarsalgado(){

    var inpNome = document.getElementById("nome")
    var inpVal = document.getElementById("valor")

    if(!inpNome.checkValidity()){
        alert(inpNome.validationMessage);
    }
    else if(!inpVal.checkValidity()){
        alert(inpVal.validationMessage);
    }

function mostrarDadosDoSalgado(salgado){
    var identificador = salgado.id;
    var nome = salgado.nome;
    var valor = salgado.valor;
    

    var table = document.getElementById("/tabela");

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = identificador;
    tr.appendChild(td);

    tn = document.createElement('tn');
    tn.innerHTML = nome;
    tr.appendChild(tn);

    tv = document.createElement('tv')
    tv.innerHTML = valor;
    tr.appendChild(tv);

    var id = identificador;
    tp = Document.createElement('tp');
    tp.innerHTML = 
    '<a href = "#" onclick = "editar(\'' + id + '\')">Editar</a>' +
    '<a href = "#" onclick = "excluir(\'' + id + '\')">Excluir</a>';    
    tr.appendChild(tp);

    table.appendChild(tr);
}
function darSequencia(){
    if(document.getElementById("botao").innerHTML == "Editar"){
    
        var xhttp = new XMLHttpRequest();
        xhttp.open('PUT', 'https://private-9dda33-salgado.apiary-mock.com/salgados/id'+document.getElementById("idAtual").innerHTML, true);
        xhttp.setRequestHeader('Content-type', 'application/jason');

        var doceEd = {
            name = document.getElementById("nome").value.
            valor = document.getElementById("valor").value
        };

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    var retorno = JSON.parse(this.responseText);
                    var doce = retorno.data;
                    alert('Salgado' +salgado.nome + "atualizado");
                    document.getElementById("botao").value = "Salvar";
                    document.getElementById("titulo").innerHTML = "Adicionado novo salgado";
                    document.getElementById("idAtual").innerHTML = "";
                }else{
                  alert('Ocorreu um erro (status:' + this.status + ')');
                }
            }
        };  
        var formatoJson = JSON.stringify(salgadoEditado);
        xhttp.send(formatoJson);
    }
    else{
        enviar();
    }
}

        function editar(id){
            var xhttp = new XMLHttpRequest();
            xhttp.open('Get', 'https://private-9dda33-salgado.apiary-mock.com/salgados/id'+id, true);
            xhttp.send();
            xhtpp.onreadystatechange = function(){
                
                if(this.readyState == 4){
                    if(this.status == 200){
                        var retorno = JSON.parse(this.responseText);
                        var doce = retorno.data;
                        document.getElementById("botao").textContent = "Editar";
                        document.getElementById("titulo").innerHTML = "Editando dados";
                        document.getElementById("idAtual").innerHTML = salgado.id;   
                        colocaNaTabela(salgado);
                    }else{
                        alert('Ocorreu um erro (status:' + this.status + ')');
                    }                    
                }
            };
        }
        function colocaNaTabela(salgado){
            document.getElementById("nome").value = salgado.nome;
            document.getElementById("valor").value = salgado.valor;
        }
        function excluir(id){
            if(confirm("Deseja realmente apagar este salgado?")){
                str1 =  'https://private-9dda33-salgado.apiary-mock.com/salgados/id';
                str = str1 + id;
                var xhttp = new XMLHttpRequest();
                xhtpp.open('DELETE', str, true);
                xhttp.setRequestHeader('Content-type', 'aplication/json');
                xhttp.send(),
                xhtpp.onreadystatechange = function(){
                    if (this.readyState == 4){
                        if(this.status == 200){
                            location.reload();
                        }
                    }
                };
            }
        }
 function atualizasalgado(){
     var xhtpp = new XMLHttpRequest();
     xhttp.onreadystatechange = function(){
         if(this.readyState == 4){
             if(this.status == 200){
                 var retorno = JSON.parse(this.responseText);
                 var salgados = retorno.data;
                 var salgados = retorno.data;
                 for(var i = 0; i < salgado.length; i++){
                     var salgado = salgado[i];
                     mostrarDadosDoSalgado(salgado);
                 }
                }else{
                    alert('Ocorreu um erro (status:' + this.status + ')');
                }
             }
         };
         xhttp.open('GET', 'https://private-9dda33-salgado.apiary-mock.com/salgados', true);
         xhtpp.send();
     }
     function enviar(){
         var table = document.getElementById("lista-salgados");
         var tabelinha = "<tr><th>ID</th><th>NOME</th><th>VALOR</th></tr>";
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function(){
             console.log('readyState:' + this.readyState);
             console.log('Status:' + this.readyState);
             if(this.readyState == 4){
                 if(this.status == 200){
                     var objetoRetornado = JSON.parse(this.responseText);
                     console.log(objetoRetornado.data);
                     for(var i = 0; i < objetoRetornado.data.length; i++){
                         tabelinha = tabelinha +
                         "<tr><td>" + objetoRetornado.data[i].id + "</td><td>" +
                         + objetoRetornado.data[i].nome + "</td></td>" +
                         + objetoRetornado.data[i].valor + "</td></td>" +
                         '<a href = "#" onclick = "editar(\'' + id + '\')">Editar</a>' +
                         '<a href = "#" onclick = "excluir(\'' + id + '\')">Excluir</a>';    
                     }
                     table.innerHTML = tabelinha; 
                     console.log(table); 
                 }
                } else {

                }
             }; 
             xhttp.open('POST', 'https://private-9dda33-salgado.apiary-mock.com/salgados', true);
             xhttp.send();
         }
         /*
         var xhtpp = new XMLHttpRequest();
         xhttp.open('POST', 'http://rest-api-employees.jmborges.site/api/v1/create', true);
         xhttp.setRequestHeader('Content-type', 'application/json');

         var novoEmpregado = {
             name = document.getElementById("nome").value.
             salary = document.getElementById("salario").value.
            age = document.getElementById("idade").value.
            profile_image = document.getElementById("perfil").value
         }
         if(this.readyState == 4){
            if(this.status == 200){
                var retorno = JSON.parse(this.responseText);
                var empregados = retorno.data;
                var empregados = retorno.data;
                for(var i = 0; i < empregado.length; i++){
                    var empregado = empregado[i];
                    mostrarDadosDoEmpregado(empregado);
                }
               }else{
                   alert('Ocorreu um erro (status:' + this.status + ')');
               }
            }
        };
        xhttp.open('GET', 'http://rest-api-employees.jmborges.site/api/v1/create', true);
        xhtpp.send();
     }*/
    }