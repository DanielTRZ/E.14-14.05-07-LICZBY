// Funkcja zabezpieczająca podstronę hasłem "liczba"
function sprawdzHaslo(e) {
    e.preventDefault();
    let haslo = prompt("Podaj hasło:");
    if (haslo === "liczba") {
        pokazPodstrone('liczba');
    } else {
        alert("Błędne hasło!");
    }
}

// Przełączanie zawartości podstron w prawej kolumnie
function pokazPodstrone(id) {
    document.getElementById('tresc-glowna').style.display = 'none';
    document.getElementById('tresc-opis').style.display = 'none';
    document.getElementById('tresc-liczba').style.display = 'none';
    document.getElementById('tresc-zakres').style.display = 'none';

    if (id === 'opis') {
        document.getElementById('tresc-opis').style.display = 'block';
    } else if (id === 'liczba') {
        document.getElementById('tresc-liczba').style.display = 'block';
        uruchomJakaToLiczba();
    } else if (id === 'zakres') {
        document.getElementById('tresc-zakres').style.display = 'block';
        uruchomZakres();
    } else {
        document.getElementById('tresc-glowna').style.display = 'block';
    }
}

// Zadanie: Jaka to liczba?
function uruchomJakaToLiczba() {
    let input = prompt("Podaj liczbę całkowitą");
    let wynikDiv = document.getElementById('wynik-liczba');
    
    if (input !== null && input.trim() !== "") {
        let x = Number(input);
        if (isNaN(x)) {
            wynikDiv.innerHTML = "To nie jest poprawna liczba!";
            return;
        }
        
        if (x > 0) {
            wynikDiv.innerHTML = "Liczba " + x + " jest dodatnia";
        } else if (x < 0) {
            wynikDiv.innerHTML = "Liczba " + x + " jest ujemna";
        } else {
            wynikDiv.innerHTML = "Liczba " + x + " to zero";
        }
    } else {
        wynikDiv.innerHTML = "Anulowano wprowadzanie.";
    }
}

// Zadanie: Liczby całkowite z zakresu
function uruchomZakres() {
    let p1 = prompt("Podaj liczbę początkową");
    let wynikDiv = document.getElementById('wynik-zakres');

    if (p1 === null || p1.trim() === "") {
        wynikDiv.innerHTML = "Anulowano wprowadzanie.";
        return;
    }

    let p2 = prompt("Podaj liczbę końcową");
    if (p2 === null || p2.trim() === "") {
        wynikDiv.innerHTML = "Anulowano wprowadzanie.";
        return;
    }

    let start = parseInt(p1);
    let koniec = parseInt(p2);

    if (isNaN(start) || isNaN(koniec)) {
        wynikDiv.innerHTML = "Wprowadzone wartości muszą być liczbami całkowitymi!";
        return;
    }

    let wynik = "";
    
    if (start <= koniec) {
        // Ciąg rosnący
        for (let i = start; i <= koniec; i++) {
            wynik += i + (i < koniec ? ", " : "");
        }
    } else {
        // Ciąg malejący
        for (let i = start; i >= koniec; i--) {
            wynik += i + (i > koniec ? ", " : "");
        }
    }

    wynikDiv.innerHTML = wynik;
}