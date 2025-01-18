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
    const closeModalButton = document.getElementById('closeModalButton');
    const countdownMessage = document.getElementById('countdownMessage');

    let walletBalance = parseFloat(walletBalanceElement.textContent);
    let paymentSuccessful = false;
    let countdownTimer;

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
            paymentSuccessful = true;
            paymentModalMessage.innerHTML = '<span class="text-success">Płatność BLIK zakończona pomyślnie.</span>';
            startRedirectCountdown();
        } else {
            paymentSuccessful = false;
            paymentModalMessage.innerHTML = '<span class="text-danger">Nieprawidłowy kod BLIK. Spróbuj ponownie.</span>';
            closeModalButton.innerText = 'Zamknij';
        }
        paymentModal.show();
    });

    confirmWalletPayment.addEventListener('click', function() {
        const paymentAmount = parseFloat(document.getElementById('ticketPrice').textContent);
        if (walletBalance >= paymentAmount) {
            paymentSuccessful = true;
            walletBalance -= paymentAmount;
            walletBalanceElement.textContent = walletBalance.toFixed(2);
            paymentModalMessage.innerHTML = '<span class="text-success">Płatność z Portfela zakończona pomyślnie.</span>';
            startRedirectCountdown();
        } else {
            paymentSuccessful = false;
            paymentModalMessage.innerHTML = '<span class="text-danger">Niewystarczające środki w portfelu.</span>';
            closeModalButton.innerText = 'Zamknij';
        }
        paymentModal.show();
    });

    paymentModal._element.addEventListener('hidden.bs.modal', function() {
        clearInterval(countdownTimer);
        countdownMessage.textContent = '';
        if (paymentSuccessful){
            window.location.href = '/userProfile';
        }
    });

    function handleCloseRedirect() {
        if (paymentSuccessful) {
            window.location.href = '/userProfile';
        }
    }

    function startRedirectCountdown() {
        let countdown = 5;
        countdownMessage.textContent = `Przekierowanie nastąpi za ${countdown} sekund...`;

        countdownTimer = setInterval(() => {
            countdown--;
            if(countdown > 0) {
                countdownMessage.textContent = `Przekierowanie nastąpi za ${countdown} sekund...`;
            } else {
                clearInterval(countdownTimer);
                handleCloseRedirect();
            }
        }, 1000);

    }


    closeModalButton.addEventListener('click', handleCloseRedirect);
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
