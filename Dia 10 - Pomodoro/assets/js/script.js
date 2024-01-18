let [milliseconds, seconds, minutes, hours] = [0, 0, 25, 0]; // Timer inicial configurado para 25 minutos
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 25, 0]; // Reiniciar para 25 minutos
    timeRef.innerHTML = "00 : 25 : 00 : 000 ";
});

document.getElementById("reset-button").addEventListener("click", () => {
    document.getElementById("congratsMessage").style.display = "none";
    resetTimer();
});

function displayTimer() {
    milliseconds -= 10;
    if (milliseconds < 0) {
        milliseconds = 990;
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    // Você pode adicionar a lógica de pausa aqui
                    clearInterval(int);
                    [milliseconds, seconds, minutes, hours] = [0, 0, 25, 0]; // Reiniciar para 25 minutos para o próximo Pomodoro
                    document.getElementById("congratsMessage").style.display = "flex";
                }
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

function resetTimer() {
    [milliseconds, seconds, minutes, hours] = [0, 0, 25, 0]; // Reiniciar para 25 minutos
    timeRef.innerHTML = "00 : 25 : 00 : 000 ";
}
