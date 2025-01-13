// Zakładając, że masz toggle switch do pokazania szczegółów
document.getElementById('showDetailsToggle').addEventListener('change', function() {
    const detailsSection = document.getElementById('detailsSection');
    if (this.checked) {
        detailsSection.style.display = 'block';
    } else {
        detailsSection.style.display = 'none';
    }
});