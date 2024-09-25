function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[type=text]');
    const emailsElements = document.querySelectorAll('td:nth-of-type(2)');
    const resultedDiv = document.getElementById('result');

    const resultElement = Array.from(emailsElements).find(e => e.textContent === inputEmailElement.value);

    if (resultElement) {
        resultElement.parentNode.remove();
        resultedDiv.textContent = 'Deleted. '
    } else {
        resultedDiv.textContent = 'Not found.';
    }    
}