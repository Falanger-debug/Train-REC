document.addEventListener('DOMContentLoaded', () => {
    const class1Btn = document.getElementById('class1Btn');
    const class2Btn = document.getElementById('class2Btn');
    const priceElement = document.getElementById('price');
    const classChoice = document.getElementById('classchoice');

    // Funkcja do aktualizacji ceny
    function updatePrice1(classType) {
        // Pobierz cenę z atrybutu data-price
        const basePrice = parseFloat(priceElement.getAttribute('data-price')); // Cena bazowa

        // Sprawdzenie, czy cena jest poprawna
        if (isNaN(basePrice)) {
            console.error("Błąd: Niepoprawna cena!");
            return; // Jeśli cena jest niepoprawna, zakończ działanie
        }

        let newPrice;

        // Oblicz nową cenę na podstawie wybranej klasy
        if (classType === 1) {
            newPrice = basePrice * 1.5; // 50% więcej dla klasy 1
        } else if (classType === 2) {
            newPrice = basePrice * 1.2; // 20% więcej dla klasy 2
        }

        // Zaktualizuj cenę na stronie
        priceElement.textContent = `${newPrice.toFixed(2)} zł`;
    }
    function updatePrice2(classType) {
        // Pobierz cenę z atrybutu data-price
        const basePrice = parseFloat(priceElement.getAttribute('data-price')); // Cena bazowa

        // Sprawdzenie, czy cena jest poprawna
        if (isNaN(basePrice)) {
            console.error("Błąd: Niepoprawna cena!");
            return; // Jeśli cena jest niepoprawna, zakończ działanie
        }


        // Zaktualizuj cenę na stronie
        priceElement.textContent = `${basePrice.toFixed(2)} zł`;
    }

    // Obsługa kliknięcia na Klasę 1
    class1Btn.addEventListener('click', () => {
        updatePrice1(1); // Pobierz cenę dla klasy 1
        class1Btn.classList.add('active');
        class2Btn.classList.remove('active');
        classChoice.value = '1';

    });

    // Obsługa kliknięcia na Klasę 2
    class2Btn.addEventListener('click', () => {
        updatePrice2(2); // Pobierz cenę dla klasy 2
        class2Btn.classList.add('active');
        class1Btn.classList.remove('active');
        classChoice.value = '2';

    });

});