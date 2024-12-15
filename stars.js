window.onload = function () {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
    const starCanvas = document.getElementById("starCanvas");
    const ctx = starCanvas.getContext('2d');
    const stars = [];
    const numStars = 150;

    // Настройка холста
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;

    function createStar() {
        return {
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height,
            radius: Math.random() * 2,
            alpha: Math.random(),
            speed: Math.random() * 0.05,
        };
    }

    for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
    }

    function animateStars() {
        ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);

        stars.forEach((star) => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) {
                star.speed = -star.speed;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(animateStars);
    }

    animateStars();

    window.addEventListener('resize', () => {
        starCanvas.width = window.innerWidth;
        starCanvas.height = window.innerHeight;
        stars.length = 0;
        for (let i = 0; i < numStars; i++) {
            stars.push(createStar());
        }
    });

    setTimeout(() => {
        loader.classList.add("hidden"); // Скрываем загрузчик
        mainContent.classList.add("visible"); // Показываем контент
    }, 1900);
};
