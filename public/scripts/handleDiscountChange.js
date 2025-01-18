function handleDiscountChange() {
    const discountSelect = document.getElementById('discount');
    const selectedValue = discountSelect.value;

    if (selectedValue !== 'brak') {
        const class2Btn = document.getElementById('class2Btn');
        const class1Btn = document.getElementById('class1Btn');

        if (!class2Btn.classList.contains('active')) {
            class1Btn.classList.remove('active');
            class2Btn.classList.add('active');
            class2Btn.click();
        }
    }
}
