// Função para ativar a animação de fade-in enquanto o usuário rola a página
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Se o elemento estiver visível na tela, ativa a animação
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  
  // Código para animação de hover nos projetos
  const projetos = document.querySelectorAll('.projeto');
  
  projetos.forEach(projeto => {
    projeto.addEventListener('mouseover', () => {
      projeto.style.transform = 'scale(1.05)';
    });
    projeto.addEventListener('mouseout', () => {
      projeto.style.transform = 'scale(1)';
    });
  });
  