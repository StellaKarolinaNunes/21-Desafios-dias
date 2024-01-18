let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

function startTimer() {
    timer = setInterval(updateTimer, 10);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
    millisecondsElement.textContent = padZero(milliseconds);
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);


// theme

/// theme-switcher.js
const themeStylesheet = document.getElementById('themeStylesheet');
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Verifica o tema atual ao carregar a página
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    themeStylesheet.href = `${currentTheme}-theme.css`;
}

// Alterna entre os temas
function toggleTheme() {
    if (themeStylesheet.href.includes('light')) {
        themeStylesheet.href = 'dark-theme.css';
        localStorage.setItem('theme', 'dark');
    } else {
        themeStylesheet.href = 'light-theme.css';
        localStorage.setItem('theme', 'light');
    }
}

// Adiciona um ouvinte de evento ao botão de alternância
themeToggleBtn.addEventListener('click', toggleTheme);


