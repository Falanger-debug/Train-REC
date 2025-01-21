function returnTicket(index) {
    if (confirm('Czy na pewno chcesz zwrócić ten bilet?')) {
        fetch(`/returnTicket?index=${index}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Bilet został zwrócony!');
                    document.location.reload();
                } else {
                    alert(`Wystąpił błąd: ${data.message}`);
                }
            })
            .catch((error) => {
                console.error('Wystąpił błąd podczas zwracania biletu:', error);
                alert('Nie udało się zwrócić biletu. Spróbuj ponownie później.');
            });
    }
}