document.addEventListener('DOMContentLoaded', function() {
    // Sprawdzamy, czy użytkownik jest zalogowany
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    // Pobieramy elementy DOM
    const loginLink = document.querySelector('a[href="/login"]');
    const logoutLink = document.querySelector('a[href="/"]');
    const userProfileLink = document.querySelector('a[href="/userProfile"]');

    // Sprawdzamy status logowania i dostosowujemy widoczność elementów
    if (isLoggedIn === 'true') {
        // Jeśli użytkownik jest zalogowany, ukryj link do logowania i pokaż link do profilu
        loginLink.style.display = 'none';
        logoutLink.style.display = 'inline'; // Link do wylogowania
        userProfileLink.style.display = 'inline'; // Link do profilu
    } else {
        // Jeśli użytkownik nie jest zalogowany, ukryj link do profilu i pokaż link do logowania
        loginLink.style.display = 'inline';
        logoutLink.style.display = 'none';
        userProfileLink.style.display = 'none';
    }

    // Obsługa kliknięcia na przycisk logowania
    loginLink.addEventListener('click', function(event) {
        // Zapisz informacje o logowaniu
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', 'User'); // Możesz zapisać tutaj np. nazwę użytkownika
        // Przekierowanie do strony profilu po zalogowaniu
        window.location.href = '/userProfile';
    });

    // Obsługa kliknięcia na przycisk wylogowywania
    logoutLink.addEventListener('click', function(event) {
        // Usuń dane użytkownika z sessionStorage
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        // Przekierowanie na stronę główną po wylogowaniu
        window.location.href = '/';
    });
});
