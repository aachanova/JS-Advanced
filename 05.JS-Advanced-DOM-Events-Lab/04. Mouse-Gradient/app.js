function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentMousePosition = event.offsetX;
        const elementWidth = event.currentTarget.clientWidth;
        const percent = Math.floor((currentMousePosition / elementWidth) * 100);
        resultElement.textContent = `${percent}%`;
    });
}