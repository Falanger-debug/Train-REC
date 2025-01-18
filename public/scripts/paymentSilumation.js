document.addEventListener('DOMContentLoaded', function() {
    const blikMethod = document.getElementById('blikMethod');
    const walletMethod = document.getElementById('walletMethod');
    const blikForm = document.getElementById('blikForm');
    const walletForm = document.getElementById('walletForm');
    const paymentStatus = document.getElementById('paymentStatus');
    const statusMessage = document.getElementById('statusMessage');
    const blikCode = document.getElementById('blikCode');
    const confirmBlikPayment = document.getElementById('confirmBlikPayment');
    const confirmWalletPayment = document.getElementById('confirmWalletPayment');
    const walletBalanceElement = document.getElementById('walletBalance');
    let walletBalance = parseFloat(walletBalanceElement.textContent);

    blikMethod.addEventListener('click', function() {
        blikForm.style.display = 'block';
        walletForm.style.display = 'none';
        paymentStatus.style.display = 'none';
    });

    walletMethod.addEventListener('click', function() {
        walletForm.style.display = 'block';
        blikForm.style.display = 'none';
        paymentStatus.style.display = 'none';
    });

    confirmBlikPayment.addEventListener('click', function() {
        const code = blikCode.value.trim();
        if (code.length === 6 && !isNaN(code)) {
            statusMessage.textContent = 'Płatność BLIK zakończona pomyślnie.';
            statusMessage.className = 'text-success';
        } else {
            statusMessage.textContent = 'Nieprawidłowy kod BLIK. Spróbuj ponownie.';
            statusMessage.className = 'text-danger';
        }
        paymentStatus.style.display = 'block';
    });

    confirmWalletPayment.addEventListener('click', function() {
        const paymentAmount = 50.00; // Przykładowa kwota płatności
        if (walletBalance >= paymentAmount) {
            walletBalance -= paymentAmount;
            walletBalanceElement.textContent = walletBalance.toFixed(2);
            statusMessage.textContent = 'Płatność z Portfela zakończona pomyślnie.';
            statusMessage.className = 'text-success';
        } else {
            statusMessage.textContent = 'Niewystarczające środki w portfelu.';
            statusMessage.className = 'text-danger';
        }
        paymentStatus.style.display = 'block';
    });
});