const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//* CONFIGURAÇÃO DA PAGINAÇÃO

// Define quantos livros serão mostrados em cada página

const livrosPorPagina = 4;
// Guarda qual página está sendo exibida (começando na página um)
let paginaAtual = 1;

//? Calculando o total de páginas
// Divide a quantidade total de livros pela quantidade de livros por página;
// Math.ceil = arredonda o resultado para cima, exemplo: 10 livros / 4 por página = 2.5. Com o Math.ceil(), o valor fica 3, já que arredondou para cima
const totalPagina = Math.ceil(livros.length / livrosPorPagina);

//? Função responsável por mostrar em nossa página os elementos (atualizar os elementos)
function mostrarPagina() {

    // Descobrir o índice do primeiro livro que deve aparecer

    const inicio = (paginaAtual - 1) * livrosPorPagina;

    // Descobre até onde os livros devem ser exibidos
    const fim = inicio + livrosPorPagina;

    // Percorre toda a lista de livros encontrados no HTML; "livro" representa o elemento atual; "posicao" representa a posição desse livro na lista
    livros.forEach((livro, posicao) => {
        // Início na página 1 = 0; fim = 4

        // Verifica se o índice/posição do livro está dentro do intervalo da página atual
        if (posicao >= inicio && posicao < fim) {
            // Se estiver dentro do intervalo, mostra o livro
            livro.style.display = "grid";
        }
        else
            // Se não estiver, esconde o livro
            livro.style.display = "none";
    })

    // Atualiza no HTML o número da página atual
    numeroPagina.textContent = paginaAtual;

    // Inicialmente, consideramos o fim como a posição do último livro mostrado
    let ultimoLivro = fim;

    // Se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if(ultimoLivro > livros.length)
    {
        ultimoLivro = livros.length
    }

    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros.`;
}

// Evento de clique no botão de próxima página

botaoProxima.addEventListener("click", () => {
    // Só permite avançar se ainda existir uma próxima página
    if(paginaAtual < totalPagina)
    {
        paginaAtual++; // Avança uma página
        mostrarPagina(); // Atualiza os livros exibidos na tela
    }
})

// Evento de clique no botão de página anterior
botaoAnterior.addEventListener("click", () => {
    // Só permite voltar se não estivermos na primeira página
    if(paginaAtual > 1)
    {
        paginaAtual--; // Volta uma página
        mostrarPagina(); // Atualiza os livros exibidos na tela
    }
})

mostrarPagina(); // Quando a página carregar, precisamos chamar a função mostrarPagina() uma vez para esconder os livros que não pertencem à primeira página