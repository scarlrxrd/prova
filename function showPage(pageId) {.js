function showPage(pageId) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Mostra a página selecionada
    document.getElementById(pageId).classList.add('active');
    
    // Atualiza os botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Ativa o botão correspondente
    event.currentTarget.classList.add('active');
    
    // Rolagem suave para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}