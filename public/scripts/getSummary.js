document.addEventListener('DOMContentLoaded', () => {
    // Funkcja do generowania URL z danymi
    function generateSummaryUrl() {
        const priceElement = document.getElementById('finalPrice');
        const discountElement = document.getElementById('discount');
        const seatElement = document.getElementById('seat');
        const classElement = document.getElementById('classchoice');
        const fromElement = document.getElementById('from');
        const toElement = document.getElementById('to');

        const finalPrice = parseFloat(priceElement.textContent) || 0;

        let selectedDiscount = discountElement.value;
        let selectedSeat = seatElement.value;
        let selectedClass = classElement.value;
        // Tworzymy URL z danymi
        const summaryUrl = `/summary?class=${encodeURIComponent(selectedClass)}&discount=${encodeURIComponent(selectedDiscount)}&seat=${encodeURIComponent(selectedSeat)}&price=${encodeURIComponent(finalPrice.toFixed(2))}&from=${encodeURIComponent(fromElement.value)}&to=${encodeURIComponent(toElement.value)}`;
        return summaryUrl;
    }

    // Obsługa kliknięcia na przycisk Podsumowanie
    const summaryBtn = document.getElementById('summaryBtn');
    summaryBtn.addEventListener('click', () => {
        const summaryUrl = generateSummaryUrl();
        window.location.href = summaryUrl; // Przekierowanie na stronę podsumowania
    });
});
