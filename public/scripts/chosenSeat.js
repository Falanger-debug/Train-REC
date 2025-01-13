document.addEventListener('DOMContentLoaded', () => {
    const chooseSeatModal = new bootstrap.Modal(document.getElementById('chooseSeatModal'));
    const successModal = new bootstrap.Modal(document.getElementById('seat-success'));
    const errorModal = new bootstrap.Modal(document.getElementById('seat-failure'));

    const btnConfirm = document.getElementById('btnConfirm');
    const seatSelectionForm = document.getElementById('seatSelectionForm');
    let selectedSeatDisplay = document.getElementById('selectedSeatDisplay');

    // Pokaż modal po wybraniu opcji "wybrane" z selecta
    const seatSelect = document.getElementById('seat');
    const discountSelect = document.getElementById('discount');
    const priceDisplay = document.getElementById('priceDisplay');
    const basePriceElement = document.getElementById('price');
    const totalPriceElement = document.getElementById('totalPrice');

    const basePrice = parseFloat(basePriceElement.getAttribute('data-price'));

    const discounts = {
        student: 0.51,
        school: 0.37,
        senior: 0.3,
        disabled: 0.78,
        none: 0
    }

    seatSelect.addEventListener('change', () => {
        if (seatSelect.value === 'wybrane') {
            chooseSeatModal.show();
        } else {
            selectedSeatDisplay.textContent = '';
        }
    });

    discountSelect.addEventListener('change', updatePrice);

    updatePrice();

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
            selectedSeatDisplay.textContent = `Wagon ${wagonNumber}, Miejsce ${seatNumber}`;
        }

        // Zamknięcie modala po zatwierdzeniu
        chooseSeatModal.hide();

    });

    function removeBackdrop() {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }
    successModal._element.addEventListener('hidden.bs.modal', () => {
        removeBackdrop(); // Usuwa backdrop po zamknięciu modala sukcesu
    });

    // Zamknięcie modala błędu i przywrócenie normalnego stanu
    errorModal._element.addEventListener('hidden.bs.modal', () => {
        removeBackdrop(); // Usuwa backdrop po zamknięciu modala błędu
    });

    function updatePrice() {
        const selectedDiscount = discountSelect.value;
        const discountValue = discounts[selectedDiscount] || 0;
        const finalPrice = basePrice * (1 - discountValue);
        totalPriceElement.textContent = finalPrice.toFixed(2);
    }
    window.selectedSeat = () => selectedSeat;

});