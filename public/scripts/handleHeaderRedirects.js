document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    const loginLink = document.querySelector('a[href="/login"]');
    const logoutLink = document.querySelector('a[href="/"]');

    loginLink.addEventListener('click', function(event) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', 'User');
        window.location.href = '/userProfile';
    });

    logoutLink.addEventListener('click', function(event) {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        window.location.href = '/';
    });
});
