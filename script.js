document.addEventListener('DOMContentLoaded', () => {
    console.log("Pronto para carregar dados de API no futuro");
    
  });

  window.addEventListener('DOMContentLoaded', () => {
    const msg = document.createElement('div');
    msg.textContent = 'Bem-vindo(a) ao M\'s Blog!';
    msg.className = 'alert alert-light text-center position-fixed top-0 start-50 translate-middle-x mt-3';
    msg.style.zIndex = '1055';
    document.body.appendChild(msg);
  
    setTimeout(() => msg.remove(), 3000); 
    
  });
  
const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.className = "btn btn-light rounded-circle";
topBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  z-index: 999;
`;
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
