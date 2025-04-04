document.addEventListener('DOMContentLoaded', () => {
    // Carousel para a seção "cards" (Benefícios) - 6 cards
    const benefitsCarousel = document.querySelector('.cards .carousel');
    const benefitsDots = document.querySelectorAll('.cards .dot');
    let benefitsCurrentIndex = 0;

    function updateBenefitsCarousel(index) {
        // Cada card ocupa 100% da largura do container (min-w-full)
        benefitsCarousel.style.transform = `translateX(-${index * 100}%)`;
        benefitsDots.forEach(dot => dot.classList.remove('bg-orange-500'));
        benefitsDots[index].classList.add('bg-orange-500');
    }

    benefitsDots.forEach(dot => {
        dot.addEventListener('click', () => {
            benefitsCurrentIndex = parseInt(dot.getAttribute('data-index'));
            updateBenefitsCarousel(benefitsCurrentIndex);
        });
    });

    // Inicializa o carrossel de benefícios
    updateBenefitsCarousel(0);

    // Carousel para a seção "secrets-section" - Adaptado para 6 cards
    const secretsCarousel = document.querySelector('.secrets-section .cards-container');
    const secretsDots = document.querySelectorAll('.secrets-section .dot');
    let secretsCurrentIndex = 0;

    function updateSecretsCarousel(index) {
        // Em mobile, 1 card por vez (100%); em desktop (md), 3 cards visíveis (33.33%)
        const translateValue = window.innerWidth >= 768 ? -(index * 33.33) : -(index * 100);
        secretsCarousel.style.transform = `translateX(${translateValue}%)`;
        secretsDots.forEach(dot => dot.classList.remove('bg-orange-500'));
        secretsDots[index].classList.add('bg-orange-500');
    }

    secretsDots.forEach(dot => {
        dot.addEventListener('click', () => {
            secretsCurrentIndex = parseInt(dot.getAttribute('data-index'));
            updateSecretsCarousel(secretsCurrentIndex);
        });
    });

    // Inicializa o carrossel da secrets-section
    updateSecretsCarousel(0);

    // Reajusta os carrosséis ao redimensionar a janela
    window.addEventListener('resize', () => {
        updateBenefitsCarousel(benefitsCurrentIndex);
        updateSecretsCarousel(secretsCurrentIndex);
    });
});