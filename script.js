const image = document.getElementById('cat-image');
const errorMsg = document.getElementById('error-message');
const btn = document.getElementById('btn-new-cat');

async function getCat() {
    try {
        errorMsg.innerText = ""; // Limpa erros anteriores
        
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        
        if (!response.ok) throw new Error("Erro na API");

        const data = await response.json();
        
        // Extrai a URL do JSON: data é um array [ { url: "..." } ]
        image.src = data[0].url;
        image.style.display = 'block';

    } catch (error) {
        errorMsg.innerText = "Não foi possível carregar o gatinho. Tente novamente!";
        image.style.display = 'none';
    }
}

btn.addEventListener('click', getCat);
window.onload = getCat; // Carrega um ao abrir a página