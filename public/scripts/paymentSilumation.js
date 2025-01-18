document.addEventListener('DOMContentLoaded', function() {
    const blikMethod = document.getElementById('blikMethod');
    const walletMethod = document.getElementById('walletMethod');
    const blikForm = document.getElementById('blikForm');
    const walletForm = document.getElementById('walletForm');
    const blikCode = document.getElementById('blikCode');
    const confirmBlikPayment = document.getElementById('confirmBlikPayment');
    const confirmWalletPayment = document.getElementById('confirmWalletPayment');
    const walletBalanceElement = document.getElementById('walletBalance');
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    const paymentModalMessage = document.getElementById('paymentModalMessage');
    let walletBalance = parseFloat(walletBalanceElement.textContent);

    blikMethod.addEventListener('click', function() {
        blikForm.style.display = 'block';
        walletForm.style.display = 'none';
    });

    walletMethod.addEventListener('click', function() {
        walletForm.style.display = 'block';
        blikForm.style.display = 'none';
    });

    confirmBlikPayment.addEventListener('click', function() {
        const code = blikCode.value.trim();
        if (code.length === 6 && !isNaN(code)) {
            paymentModalMessage.innerHTML = '<span class="text-success">Płatność BLIK zakończona pomyślnie.</span>';
        } else {
            paymentModalMessage.innerHTML = '<span class="text-danger">Nieprawidłowy kod BLIK. Spróbuj ponownie.</span>';
        }
        paymentModal.show();
    });

    confirmWalletPayment.addEventListener('click', function() {
        const paymentAmount = 50.00; // Przykładowa kwota płatności
        if (walletBalance >= paymentAmount) {
            walletBalance -= paymentAmount;
            walletBalanceElement.textContent = walletBalance.toFixed(2);
            paymentModalMessage.innerHTML = '<span class="text-success">Płatność z Portfela zakończona pomyślnie.</span>';
        } else {
            paymentModalMessage.innerHTML = '<span class="text-danger">Niewystarczające środki w portfelu.</span>';
        }
        paymentModal.show();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Funkcja do pobierania parametrów URL
    function getUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            class: urlParams.get('class'),
            discount: urlParams.get('discount'),
            seat: urlParams.get('seat'),
            price: urlParams.get('price'),
            wherefrom: urlParams.get('wherefrom'),
            whereto: urlParams.get('whereto'),
            from: urlParams.get('from'),
            to: urlParams.get('to')
        };
    }

    // Pobierz cenę z parametrów URL
    const { price } = getUrlParams();

    // Wyświetl cenę na stronie
    if (price) {
        const ticketPriceElement = document.getElementById('ticketPrice');
        ticketPriceElement.textContent = parseFloat(price).toFixed(2) + " zł";
    }
});
