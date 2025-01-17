document.addEventListener('DOMContentLoaded', () => {

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