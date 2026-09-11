const menu = document.getElementById("menu"); // pegando o elmento pelo o id
const navMenu = document.querySelector(".navegacao"); //estamos pegando o elemento de fomra generico (. = pega classe; # = pega pelo id)

menu.addEventListener("click", function() {
    if(navMenu.className == "navegacao")
    {
        navMenu.className = "navegacao ativo"; 
    }
    else
    {
        navMenu.className = "navegacao";
    }
})