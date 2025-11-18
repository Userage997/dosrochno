// Конфетти эффект
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd93d', '#95e1d3'];
    
    for (let i = 0; i < 50; i++) {
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

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    animateHeart();
    setTimeout(createConfetti, 1000);
    
    const giftButton = document.querySelector('.gift-button');
    giftButton.addEventListener('click', createConfetti);
});
