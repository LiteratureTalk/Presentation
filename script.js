let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('hidden');
            slide.querySelectorAll('.animate__fadeInUp, .animate__slideInLeft, .animate__fadeInLeft, .animate__fadeInRight').forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; // Trigger reflow
                el.style.animation = null;
            });
            if (slide.id === 'eye-slide') {
                setTimeout(() => {
                    currentSlide++;
                    showSlide(currentSlide);
                }, 5000); // 5 seconds for eye slide
            }
        } else {
            slide.classList.add('hidden');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function jumpToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function resetSlides() {
    currentSlide = 0;
    showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);
