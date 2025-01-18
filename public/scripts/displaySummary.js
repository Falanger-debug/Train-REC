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

function displaySummary() {
    const { class: selectedClass, discount, seat, price, wherefrom, whereto, from, to } = getUrlParams();

    const seatText = seat || "Wpisz numer ręcznie";

    const summaryData = [
        { label: "Skąd", value: wherefrom || "Nie wybrano", color: "text-primary" },
        { label: "Dokąd", value: whereto || "Nie wybrano", color: "text-primary" },
        { label: "Czas początkowy", value: from || "Nie wybrano", color: "text-primary" },
        { label: "Czas końcowy", value: to || "Nie wybrano", color: "text-primary" },
        { label: "Klasa", value: selectedClass === "1" ? "Klasa 1" : selectedClass === "2" ? "Klasa 2" : "Nie wybrano", color: "text-primary" },
        { label: "Ulga", value: discount === "student" ? "Ulga studencka (51%)" :
                discount === "school" ? "Ulga szkolna (37%)" :
                    discount === "senior" ? "Ulga dla seniorów (30%)" :
                        discount === "disabled" ? "Ulga dla osób niepełnosprawnych (78%)" : "Brak ulgi", color: "text-primary" },
        { label: "Miejsce", value: seatText, color: "text-primary" },
        { label: "Cena", value: price ? price + " zł" : "Nie określono", color: "text-success" }
    ];

    const rowsContent = summaryData.map(data => `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>${data.label}:</strong>
                <span class="${data.color}">${data.value}</span>
            </li>
        `).join('');

    document.getElementById("summaryContent").innerHTML = rowsContent;
}

window.addEventListener('load', displaySummary);