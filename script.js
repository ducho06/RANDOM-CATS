// Seleciona os elementos do HTML
const imgElement = document.getElementById('cat-image');
const errorElement = document.getElementById('error-message');
const btnElement = document.getElementById('new-cat-btn');

// Função principal para buscar a imagem
async function fetchCat() {
    try {
        // Limpa mensagens de erro anteriores
        errorElement.innerText = "";
        
        // Faz a requisição para a API pública
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        
        if (!response.ok) {
            throw new Error("Erro ao conectar com o servidor.");
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Extrai o link da imagem (data é um array, pegamos o índice 0)
        const catUrl = data[0].url;

        // Atribui a URL ao elemento <img> e o torna visível
        imgElement.src = catUrl;
        imgElement.style.display = "block";

    } catch (error) {
        // Exibe mensagem de erro amigável (Critério de aceitação)
        errorElement.innerText = "Ih, deu erro! Os gatinhos estão dormindo. Tente novamente.";
        imgElement.style.display = "none";
    }
}

// Evento de clique no botão para carregar uma nova imagem
btnElement.addEventListener('click', fetchCat);

// Carrega uma imagem automaticamente quando a página abre
window.onload = fetchCat;