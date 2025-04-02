const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        // Если тумблер включен
        document.body.style.backgroundColor = '#333'; // Темный фон
        document.body.style.color = '#fff'; // Белый текст
    } else {
        // Если тумблер выключен
        document.body.style.backgroundColor = 'rgb(220, 220, 220)'; // Светлый фон
        document.body.style.color = '#000'; // Черный текст
    }
});