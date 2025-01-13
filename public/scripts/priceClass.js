document.addEventListener('DOMContentLoaded', () => {
    const class1Btn = document.getElementById('class1Btn');
    const class2Btn = document.getElementById('class2Btn');
    const priceElement = document.getElementById('price');
    const selectedClassElement = document.getElementById('classchoice');

    const basePrice = parseFloat(document.getElementById("price").getAttribute("data-price"));

    let selectedClass = "Klasa 2"; // Domyślnie wybrana klasa
    let finalPrice = basePrice;

    // Funkcja aktualizująca cenę na podstawie wybranej klasy
    function updatePriceAndClass(selected, multiplier) {
        selectedClass = selected;
        const basePrice = parseFloat(priceElement.getAttribute('data-price')); // Cena bazowa

        if (isNaN(basePrice)) {
            console.error("Błąd: Niepoprawna cena!");
            return; // Jeśli cena jest niepoprawna, zakończ działanie
        }
        finalPrice = basePrice * multiplier;

        // Zaktualizuj cenę na stronie
        priceElement.textContent = `${finalPrice.toFixed(2)} zł`;
    }

    // Obsługa kliknięcia na Klasę 1
    class1Btn.addEventListener('click', () => {
        resetButtons();
        updatePriceAndClass('Klasa 1', 1.5);
        class1Btn.classList.add('active');
        selectedClassElement.value = 'Klasa 1';
    });

    // Obsługa kliknięcia na Klasę 2
    class2Btn.addEventListener('click', () => {
        resetButtons();
        updatePriceAndClass('Klasa 2', 1);
        class2Btn.classList.add('active');
        selectedClassElement.value = 'Klasa 2';
    });

    function resetButtons() {
        class1Btn.classList.remove('active');
        class2Btn.classList.remove('active');
    }
});
