window.addEventListener('load', () => {
    // Анимация для всех блоков .reviews
    const reviewsSections = document.querySelectorAll('.reviews');
    reviewsSections.forEach((section, index) => {
        section.style.transitionDelay = `${index * 0.3}s`; // Индивидуальная задержка
        section.classList.add('reviews-visible'); // Добавление класса для анимации
    });

    // Анимация для всех элементов .welcome-title
    const welcomeTitles = document.querySelectorAll('.welcome-title');
    welcomeTitles.forEach((title, index) => {
        title.style.transitionDelay = `${index * 0.3}s`; // Индивидуальная задержка
        title.classList.add('welcome-title-visible'); // Добавление класса для анимации
    });


    // Анимация для каждого обзора (article) внутри .vr-headsets
    const articles = document.querySelectorAll('.vr-headsets article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.classList.add('article-visible');
        }, index * 200); // 200 мс задержка для каждого элемента
    });
});

// Функция для проверки, находится ли элемент в видимой области
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления анимации при прокрутке для каждого элемента с классом .comparison
function animateOnScroll() {
    const comparisonSections = document.querySelectorAll('.comparison');
    
    comparisonSections.forEach((section) => {
        if (isElementInViewport(section) && !section.classList.contains('comparison-visible')) {
            section.classList.add('comparison-visible');
        }
    });
}

// Добавляем слушатель события прокрутки
window.addEventListener('scroll', animateOnScroll);

