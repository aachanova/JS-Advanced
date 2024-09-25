function focused() {
    const inputElements = document.querySelectorAll('div input');

    Array.from(inputElements)
        .forEach(input => {
            input.addEventListener('focus', onFocus);
            input.addEventListener('blur', onBlur);

            function onFocus() {
                input.parentElement.classList.add('focused');
            }

            function onBlur() {
                input.parentElement.classList.remove('focused');
            }
        });
}