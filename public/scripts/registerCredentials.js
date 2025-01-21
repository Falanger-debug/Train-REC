document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMessages.style.display = 'none';
        errorMessages.innerHTML = '';

        const password1 = document.getElementsByName('password')[0].value;
        const password2 = document.getElementsByName('password1')[0].value;

        if (password1 !== password2) {
            const error = document.createElement('h5');
            error.textContent = 'Hasła nie są takie same';
            errorMessages.appendChild(error);
        }

        if (errorMessages.innerHTML !== '') {
            errorMessages.style.display = 'block';
        } else {
            form.submit();
        }
    });
})