// Конфетти эффект
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd93d', '#95e1d3'];
    
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Мотивационное сообщение
function showMotivation() {
    const motivationMessage = document.getElementById('motivation-message');
    const button = document.querySelector('.motivation-btn');
    
    motivationMessage.classList.remove('hidden');
    button.style.display = 'none';
    
    createConfetti();
}

// Анимация сердца
function animateHeart() {
    const heart = document.querySelector('.heart-animation');
    const frames = ['💝', '💖', '💗', '💓', '💞'];
    let currentFrame = 0;
    
    setInterval(() => {
        heart.textContent = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }, 800);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Запускаем анимацию сердца
    animateHeart();
    
    // Создаем начальное конфетти
    setTimeout(createConfetti, 1000);
    
    // Добавляем конфетти при клике на подарок
    const giftButton = document.querySelector('.gift-button');
    giftButton.addEventListener('click', function() {
        createConfetti();
    });
    
    // Добавляем плавное появление элементов
    const elements = document.querySelectorAll('.card, .support-card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
    });
});
