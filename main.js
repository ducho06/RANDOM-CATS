const imageElement = document.getElementById('cat-image');
const errorMessage = document.getElementById('error-message');

async function getCatImage() {
    try {
        // 1. Faz a requisição
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        
        // 2. Verifica se a resposta foi bem-sucedida
        if (!response.ok) throw new Error('Falha na rede');

        // 3. Converte para JSON (a API retorna um array: [ { url: "..." } ])
        const data = await response.json();
        
        // 4. Extrai a URL e atribui ao elemento <img>
        imageElement.src = data[0].url;
        imageElement.style.display = 'block';
        errorMessage.innerText = '';
        
    } catch (error) {
        // Critério de aceitação: mensagem de erro amigável
        console.error(error);
        errorMessage.innerText = "Ops! Os gatinhos estão tirando uma soneca. Tente recarregar a página.";
        imageElement.style.display = 'none';
    }
}

// Carrega a imagem ao abrir a página
window.onload = getCatImage;