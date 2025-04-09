const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('psw');
    const form = document.getElementById('signin-form');

    window.addEventListener('DOMContentLoaded', () => {
      emailInput.value = localStorage.getItem('signin_email') || '';
      passwordInput.value = localStorage.getItem('signin_password') || '';
    });


    emailInput.addEventListener('input', () => {
      localStorage.setItem('signin_email', emailInput.value);
    });
    passwordInput.addEventListener('input', () => {
      localStorage.setItem('signin_password', passwordInput.value);
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Вход выполнен');
      localStorage.removeItem('signin_email');
      localStorage.removeItem('signin_password');
      form.reset();
    });