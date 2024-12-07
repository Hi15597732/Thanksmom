function celebrate() {
    const colors = ['#ff0', '#0f0', '#00f', '#f00', '#ff69b4'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
    }
    alert('🎉🥳Feliz cumpleaños!🥳🎉');
}
