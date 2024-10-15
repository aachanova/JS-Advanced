window.addEventListener("load", solve);

function solve() {
    const colorInputElement = document.getElementById('colors');
    const modelInputElement = document.getElementById('motorcycles');
    const nameInputElement = document.getElementById('full-name');
    const emailInputElement = document.getElementById('email');
    const dateTimeInputElement = document.getElementById('datetime');
    const testRideBtnElement = document.getElementById('test-ride-btn');
    const ulPreviewElement = document.getElementById('preview-list');
    const ulCompleteElement = document.getElementById('complete-list');
    const divViewElement = document.querySelector('.data-view');

    testRideBtnElement.addEventListener('click', onTestRide);

    function onTestRide(e) {
        e.preventDefault();

        const color = colorInputElement.value;
        const model = modelInputElement.value;
        const name = nameInputElement.value;
        const email = emailInputElement.value;
        const dateTime = dateTimeInputElement.value;

        if (!color || !model || !dateTime || !name || !email) {
            return;
        }

        const pColorPreviewElement = document.createElement('p');
        pColorPreviewElement.textContent = `Color: ${color}`;

        const pModelPreviewElement = document.createElement('p');
        pModelPreviewElement.textContent = `Model: ${model}`;

        const pNamePreviewElement = document.createElement('p');
        pNamePreviewElement.textContent = `For: ${name}`;

        const pEmailPreviewElement = document.createElement('p');
        pEmailPreviewElement.textContent = `Contact: ${email}`;

        const pDateTimePreviewElement = document.createElement('p');
        pDateTimePreviewElement.textContent = `Test Ride On: ${dateTime}`;

        const articlePreviewElement = document.createElement('artcile');

        const editBtnElement = document.createElement('button');
        editBtnElement.textContent = 'Edit';
        editBtnElement.classList.add('edit-btn');

        const nextBtnElement = document.createElement('button');
        nextBtnElement.textContent = 'Next';
        nextBtnElement.classList.add('next-btn');

        const divPreviewBtnElement = document.createElement('div');
        divPreviewBtnElement.classList.add('btn-container');
        ///divPreviewBtnElement.setAttribute("class", "btn-container");

        const liPreviewElement = document.createElement('li');

        articlePreviewElement.appendChild(pColorPreviewElement);
        articlePreviewElement.appendChild(pModelPreviewElement);
        articlePreviewElement.appendChild(pNamePreviewElement);
        articlePreviewElement.appendChild(pEmailPreviewElement);
        articlePreviewElement.appendChild(pDateTimePreviewElement);

        divPreviewBtnElement.appendChild(editBtnElement);
        divPreviewBtnElement.appendChild(nextBtnElement);

        liPreviewElement.appendChild(articlePreviewElement);
        liPreviewElement.appendChild(divPreviewBtnElement);

        ulPreviewElement.appendChild(liPreviewElement);

        colorInputElement.value = '';
        modelInputElement.value = '';
        nameInputElement.value = '';
        emailInputElement.value = '';
        dateTimeInputElement.value = '';
        testRideBtnElement.disabled = true;

        editBtnElement.addEventListener('click', onEdit);
        nextBtnElement.addEventListener('click', onNext);

        function onEdit() {
            colorInputElement.value = color;
            modelInputElement.value = model;
            nameInputElement.value = name;
            emailInputElement.value = email;
            dateTimeInputElement.value = dateTime;

            liPreviewElement.remove();
            testRideBtnElement.disabled = false;
        }

        function onNext() {
            ulCompleteElement.appendChild(liPreviewElement);
            editBtnElement.remove();
            nextBtnElement.remove();

            const completeBtnElement = document.createElement('button');
            completeBtnElement.classList.add('complete-btn');
            completeBtnElement.textContent = 'Complete';

            articlePreviewElement.appendChild(completeBtnElement);

            completeBtnElement.addEventListener('click', onComplete);

            function onComplete() {
                liPreviewElement.remove();

                const confirmBtnElement = document.createElement('button');
                confirmBtnElement.classList.add('confirm-btn');
                confirmBtnElement.textContent = 'Your Test Ride is Confirmed';

                divViewElement.appendChild(confirmBtnElement);

                confirmBtnElement.addEventListener('click', onConfirm);

                function onConfirm() {
                    window.location.reload();
                }
            }
        }
    }
}




