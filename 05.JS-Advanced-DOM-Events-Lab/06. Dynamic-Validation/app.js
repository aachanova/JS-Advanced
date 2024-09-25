function validate() {
    const inputEmailElement = document.getElementById('email');

    inputEmailElement.addEventListener('change', onChange);

    function onChange() {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!pattern.test(inputEmailElement)) {
            inputEmailElement.classList.add('error');
        } else {
            inputEmailElement.classList.remove('error');
        }
    }
}