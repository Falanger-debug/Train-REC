
function handleSeatSelection() {

    const selectElement = document.getElementById('seat');
    const selectedValue = selectElement.value;

    if (selectedValue === 'schemat') {
        window.location.href = '/seatChoice';
    }
}