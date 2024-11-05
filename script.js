// Pobieranie przycisku i elementu body
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Funkcja przełączania trybu
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Zmiana tekstu przycisku
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Tryb Dzienny';
    } else {
        modeToggle.textContent = 'Tryb Nocny';
    }
});

// Domyślny tryb - nocny
body.classList.add('dark-mode');
