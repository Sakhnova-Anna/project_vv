// Массив данных о членах команды
const teamMembers = [
    {
        name: "Член команды 1",
        image: "images/face_one.png",
        biography: "Биография одного из команды"
    },
    {
        name: "Член команды 2",
        image: "images/face_two.png",
        biography: "Биография второго из команды"
    }
];

// Получаем контейнер для членов команды
const container = document.getElementById('team-container');

// Используем forEach для создания элементов команды
teamMembers.forEach(member => {
    // Создаем элемент для члена команды
    const memberDiv = document.createElement('div');
    memberDiv.className = 'team__item';
    memberDiv.innerHTML = `
        <img class="section__inner-image" src="${member.image}" alt="${member.name}" width="192">
        <p class="team__item-text">${member.biography}</p>
    `;
    
    // Добавляем элемент в контейнер
    container.appendChild(memberDiv);
});