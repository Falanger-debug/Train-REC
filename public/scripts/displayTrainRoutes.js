function updateTrainModal(name, number, from, to, distanceFromTheStart) {
    document.getElementById('trainName').innerHTML = `<b>Nazwa pociągu:</b> ${name}` || "Brak danych";
    document.getElementById('trainNumber').innerHTML = `<b>Numer pociągu:</b> ${number}` || "Brak danych";
    document.getElementById('trainFrom').innerHTML = `<b>Stacja początkowa:</b> ${from}` || "Brak danych";
    document.getElementById('trainTo').innerHTML = `<b>Stacja końcowa:</b> ${to}` || "Brak danych";
    document.getElementById('distanceFromTheStart').innerHTML = `<b>Odległość od stacji początkowej:</b> ${distanceFromTheStart}` || "Brak danych";
}

function updateCourseModal(from, to, startTime, destTime, duration, connections, price) {
    document.getElementById('startStation').innerHTML =
        `<b>Stacja początkowa:</b> ${from || "Brak danych"}`;
    document.getElementById('destStation').innerHTML =
        `<b>Stacja końcowa:</b> ${to || "Brak danych"}`;
    document.getElementById('startTime').innerHTML =
        `<b>Godzina wyjazdu:</b> ${startTime || "Brak danych"}`;
    document.getElementById('destTime').innerHTML =
        `<b>Godzina przyjazdu:</b> ${destTime || "Brak danych"}`;
    document.getElementById('duration').innerHTML =
        `<b>Czas trwania:</b> ${duration || "Brak danych"}`;
    document.getElementById('numOfConnections').innerHTML =
        `<b>Liczba przesiadek:</b> ${connections || "Brak danych"}`;
    document.getElementById('basePrice').innerHTML =
        `<b>Cena podstawowa:</b> ${price || "Brak danych"}`;
}