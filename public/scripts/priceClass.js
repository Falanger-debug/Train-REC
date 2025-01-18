document.addEventListener('DOMContentLoaded', () => {
    const class1Btn = document.getElementById('class1Btn');
    const class2Btn = document.getElementById('class2Btn');
    const totalPriceElement = document.getElementById('totalPrice');
    const discountSelect = document.getElementById('discount');

    let basePrice = parseFloat(document.getElementById("price").getAttribute("data-price"));
    let selectedMultiplier = 1; // Domyślna klasa 2
    let discountValue = 0;      // Domyślny brak zniżki

    // Funkcja aktualizująca cenę końcową
    function updateTotalPrice() {
        const finalPrice = basePrice * selectedMultiplier * (1 - discountValue);
        totalPriceElement.textContent = finalPrice.toFixed(2);
    }

    // Obsługa kliknięcia na Klasę 1
    class1Btn.addEventListener('click', () => {
        resetButtons();
        class1Btn.classList.add('active');
        class1Btn.classList.add('btn-active');
        selectedMultiplier = 1.5; // Klasa 1 ma wyższy mnożnik
        updateTotalPrice();
    });

    // Obsługa kliknięcia na Klasę 2
    class2Btn.addEventListener('click', () => {
        resetButtons();
        class2Btn.classList.add('active');
        class2Btn.classList.add('btn-active');
        selectedMultiplier = 1; // Domyślny mnożnik dla Klasy 2
        updateTotalPrice();
    });

    // Aktualizacja zniżki przy zmianie wyboru
    discountSelect.addEventListener('change', () => {
        const discounts = {
            "brak": 0,
            "student": 0.51,
            "school": 0.37,
            "senior": 0.3,
            "disabled": 0.78
        };
        discountValue = discounts[discountSelect.value] || 0;
        updateTotalPrice();
    });

    function resetButtons() {
        class1Btn.classList.remove('active');
        class2Btn.classList.remove('active');
        class1Btn.classList.remove('btn-active');
        class2Btn.classList.remove('btn-active');
    }

    // Inicjalne ustawienie ceny
    updateTotalPrice();
});
