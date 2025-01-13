document.addEventListener('DOMContentLoaded', () => {
    const chooseSeatModal = new bootstrap.Modal(document.getElementById('chooseSeatModal'));
    const successModal = new bootstrap.Modal(document.getElementById('seat-success'));
    const errorModal = new bootstrap.Modal(document.getElementById('seat-failure'));

    const btnConfirm = document.getElementById('btnConfirm');
    const seatSelectionForm = document.getElementById('seatSelectionForm');


    // Pokaż modal po wybraniu opcji "wybrane" z selecta
    const seatSelect = document.getElementById('seat');
    const discountSelect = document.getElementById('discount');

    seatSelect.addEventListener('change', () => {
        if (seatSelect.value === 'wybrane') {
            chooseSeatModal.show();
            // seatChoice.value = "wybrane recznie";
        }
    });

    // Obsługa zatwierdzania formularza po kliknięciu w przycisk "Zatwierdź"
    btnConfirm.addEventListener('click', (e) => {
        e.preventDefault(); // Zatrzymuje wysyłanie formularza

        const wagonNumber = parseInt(document.getElementById('wagonNumber').value);
        const seatNumber = parseInt(document.getElementById('seatNumber').value);

        // Sprawdź poprawność danych
        if (seatNumber < 1 || seatNumber > 100 || wagonNumber < 1 || wagonNumber > 20) {
            // Jeśli numer wagonu lub miejsca jest poza zakresem, pokaż błąd
            errorModal.show();
        } else {
            // Jeśli dane są poprawne, pokaż sukces
            successModal.show();
        }

        // Zamknięcie modala po zatwierdzeniu
        chooseSeatModal.hide();

    });

    function removeBackdrop() {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove(); // Usuwa tło (backdrop)
        }
    }
    successModal._element.addEventListener('hidden.bs.modal', () => {
        removeBackdrop(); // Usuwa backdrop po zamknięciu modala sukcesu
    });

    // Zamknięcie modala błędu i przywrócenie normalnego stanu
    errorModal._element.addEventListener('hidden.bs.modal', () => {
        removeBackdrop(); // Usuwa backdrop po zamknięciu modala błędu
    });


    window.selectedSeat = () => selectedSeat;


});