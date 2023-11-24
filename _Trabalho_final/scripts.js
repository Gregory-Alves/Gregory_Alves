const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confSenha = document.getElementById("confSenha");
const cidade = document.getElementById("cidade");
const tel = document.getElementById("tel");


var dados = JSON.parse(localStorage.getItem("dados")) || [];

    function salvar(){
    let novoNome = nome.value;
    let novoEmail = email.value;
    let novaSenha = senha.value;
    let novaConfSenha = confSenha.value;
    let novaCidade = cidade.value;
    let novoTel = tel.value;
    
    dados.push({nome: novoNome, email: novoEmail, senha: novaSenha, confSenha: novaConfSenha, cidade: novaCidade, tel: novoTel});
    
    localStorage.setItem("dados", JSON.stringify(dados));
    
    
    }

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    senhazinha();

    var senha = document.getElementById("senha").value;
    var confSenha = document.getElementById("confSenha").value;

    while(senha.length < 8){
        senhaErrada();
        senhazinha(senha);
        return;
    }
 
    if (confSenha !== senha){
        senhaErrada();
        alert("As senhas estão diferentes");
        return;
    }

    else{
        concluido();
        alert("Cadastro realizado!")
    }

    form.submit();
})

function senhazinha(){
    var senha = document.getElementById("senha").value;
    if(senha.length <8)
    alert("Sua senha tem que ter no minimo 8 caracteres");
    return;
}

function senhaErrada(){
    document.getElementById('confSenha').style.color = 'purple';
    document.getElementById('confSenha').style.border = '3px solid purple';
    document.getElementById('senha').style.color = 'purple';
    document.getElementById('senha').style.border = '3px solid purple';
}

function concluido(){
    document.getElementById('confSenha').style.color = '';
    document.getElementById('confSenha').style.border = '';
    document.getElementById('senha').style.color = '';
    document.getElementById('senha').style.border = '';
}
