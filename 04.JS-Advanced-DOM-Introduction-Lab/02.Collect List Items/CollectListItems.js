function extractText() {
    let itemsElements = document.querySelectorAll('#items li');
    let textAreaElement = document.getElementById('result');

    for (const item of itemsElements) {
        textAreaElement.value += item.textContent + '\n';
    }
}