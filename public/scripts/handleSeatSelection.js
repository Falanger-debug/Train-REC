// document.addEventListener('DOMContentLoaded', () => {
//     const schematOption = document.getElementById('schematOption');
//
//     schematOption.addEventListener('click', () => {
//         if (schematOption.selected) {
//             window.location.href = '/seatChoice';
//         }
//     });
// });
//
//
// function handleSeatSelection() {
//     const seatSelect = document.getElementById('seat');
//     const selectedValue = seatSelect.value;
//
//     if (selectedValue === 'schemat') {
//         window.location.href = '/seatChoice';
//     }
//     // obsługa innych wartości
// }
function handleSeatSelection() {

    const selectElement = document.getElementById('seat');
    const selectedValue = selectElement.value;

    if (selectedValue === 'schemat') {
        window.location.href = '/seatChoice';
    }
}