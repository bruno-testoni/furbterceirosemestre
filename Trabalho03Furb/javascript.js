function verificar(){

    var inpNome = document.getElementById("nome")
    var inpSal = document.getElementById("salario")
    var inpId = document.getElementById("idade")

    if(!inpNome.checkValidity()){
        alert(inpNome.validationMessage);
    }
    else if(!inpSal.checkValidity()){
        alert(inpSal.validationMessage);
    }
    else if(!inpId.checkValidity()){
        alert(inpId.validationMessage);
    }

function mostrarDadosDoEmpregado(empregado){
    var identificador = empregado.id;
    var nome = empregado.employee_name;
    var salario = empregado.employee_salary;
    var idade = empregado.employee_age;
    var avatar = empregado.profile_image;

    var table = document.getElementById("/tabela");

    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = identificador;
    tr.appendChild(td);

    tn = document.createElement('tn');
    tn.innerHTML = nome;
    tr.appendChild(tn);

    ts = document.createElement('ts')
    ts.innerHTML = salario;
    tr.appendChild(ts);

    ti = document.createElement('ti');
    ti.innerHTML = salario;
    tr.appendChild(ti);

    var imagem = avatar;

    ta = document.createElement('ta');
    var teste = '<img src="'+ imagem + '" alt="imagem" width="113px" height="150px"></img>'
    ta.innerHTML = 
    teste
    tr.appendChild(ta);

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
        xhttp.open('PUI', 'http://rest-api-employees.jmborges.site/api/v1/update/'+document.getElementById("idAtual").innerHTML, true);
        xhttp.setRequestHeader('Content-type', 'application/jason');

        var empregadoEd = {
            name : document.getElementById("nome").value.
            salary : document.getElementById("salario").value.
            age : document.getElementById("idade").value.
            profile_image : document.getElementById("perfil").value
        };

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    var retorno = JSON.parse(this.responseText);
                    var empregado = retorno.data;
                    alert('Empregado' +empregado.name + "atualizado");
                    document.getElementById("botao").value = "Salvar";
                    document.getElementById("titulo").innerHTML = "Adicionado novo empregado";
                    document.getElementById("idAtual").innerHTML = "";
                }else{
                  alert('Ocorreu um erro (status:' + this.status + ')');
                }
            }
        };  
        var formatoJson = JSON.stringify(empregadoEditado);
        xhttp.send(formatoJson);
    }
    else{
        enviar();
    }
}

        function editar(id){
            var xhttp = new XMLHttpRequest();
            xhttp.open('Get', 'http://rest-api-employees.jmborges.site/api/v1/employee/'+id, true);
            xhttp.send();
            xhtpp.onreadystatechange = function(){
                
                if(this.readyState == 4){
                    if(this.status == 200){
                        var retorno = JSON.parse(this.responseText);
                        var empregado = retorno.data;
                        document.getElementById("botao").textContent = "Editar";
                        document.getElementById("titulo").innerHTML = "Editando dados";
                        document.getElementById("idAtual").innerHTML = empregado.id;   
                        colocaNaTabela(empregado);
                    }else{
                        alert('Ocorreu um erro (status:' + this.status + ')');
                    }                    
                }
            };
        }
        function colocaNaTabela(empregado){
            document.getElementById("nome").value = empregado.employee_name;
            document.getElementById("salario").value = empregado.employee_salary;
            document.getElementById("idade").value = empregado.employee_age;
            document.getElementById("perfil").value = empregado.profile_image;
        }
        function excluir(id){
            if(confirm("Deseja realmente apagar este empregado?")){
                str1 =  'http://rest-api-employees.jmborges.site/api/v1/delete/';
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
 function atualizaTabela(){
     var xhtpp = new XMLHttpRequest();
     xhttp.onreadystatechange = function(){
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
         xhttp.open('GET', 'http://rest-api-employees.jmborges.site/api/v1/employees', true);
         xhtpp.send();
     }
     function enviar(){
         var xhtpp = new XMLHttpRequest();
         xhttp.open('POST', 'http://rest-api-employees.jmborges.site/api/v1/create', true);
         xhttp.setRequestHeader('Content-type', 'application/json');

         var novoEmpregado = {
             name : document.getElementById("nome").value.
             salary : document.getElementById("salario").value.
            age : document.getElementById("idade").value.
            profile_image : document.getElementById("perfil").value
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
     }
    }