function addItem() {
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    const deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#';

    liElement.appendChild(deleteElement);
    ulElement.appendChild(liElement);

    inputElement.value = '';

    deleteElement.addEventListener('click', (event) => {
        liElement.remove()
        //event.currentTarget.parentNode.remove();
    });
}