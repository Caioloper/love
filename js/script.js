// Script para adicionar interatividade ao site amoroso

document.addEventListener('DOMContentLoaded', function() {
    
    // Função para criar partículas de coração
    function createHeartParticle() {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.innerHTML = '❤️';
        
        // Posição aleatória na tela
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(heart);
        
        // Remove o coração após a animação
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4000);
    }
    
    // Criar partículas de coração a cada 2 segundos
    setInterval(createHeartParticle, 2000);
    
    // Efeito de clique na imagem
    const profileImage = document.querySelector('.img-fluid');
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            // Criar múltiplos corações ao clicar na imagem
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createHeartParticle();
                }, i * 200);
            }
            
            // Mostrar mensagem especial
            showLoveMessage();
        });
    }
    
    // Função para mostrar mensagem de amor
    function showLoveMessage() {
        const messages = [
            "Você é a razão do meu sorriso! 😊",
            "Meu coração bate mais forte por você! 💓",
            "Cada momento com você é especial! ✨",
            "Você é meu mundo inteiro! 🌍",
            "Te amo mais a cada dia! 💕"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Criar elemento de mensagem
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 1001;
            animation: fadeInOut 3s ease-in-out;
        `;
        messageDiv.innerHTML = randomMessage;
        
        document.body.appendChild(messageDiv);
        
        // Remove a mensagem após 3 segundos
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 3000);
    }
    
    // Efeito de hover nos parágrafos
    const paragraphs = document.querySelectorAll('.lead');
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        paragraph.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Efeito de digitação no título
    const title = document.querySelector('h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                title.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar efeito de digitação após um pequeno delay
        setTimeout(typeWriter, 500);
    }
    
    // Adicionar efeito de brilho ao passar o mouse no header
    const header = document.querySelector('header');
    if (header) {
        header.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(45deg, #ff8a8a, #ff6b6b)';
            this.style.transition = 'background 0.3s ease';
        });
        
        header.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a52)';
        });
    }
    
    // Efeito de scroll suave
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('main');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Adicionar CSS para animação fadeInOut
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Site amoroso carregado com sucesso! 💕');
});

