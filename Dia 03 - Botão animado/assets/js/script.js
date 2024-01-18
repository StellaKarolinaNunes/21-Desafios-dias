let isPressed = false;

function toggleButton() {
    isPressed = !isPressed;
    updateButtonState();
}

function updateButtonState() {
    const button = document.getElementById('customButton');
    const circleLoader = document.getElementById('circleLoader');
    const powerIcon = document.getElementById('powerIcon');

    if (isPressed) {
        button.style.backgroundColor = 'blue';
        circleLoader.style.display = 'block';
        powerIcon.style.display = 'none';
    } else {
        button.style.backgroundColor = 'red';
        circleLoader.style.display = 'none';
        powerIcon.style.display = 'block';
    }
}