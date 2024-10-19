window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const fromDateElement = document.getElementById('from-date');
    const toDateElement = document.getElementById('to-date');
    const nextBtnElement = document.getElementById('next-btn');
    const ulVacInfoElement = document.querySelector('.info-list');
    const ulConfirmElement = document.querySelector('.confirm-list');
    const h1statusElement = document.getElementById('status');

    nextBtnElement.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let fromDate = fromDateElement.value;
        let toDate = toDateElement.value;

        let firstDate = new Date(fromDateElement.value);
        let secondDate = new Date(toDateElement.value);

        if ((!firstName || !lastName || !fromDate || !toDate) || (firstDate >= secondDate)) {
            return;
        }

        const h3InfoElement = document.createElement('h3');
        h3InfoElement.textContent = `Name: ${firstName} ${lastName}`;

        const pFromInfoElement = document.createElement('p');
        pFromInfoElement.textContent = `From date: ${fromDate}`;

        const pToInfoElement = document.createElement('p');
        pToInfoElement.textContent = `To date: ${toDate}`;

        const articleInfoElement = document.createElement('article');

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit-btn');
        editBtnElement.textContent = 'Edit';
        editBtnElement.addEventListener('click', onEdit);

        const continueBtnElement = document.createElement('button');
        continueBtnElement.classList.add('continue-btn');
        continueBtnElement.textContent = 'Continue';
        continueBtnElement.addEventListener('click', onContinue);

        const liInfoElement = document.createElement('li');
        liInfoElement.classList.add('vacation-content');
        //liElementInfo.setAttribute('class', 'vacation-content');

        articleInfoElement.appendChild(h3InfoElement);
        articleInfoElement.appendChild(pFromInfoElement);
        articleInfoElement.appendChild(pToInfoElement);

        liInfoElement.appendChild(articleInfoElement);
        liInfoElement.appendChild(editBtnElement);
        liInfoElement.appendChild(continueBtnElement);

        ulVacInfoElement.appendChild(liInfoElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        fromDateElement.value = '';
        toDateElement.value = '';

        nextBtnElement.disabled = true;

        function onEdit() {
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            fromDateElement.value = fromDate;
            toDateElement.value = toDate;

            nextBtnElement.disabled = false;
            liInfoElement.remove();
        }

        function onContinue() {
            ulConfirmElement.appendChild(liInfoElement);
            editBtnElement.remove();
            continueBtnElement.remove();

            const confirmBtnElement = document.createElement('button');
            confirmBtnElement.classList.add('confirm-btn');
            confirmBtnElement.textContent = 'Confirm';
            confirmBtnElement.addEventListener('click', onConfirm);

            const cancelBtnElement = document.createElement('button');
            cancelBtnElement.classList.add('cancel-btn');
            cancelBtnElement.textContent = 'Cancel';
            cancelBtnElement.addEventListener('click', onCancel);

            liInfoElement.appendChild(confirmBtnElement);
            liInfoElement.appendChild(cancelBtnElement);

            function onConfirm() {
                liInfoElement.remove();
                nextBtnElement.disabled = false;

                h1statusElement.classList.add('vacation-confirmed');
                h1statusElement.textContent = 'Vacation Requested';
            }

            function onCancel() {
                liInfoElement.remove();
                nextBtnElement.disabled = false;

                h1statusElement.classList.add('vacation-cancelled');
                h1statusElement.textContent = 'Cancelled Vacation';
            }

            h1statusElement.addEventListener('click', reload);

            function reload() {
                window.location.reload();
            }
        }
    }
}




