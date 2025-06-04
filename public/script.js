document.addEventListener('DOMContentLoaded', () => {
  function criarCardPostagem(postagem, indice) {

    const imagensPersonalizadas = [
      'imagens/post-1.jpg',
      'imagens/post-2.jpg', 
      'imagens/post-3.jpg',
      'imagens/post-4.jpg',
      'imagens/post-5.jpg',
      'imagens/post-6.jpg'
    ];
    
    const imagem = imagensPersonalizadas[indice] || 'imagens/default.jpg';

    const col = document.createElement('div');
    col.className = 'col';

    col.innerHTML = `
      <div class="card h-100">
        <img src="${imagem}" class="card-img-top" alt="${postagem.title}" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${postagem.title}</h5>
          <p class="card-text">${postagem.description}</p>
          <p class="card-text"><small class="text-muted">Publicado em ${postagem.postDate}</small></p>
          <a href="postagem.html?id=${indice}" class="btn btn-light">LER</a>
        </div>
      </div>
    `;

    return col;
  }

  const containerPostagens = document.getElementById('postagens');

  function carregarPostagens() {
    fetch('https://api-fake-blog.onrender.com/postagens/')
      .then(response => response.json())
      .then(postagens => {
        if (!postagens || postagens.length === 0) return;

        postagens.slice(0, 6).forEach((postagem, indice) => {
          const cardCol = criarCardPostagem(postagem, indice);
          containerPostagens.appendChild(cardCol);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar postagens:', error);
      });
  }

  carregarPostagens();

  const topBtn = document.createElement("button");
  topBtn.textContent = "↑";
  topBtn.className = "btn btn-light rounded-circle";
  topBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    z-index: 999;
    width: 50px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
  `;
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});