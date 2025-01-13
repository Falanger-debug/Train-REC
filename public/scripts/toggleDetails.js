document.getElementById('showDetailsToggle').addEventListener('change', function() {
    const detailsSection = document.getElementById('detailsSection');
    if (this.checked) {
        detailsSection.style.display = 'block';
    } else {
        detailsSection.style.display = 'none';
    }
});