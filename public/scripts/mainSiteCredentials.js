document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('journeyForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMessages.style.display = 'none';
        errorMessages.innerHTML = '';

        const from = document.getElementById('from').value.trim();
        const to = document.getElementById('to').value.trim();

        if (from === '') {
            const error = document.createElement('h5');
            error.textContent = 'Proszę podać stację początkową.';
            errorMessages.appendChild(error);
        }

        if (to === '') {
            const error = document.createElement('h5');
            error.textContent = 'Proszę podać stację końcową.';
            errorMessages.appendChild(error);
        }

        if (from === to) {
            const error = document.createElement('h5');
            error.textContent = 'Stacja początkowa i końcowa muszą być różne.';
            errorMessages.appendChild(error);
        }

        if (errorMessages.innerHTML !== '') {
            errorMessages.style.display = 'block';
        } else {
            form.submit();
        }
    });

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    const dateInput = document.getElementById('date');
    dateInput.value = currentDate;
    dateInput.min = currentDate;

    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    const timeInput = document.getElementById('time');
    timeInput.value = currentTime;
});