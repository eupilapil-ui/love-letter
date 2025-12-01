const clickButton = document.getElementById('clickButton');
const letter = document.getElementById('letter');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const bgMusic = document.getElementById('bgMusic'); 

for (let i = 0; i < 25; i++) {
    let heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.transform = `scale(${Math.random() * 1.2 + 0.6})`;
    document.body.appendChild(heart);
}

clickButton.addEventListener('click', () => {
    bgMusic.play(); 
    letter.classList.remove('hidden');
    setTimeout(() => {
        letter.classList.add('show');
    }, 10);
    clickButton.style.display = 'none';
});

yesButton.addEventListener('click', () => {
    letter.classList.remove('show');
    setTimeout(() => {
        letter.innerHTML = '<p style="text-align:center; font-size:1.5rem;">Yay! This Saturday haa! I can\'t wait to see you!! 💖</p>';
        letter.classList.add('show');
    }, 500);
});

noButton.addEventListener('click', () => {
    letter.classList.remove('show'); 
    setTimeout(() => {
        letter.innerHTML = '<p style="text-align:center; font-size:1.5rem;">Oh, that\'s okay. Next Time siguro!. 😊</p>';
        letter.classList.add('show');
    }, 500);
});
