function createParticle(e) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);

    const x = e.clientX;
    const y = e.clientY;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particle.style.animation = 'fall 2s linear forwards';
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

window.onload = function () {
    var images = [
        { url: 'pics/eydoo.gif', credit: 'Artwork by Gumbalino', link: 'https://twitter.com/gumbalino' },
        { url: 'pics/wife.png', credit: 'Artwork by Ame', link: 'https://x.com/gxnkriskxllua' },
        { url: 'pics/newicon.png', credit: 'Artwork by KirbyTheDemon', link: 'https://twitter.com/kirbythedemon' },
        { url: 'pics/icon.png', credit: 'Artwork by Bitto', link: 'https://www.youtube.com/@Bitto1070' },
        { url: 'pics/header.jpg', credit: 'Artwork by Brayden023', link: 'https://x.com/Brayden0238' },
        { url: 'pics/hero.png', credit: 'Artwork by Bitto', link: 'https://www.youtube.com/@Bitto1070' },
        { url: 'pics/um.jpg', credit: 'Artwork by GasterManiaNG', link: 'https://x.com/gastermanialol' }
    ];

    var randomImage = images[Math.floor(Math.random() * images.length)];

    document.getElementById('profilePicture').src = randomImage.url;
    var artistCreditElement = document.getElementById('artistCredit');
    artistCreditElement.innerText = randomImage.credit;
    artistCreditElement.href = randomImage.link;

    var Well = ['Gumbalino', 'Ame', 'KirbyTheDemon', 'Bitto', 'Brayden023', 'GasterManiaNG'];

    Well.forEach(function (artist) {
        if (randomImage.credit.includes(artist)) {
            artistCreditElement.style.color = 'cyan';
        }
    });

};



document.addEventListener('mousemove', createParticle);

function syncMusicPlayer() {
    const audio = document.getElementById('backgroundMusic');
    const progress = document.getElementById('musicProgress');

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) { // Ensure duration is available
            progress.value = (audio.currentTime / audio.duration) * 100;
        }
    });

    progress.addEventListener('input', () => {
        audio.currentTime = (progress.value / 100) * audio.duration;
    });
}

function fadeInMusic(duration = 2000) { 
    const audio = document.getElementById('backgroundMusic');
    let volume = 0;
    audio.volume = 0;
    const step = 0.01;
    const interval = duration / (1 / step); 

    const fadeInterval = setInterval(() => {
        if (volume < 1) {
            volume += step;
            audio.volume = Math.min(volume, 1);
        } else {
            clearInterval(fadeInterval);
        }
    }, interval);
}

function fadeOutMusic(duration = 2000) {
    const audio = document.getElementById('backgroundMusic');
    let volume = audio.volume;
    const step = 0.01;
    const interval = duration / (volume / step);

    const fadeInterval = setInterval(() => {
        if (volume > 0) {
            volume -= step;
            audio.volume = Math.max(volume, 0);
        } else {
            clearInterval(fadeInterval);
            audio.pause();
        }
    }, interval);
}

function startAnimations() {
    const audio = document.getElementById('backgroundMusic');
    audio.play().then(() => {
        fadeInMusic(2000); 
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.card').style.display = 'block';
    });
    syncMusicPlayer();
}

function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.volume = 0; 
    audio.play();
    fadeInMusic(2000);
}

function pauseMusic() {
    const audio = document.getElementById('backgroundMusic');
    fadeOutMusic(2000); //OK SO HOW COME WHEN THE FUCKING AUDIO.PAUSE DOESN'T WORK WHEN I SET IT HERE BUT ON THE FADEOUTMUSIC ITS ALREADY WORKING VERY VERY WELL OHOHOHOHO IM KMS
}

document.addEventListener('DOMContentLoaded', () => {
    syncMusicPlayer(); 
    const youtube = document.getElementById('youtube');
    const twitter = document.getElementById('twitter');
    const github = document.getElementById('github');

    youtube.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/c/HeroEyad';
    });

    twitter.addEventListener('click', () => {
        window.location.href = 'https://x.com/HeroEyad_';
    });

    github.addEventListener('click', () => {
        window.location.href = 'https://github.com/HeroEyad';
    });
});
