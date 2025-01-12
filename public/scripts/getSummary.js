document.addEventListener('DOMContentLoaded', () => {
    // Funkcja do generowania URL z danymi
    function generateSummaryUrl() {
        const priceElement = document.getElementById('price');
        const discountElement = document.getElementById('discount');
        const seatElement = document.getElementById('seat');
        const classElement = document.getElementById('classchoice');

        const basePrice = parseFloat(priceElement.getAttribute('data-price'));
        
        let selectedClass = '2';  
        let selectedDiscount = discountElement.value;
        let selectedSeat = seatElement.value;

        // Jeżeli wybrano klasę, nadpisz domyślną wartość
        if (classElement.value === '1') {
            selectedClass = classElement.value;
        }

        // Tworzymy URL z danymi
        const summaryUrl = `/summary?class=${selectedClass}&discount=${selectedDiscount}&seat=${selectedSeat}&price=${basePrice.toFixed(2)}`;
        return summaryUrl;
    }

    // Obsługa kliknięcia na przycisk Podsumowanie
    const summaryBtn = document.getElementById('summaryBtn');
    summaryBtn.addEventListener('click', () => {
        const summaryUrl = generateSummaryUrl();
        window.location.href = summaryUrl; // Przekierowanie na stronę podsumowania
    });
});
