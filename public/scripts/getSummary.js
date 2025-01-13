document.addEventListener('DOMContentLoaded', () => {
    // Function to generate URL with data
    function generateSummaryUrl() {
        const priceElement = document.getElementById('totalPrice');
        const discountElement = document.getElementById('discount');
        const seatElement = document.getElementById('seat');
        const wherefromElement = document.getElementById('wherefrom');
        const wheretoElement = document.getElementById('whereto');
        const fromElement = document.getElementById('from');
        const toElement = document.getElementById('to');

        const finalPrice = parseFloat(priceElement?.textContent) || 0;

        const class1Btn = document.getElementById('class1Btn');
        const class2Btn = document.getElementById('class2Btn');

        let selectedClass = '';
        if (class1Btn && class1Btn.classList.contains('active')) {
            selectedClass = '1';
        } else if (class2Btn && class2Btn.classList.contains('active')) {
            selectedClass = '2';
        }

        let selectedDiscount = discountElement?.value || '';
        let selectedSeat = seatElement?.value || '';

        let wherefrom = wherefromElement?.textContent || '' || wherefromElement?.value || '';
        let whereto = wheretoElement?.textContent || '' || wheretoElement?.value || '';

        let from = fromElement?.textContent || '';
        let to = toElement?.textContent || '';

        // Generate URL with the data
        const summaryUrl = `/summary?class=${encodeURIComponent(selectedClass)}&discount=${encodeURIComponent(selectedDiscount)}&seat=${encodeURIComponent(selectedSeat)}&price=${encodeURIComponent(finalPrice.toFixed(2))}&wherefrom=${encodeURIComponent(wherefrom)}&whereto=${encodeURIComponent(whereto)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
        return summaryUrl;
    }

    // Handle click event on the Summary button
    const summaryBtn = document.getElementById('summaryBtn');
    if (summaryBtn) {
        summaryBtn.addEventListener('click', () => {
            const summaryUrl = generateSummaryUrl();
            window.location.href = summaryUrl; // Redirect to the summary page
        });
    }
});
