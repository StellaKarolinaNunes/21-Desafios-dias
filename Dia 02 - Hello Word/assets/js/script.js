const helloText = document.getElementById('hello-text');
const colors = {
    red: '#C51212',
    blue: '#0041C2',
    green: '#14B02D',
    yellow: '#ffc12b'
};

let intervalId;

helloText.addEventListener('mouseover', function () {
    intervalId = setInterval(() => {
        const randomColor = getRandomColor();
        helloText.style.color = colors[randomColor];
    }, 500); // Altera a cada 500 milissegundos (meio segundo)
});

helloText.addEventListener('mouseout', function () {
    clearInterval(intervalId);
    helloText.style.color = ''; // Volta à cor original ou defina uma cor padrão aqui
});

// Função para obter uma cor aleatória do objeto 'colors'
function getRandomColor() {
    const colorKeys = Object.keys(colors);
    const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    return randomKey;
}
