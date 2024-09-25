function addItem() {
    const inputFieldElement = document.getElementById('newItemText');
    const ulItemsElement = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = inputFieldElement.value;
    ulItemsElement.append(liElement);
    
    inputFieldElement.value = '';
    inputFieldElement.focus();
}