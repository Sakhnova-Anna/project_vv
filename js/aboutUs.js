const aboutUs = document.querySelector('.about__us__section');

if(aboutUs){

    const AboutList = document.querySelector('.about')

    const AboutListData = {
        item1:{
            title: 'Электронная коммерция',
            image: {
                src: "images/ecommerce.jpg",
                alt: "#",
                width: "384",
                height: "256"
            },
            text: "С помощью электронной коммерции вы можете охватить клиентов, которые живут в отдаленных или сельских районах, где традиционные магазины могут быть недоступны. Однако платформы электронной коммерции предлагают инструменты, которые делают управление запасами более эффективным и менее подверженным ошибкам."
        },

        item2:{
            title: 'Отзывчивый дизайн',
            image: {
                src: "images/responsive.webp",
                alt: "#",
                width: "384",
                height: "256"
            },
            text: "Отзывчивый веб-дизайн — это подход к дизайну, который учитывает диапазон устройств и их размеров, обеспечивая автоматическую адаптацию к экрану независимо от того, просматривается ли контент на планшете, телефоне, телевизоре или часах."
        },

        item3:{
            title: 'Веб-безопасность',
            image: {
                src: "images/security.jpg",
                alt: "#",
                width: "384",
                height: "256"
            },
            text: "Веб-безопасность предотвратит утечку конфиденциальной информации неавторизованными пользователями на внешние серверы. Фишинг. Большинство утечек данных начинаются с вредоносного фишингового электронного письма. Веб-безопасность фильтрует эти электронные письма, чтобы они не попадали в почтовые ящики пользователей."
        }
    }

    const createItem = (title, image, txt) => {
        const item = `
            <div class="about__item">
                            <h3 class="about__item-title">${title}</h3>
                            <img src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}">
                            <p class="about__item-text">${txt}</p>
                        </div>
        `;

        return item;
    }

    for (const key in AboutListData) {
        const item = AboutListData[key];

        const ListElement = createItem(item.title, item.image, item.text);
        AboutList.insertAdjacentHTML('beforeend', ListElement);
    }
}