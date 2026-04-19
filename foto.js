// DATE GALERII - Aici adaugi pozele reale pentru fiecare nuntă
const weddingGalleries = {
    'debora-moise': {
        title: 'Alexandra  & Adi',
        photos: [
            'https://poze.b-cdn.net/DSC00682.jpg',
            'https://poze.b-cdn.net/DSC00401.jpg',
            'https://poze.b-cdn.net/DSC00227.jpg',
            'https://poze.b-cdn.net/DSC00170.jpg',
            'https://poze.b-cdn.net/DSC00649.jpg',
            'https://poze.b-cdn.net/DSC00628.jpg',
            'https://poze.b-cdn.net/DSC00342.jpg',
            'https://poze.b-cdn.net/DSC00217.jpg',
            'https://poze.b-cdn.net/DSC00773.jpg',
            'https://poze.b-cdn.net/DSC09686.jpg',
            'https://poze.b-cdn.net/DSC01750.jpg',
            'https://poze.b-cdn.net/image00007.jpeg',
             'https://poze.b-cdn.net/DSC00368.jpg',
            'https://poze.b-cdn.net/DSC08827.jpg',
            'https://poze.b-cdn.net/image00007.jpeg',
            'https://poze.b-cdn.net/DSC09241.jpg',
             'https://poze.b-cdn.net/image00005.jpeg',
            'https://poze.b-cdn.net/DSC09731.jpg'
        ]
    },
    'ana-mihai': {
        title: 'Ana & Mihai',
        photos: [
            'https://poze.b-cdn.net/DSC00537.jpg',
            'https://poze.b-cdn.net/DSC00418.jpg',
            'https://poze.b-cdn.net/DSC00438.jpg',
            'https://poze.b-cdn.net/DSC00853.jpg',
            'https://poze.b-cdn.net/image00001.jpg',
            'https://poze.b-cdn.net/DSC02606.jpg',
             'https://poze.b-cdn.net/DSC02668.jpg',
            'https://poze.b-cdn.net/DSC01605.jpg'
        ]
    },
    'maria-andrei': {
        title: 'Maria & Andrei',
        photos: [
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png'
        ]
    },
    'elena-cristian': {
        title: 'Elena & Cristian',
        photos: [
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png'
        ]
    },
    'ioana-alexandru': {
        title: 'Ioana & Alexandru',
        photos: [
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=80'
        ]
    },
    'cristina-adrian': {
        title: 'Cristina & Adrian',
        photos: [
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png',
            'https://poze.b-cdn.net/vlcsnap-2026-02-02-22h44m09s478.png'
        ]
    }
};

// VARIABILE GLOBALE
let currentGallery = null;
let currentPhotoIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// DESCHIDE GALERIE
function openGallery(weddingId) {
    currentGallery = weddingGalleries[weddingId];
    currentPhotoIndex = 0;
    
    document.getElementById('galleryTitle').textContent = currentGallery.title;
    document.getElementById('totalPhotos').textContent = currentGallery.photos.length;
    
    // Generează thumbnails
    generateThumbnails();
    
    // Afișează prima poză
    updateGalleryPhoto();
    
    // Deschide modal
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ÎNCHIDE GALERIE
function closeGallery() {
    document.getElementById('galleryModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    currentGallery = null;
}

// SCHIMBĂ POZA
function changePhoto(direction) {
    currentPhotoIndex += direction;
    
    if (currentPhotoIndex >= currentGallery.photos.length) {
        currentPhotoIndex = 0;
    } else if (currentPhotoIndex < 0) {
        currentPhotoIndex = currentGallery.photos.length - 1;
    }
    
    updateGalleryPhoto();
    updateThumbnails();
}

// UPDATE POZĂ
function updateGalleryPhoto() {
    const photo = currentGallery.photos[currentPhotoIndex];
    document.getElementById('galleryPhoto').src = photo;
    document.getElementById('currentPhoto').textContent = currentPhotoIndex + 1;
}

// GENEREAZĂ THUMBNAILS
function generateThumbnails() {
    const container = document.getElementById('galleryThumbnails');
    container.innerHTML = '';
    
    currentGallery.photos.forEach((photo, index) => {
        const thumb = document.createElement('img');
        thumb.src = photo;
        thumb.className = 'thumb';
        if (index === 0) thumb.classList.add('active');
        thumb.onclick = () => {
            currentPhotoIndex = index;
            updateGalleryPhoto();
            updateThumbnails();
        };
        container.appendChild(thumb);
    });
}

// UPDATE THUMBNAILS ACTIVE
function updateThumbnails() {
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb, index) => {
        if (index === currentPhotoIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// SWIPE PE MOBIL
const galleryModal = document.getElementById('galleryModal');

galleryModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

galleryModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe stânga - poza următoare
            changePhoto(1);
        } else {
            // Swipe dreapta - poza anterioară
            changePhoto(-1);
        }
    }
}

// KEYBOARD NAVIGATION
document.addEventListener('keydown', (e) => {
    if (!currentGallery) return;
    
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') changePhoto(-1);
    if (e.key === 'ArrowRight') changePhoto(1);
});

// ANIMATII CARDURI LA LOAD
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.wedding-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
