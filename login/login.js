//var nome = "kessia" NAO USAR
//const nome = "kessia" variavel constantel (inalteravel )
//let nome = "kessia" variavel permissiva (permite a troca de valor)

let CampoSenha = document.getElementById("senha"); 
const btnSenha = document.querySelector("#mostrar-senha");

console.log(CampoSenha);
console.log(btnSenha);

btnSenha.addEventListener("click", function() {
    alert("Cliquei no botão");
}); //escutador de eventos que sta esperando um click