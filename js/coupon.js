const endDate = new Date("2025-12-31T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Купон истек!";
    }
}

const x = setInterval(updateCountdown, 1000);

updateCountdown();