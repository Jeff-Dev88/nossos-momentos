// Lista de fotos da pasta images
// Adicione ou remova os nomes dos arquivos conforme necessário
const photosInFolder = [
    'WhatsApp Image 2026-01-12 at 18.42.39.jpeg',
    'WhatsApp Image 2026-01-12 at 18.42.39 (1).jpeg'
];

const photosGrid = document.getElementById('photosGrid');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

// Carregar fotos ao iniciar
function loadPhotos() {
    photosGrid.innerHTML = '';

    if (photosInFolder.length === 0) {
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';

    photosInFolder.forEach((photoName) => {
        const photoCard = createPhotoCard(photoName);
        photosGrid.appendChild(photoCard);
    });
}

// Criar card de foto
function createPhotoCard(photoName) {
    const card = document.createElement('div');
    card.className = 'photo-card';

    const img = document.createElement('img');
    img.src = `images/${photoName}`;
    img.alt = 'Nosso momento';

    // Abrir modal ao clicar na foto
    card.addEventListener('click', () => {
        openModal(`images/${photoName}`);
    });

    card.appendChild(img);

    return card;
}

// Abrir modal
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.classList.add('active');
}

// Fechar modal
function closeModal() {
    modal.classList.remove('active');
}

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Carregar fotos ao iniciar a página
loadPhotos();
