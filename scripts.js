function handleHover() {
    const selectionBoxes = document.querySelectorAll('.selection-box');
    selectionBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#091c34';
        });
    
        box.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
}

function handleClick() {
    const playBtn = document.getElementById('play');
    playBtn.addEventListener('click', function() {
        // this.innerHTML = 'PLAYING...';
        // this.style.backgroundColor = '#4e5a74'; 

        setTimeout(() => {
            this.innerHTML = 'PLAY ON';
            this.style.backgroundColor = '#3a4e7a'; 
        }, 3000); 
    });
}


function handleImageZoom() {
    const images = document.querySelectorAll('.filmbox2 img');
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)'; 
            this.style.transition = 'transform 0.3s ease'; 
            this.style.filter = 'blur(15px)';
        });
    
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; 
            this.style.filter = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleHover();
    handleClick();
    handleImageZoom();
});
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container1');
    const prevSlideBtn = document.getElementById('prevSlide');
    const nextSlideBtn = document.getElementById('nextSlide');

    nextSlideBtn.addEventListener('click', function() {
        imageContainer.scrollBy({
            left: 350, 
            behavior: 'smooth' 
        });
    });

    prevSlideBtn.addEventListener('click', function() {
        imageContainer.scrollBy({
            left: -350, 
            behavior: 'smooth' 
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer1 = document.querySelector('.image-container1');
    const prevSlideBtn1 = document.getElementById('prevSlidedubbed');
    const nextSlideBtn1 = document.getElementById('nextSlidedubbed');

    nextSlideBtn1.addEventListener('click', function() {
        imageContainer1.scrollBy({
            left: 350, 
            behavior: 'smooth' 
        });
    });

    prevSlideBtn1.addEventListener('click', function() {
        imageContainer1.scrollBy({
            left: -350, 
            behavior: 'smooth' 
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const topAiringContainer = document.querySelector('.filmbox2:nth-of-type(2) .image-container1');
    const mostWatchedContainer = document.querySelector('.filmbox2:nth-of-type(3) .image-container1');
    const dubbedContainer = document.querySelector('.filmbox2:nth-of-type(4) .image-container1');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.topAiringAnime.forEach(anime => {
                const img = document.createElement('img');
                img.src = anime.src;
                img.alt = anime.alt;
                img.style.width = '300px';
                topAiringContainer.appendChild(img);
            });

            data.mostWatchedAnime.forEach(anime => {
                const img = document.createElement('img');
                img.src = anime.src;
                img.alt = anime.alt;
                img.style.width = '300px';
                mostWatchedContainer.appendChild(img);
            });

            data.dubbedAnime.forEach(anime => {
                const img = document.createElement('img');
                img.src = anime.src;
                img.alt = anime.alt;
                img.style.width = '300px';
                dubbedContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});


// function handleHover() {
//     const playBtn = document.getElementById('play');
//     const bigImage = document.getElementById('bigImage');

//     playBtn.addEventListener('mouseenter', function() {

//         bigImage.style.filter = 'blur(5px)';
//     });

//     playBtn.addEventListener('mouseleave', function() {

//         bigImage.style.filter = 'none';
//     });
// }

document.addEventListener('DOMContentLoaded', function() {
    handleHover();
});


function handleImageInfo() {
    const images = document.querySelectorAll('.filmbox2 img');
    const infoOverlay = document.querySelector('.info-overlay');

    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const imageTitle = this.getAttribute('data-title');
            const imageDescription = this.getAttribute('data-description');

            infoOverlay.querySelector('.info-title').textContent = imageTitle;
            infoOverlay.querySelector('.info-description').textContent = imageDescription;

            infoOverlay.style.display = 'block';
        });

        image.addEventListener('mouseleave', function() {
            infoOverlay.style.display = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleImageInfo();
});


function handleImageInfo() {
    const images = document.querySelectorAll('.filmbox2 img');

    images.forEach(image => {
        const infoOverlay = document.createElement('div');
        infoOverlay.classList.add('info-overlay');

        const infoTitle = document.createElement('h3');
        infoTitle.classList.add('info-title');

        const infoDescription = document.createElement('p');
        infoDescription.classList.add('info-description');

        infoOverlay.appendChild(infoTitle);
        infoOverlay.appendChild(infoDescription);

        image.parentNode.appendChild(infoOverlay);

        image.addEventListener('mouseenter', function() {
            const imageTitle = this.getAttribute('data-title');
            const imageDescription = this.getAttribute('data-description');

            infoTitle.textContent = imageTitle;
            infoDescription.textContent = imageDescription;

            infoOverlay.style.display = 'block';
        });

        image.addEventListener('mouseleave', function() {
            infoOverlay.style.display = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleImageInfo();
});
function updateTimer() {
    const countDownDate = new Date('2025-11-31T23:59:59').getTime();

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const difference = countDownDate - now;

        if (difference < 0) {
            clearInterval(timerInterval);
            alert("Countdown expired!");
            return;
        }

        const time = {
            years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
            days: Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };

        return time;
    }

    function displayTime() {
        const time = calculateTimeRemaining();

        if (time) {
            document.querySelector('.years').innerHTML = time.years + "<br>Years";
            document.querySelector('.days').innerHTML = time.days + "<br>Days";
            document.querySelector('.hours').innerHTML = time.hours + "<br>Hours";
            document.querySelector('.minutes').innerHTML = time.minutes + "<br>Minutes";
            document.querySelector('.seconds').innerHTML = time.seconds + "<br>Seconds";
        }
    }

    const timerInterval = setInterval(displayTime, 1000);
    displayTime();
}

updateTimer();