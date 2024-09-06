function toggle() {
    const moreButtonElement = document.getElementsByClassName('button');
    const extraTextDiv = document.getElementById('extra');

    if (moreButtonElement[0].textContent === 'More') {
        extraTextDiv.style.display = 'block';
        moreButtonElement[0].textContent = 'Less';
    } else if (moreButtonElement[0].textContent === 'Less') {
        extraTextDiv.style.display = 'none';
        moreButtonElement[0].textContent = 'More';
    }
}