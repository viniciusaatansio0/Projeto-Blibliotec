//var nome = "kessia" NAO USAR
//const nome = "kessia" variavel constantel (inalteravel )
//let nome = "kessia" variavel permissiva (permite a troca de valor)

let CampoSenha = document.getElementById("senha"); 
const btnSenha = document.querySelector("#mostrar-senha"); 


//escutador de eventos que esta esperando um click, ou seja, quando o click acontece a ação designidada contence
btnSenha.addEventListener("click", function() {
    
//    if(CampoSenha.type == "password")
//     {
//         CampoSenha.type = "text";
//     }
//     else
//     {
//         CampoSenha.type = "password";
//     }

//campo senha esta recebndo uma pergunta, campo senha é igual a password? se sim ela recebe texto, se não ela recebe password
CampoSenha.type = CampoSenha.type == "password" ? "text" : "password"
}); 