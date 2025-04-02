// Получаем элемент предзагрузчика
const preloader = document.getElementById('preloader');

// Функция, которая скрывает предзагрузчик
function hidePreloader() {
    preloader.style.display = 'none';
}

// Событие загрузки страницы
window.addEventListener('load', () => {
    hidePreloader(); // Скрываем предзагрузчик, когда страница полностью загружена
});

// Чтобы увидеть предзагрузчик, можно сделать задержку
setTimeout(() => {
    hidePreloader(); // Убираем предзагрузчик через 3 секунды, если страница не загружена
}, 3000);
