const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        // Показать/скрыть кнопку в зависимости от прокрутки
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        // Функция для скролла к началу страницы
        scrollToTopBtn.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавная прокрутка
            });
        };