// FILTRARE VIDEO
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const videoCards = document.querySelectorAll('.video-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Elimină clasa active de la toate butoanele
            filterBtns.forEach(b => b.classList.remove('active'));
            // Adaugă clasa active pe butonul apăsat
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filtrează cardurile
            videoCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                    // Animație de apariție
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Animație inițială la load
    videoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
