window.addEventListener('load', solve);

function solve() {
    const nameInputElement = document.getElementById('name');
    const emailInputElement = document.getElementById('email');
    const contactNumberInputElement = document.getElementById('contact-number');
    const classTypeInputElement = document.getElementById('class-type');
    const classTimeInputElement = document.getElementById('class-time');
    const nextBtnElement = document.getElementById('next-btn');
    const ulPreviewElement = document.querySelector('.class-info');
    const ulConfirmElement = document.querySelector(('.confirm-class'));
    const mainDivElement = document.getElementById('main');
    const bodyElement = document.getElementById('body');

    nextBtnElement.addEventListener('click', onNext);

    let name;
    let email;
    let contactNumber;
    let classType;
    let classTime;

    function onNext(e) {
        e.preventDefault();

        name = nameInputElement.value;
        email = emailInputElement.value;
        contactNumber = contactNumberInputElement.value;
        classType = classTypeInputElement.value;
        classTime = classTimeInputElement.value;

        if (!name || !email || !contactNumber || !classType || !classTime) {
            return;
        }

        createPreviewSection(name, email, contactNumber, classType, classTime);

        nextBtnElement.disabled = true;

        nameInputElement.value = '';
        emailInputElement.value = '';
        contactNumberInputElement.value = '';
        classTypeInputElement.value = '';
        classTimeInputElement.value = '';
    }

    function createPreviewSection(name, email, contactNumber, classType, classTime) {

        const article = document.createElement('article');
        article.classList.add('personal-info');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        // editButton.className = 'edit-btn';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => onEdit(name, email, contactNumber, classType, classTime));

        const continueButton = document.createElement('button');
        continueButton.textContent = 'Continue';
        continueButton.classList.add('continue-btn');
        continueButton.addEventListener('click', () => onContinue(li, editButton, continueButton));

        const li = document.createElement('li');
        li.classList.add('info-item');

        article.appendChild(createParagraphElement(name));
        article.appendChild(createParagraphElement(email));
        article.appendChild(createParagraphElement(contactNumber));
        article.appendChild(createParagraphElement(classType));
        article.appendChild(createParagraphElement(classTime));

        li.appendChild(article);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        ulPreviewElement.appendChild(li);
    }

    function createParagraphElement(content) {
        const pElement = document.createElement('p');
        pElement.textContent = content;
        return pElement;
    }

    function onEdit(name, email, contactNumber, classType, classTime) {
        nameInputElement.value = name;
        emailInputElement.value = email;
        contactNumberInputElement.value = contactNumber;
        classTypeInputElement.value = classType;
        classTimeInputElement.value = classTime;

        ulPreviewElement.innerHTML = '';
        nextBtnElement.disabled = false;
    }

    function onContinue(li, editButton, continueButton) {
        li.className = 'confirm-class';
        ulConfirmElement.appendChild(li);
        editButton.remove();
        continueButton.remove();

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancel-btn');
        cancelButton.addEventListener('click', () => onCancel(li));

        const confirmButton = document.createElement('button');
        confirmButton.textContent = 'Confirm';
        confirmButton.classList.add('confirm-btn');
        confirmButton.addEventListener('click',onConfirm);        

        li.appendChild(cancelButton);
        li.appendChild(confirmButton);
    }

    function onCancel(li) {
        ulConfirmElement.removeChild(li);
        nextBtnElement.disabled = false;
    }

    function onConfirm() {
        mainDivElement.remove();

        const h1MessageElement = document.createElement('h1');
        h1MessageElement.setAttribute('id', 'thank-you');
        h1MessageElement.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!'

        const doneButton = document.createElement('button');
        doneButton.setAttribute('id', 'done-btn');
        // doneButton.id = 'done-btn';
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', onDone)

        bodyElement.appendChild(h1MessageElement);
        bodyElement.appendChild(doneButton);
        // document.body.appendChild(doneButton);
    }

    function onDone() {
        location.reload();
        // window.location.reload()
    }
}