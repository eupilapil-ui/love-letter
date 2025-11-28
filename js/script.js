document.getElementById('revealBtn').addEventListener('click', function() {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play();

    const letter = `
Dear, Sweet,

Even after everything I’ve been through, 
you’re still the one I think of,
the brightest star in my sky,
the sweetest melody in my heart.
I realize how much I truly miss you.

Sweet, you are like the moon to me;
you shine brighter than anyone else
when my space feels dark.
Your smile is like a thousand exploding suns,
lighting up even the loneliest moments.

I wish I could be near you again,
to hear your laughter and feel your presence.
These past months apart have made me long for you even more,
and my heart quietly hopes that we can be together soon.

I hope this letter finds you smiling,
because you light up my world in the most beautiful way.
Even from afar, my thoughts and feelings are with you,
and I can’t wait for the day we’re together again.

With all my love and longing,
[Someone]
`;

    const display = document.getElementById('loveLetter');
    display.textContent = '';
    display.classList.add('show');
    this.style.display = 'none';
    let index = 0;
    const speed = 50;

    function typeLetter() {
        if (index < letter.length) {
            display.textContent += letter.charAt(index);
            index++;
            setTimeout(typeLetter, speed);
        }
    }

    typeLetter();
    spawnEmojis();
});

function spawnEmojis() {
    const emojis = ['💖', '😔', '😢', '💔', '😞'];
    const bg = document.getElementById('background');
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.fontSize = (Math.random() * 30 + 20) + 'px';
        emoji.style.animationDuration = (Math.random() * 5 + 5) + 's';
        bg.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 10000);
    }, 300);
}
