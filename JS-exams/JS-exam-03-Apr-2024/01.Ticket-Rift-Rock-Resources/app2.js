window.addEventListener("load", solve);

function solve() {
    const numTicketsElement = document.getElementById('num-tickets');
    const seatPrefElement = document.getElementById('seating-preference');
    const fullNameElement = document.getElementById('full-name');
    const emailElement = document.getElementById('email');
    const phoneNumElement = document.getElementById('phone-number');
    const purchBtnElement = document.getElementById('purchase-btn');
    const ulTickPreviewElement = document.getElementById('ticket-preview');
    const ulTickPurchElement = document.getElementById('ticket-purchase');
    const divBottomContElement = document.querySelector('.bottom-content');

    purchBtnElement.addEventListener('click', onPurchTickets);

    function onPurchTickets(e) {
        e.preventDefault();

        const numTickets = numTicketsElement.value;
        const seatPref = seatPrefElement.value;
        const fullName = fullNameElement.value;
        const email = emailElement.value;
        const phoneNum = phoneNumElement.value;

        if (!numTickets || !seatPref || !fullName || !email || !phoneNum) {
            return;
        }

        const pCountPrevElement = document.createElement('p');
        pCountPrevElement.textContent = `Count: ${numTickets}`;

        const pPreferencePrevElement = document.createElement('p');
        pPreferencePrevElement.textContent = `Preference: ${seatPref}`;

        const pToPrevElement = document.createElement('p');
        pToPrevElement.textContent = `To: ${fullName}`;

        const pEmailPrevElement = document.createElement('p');
        pEmailPrevElement.textContent = `Email: ${email}`;

        const pPhonePrevElement = document.createElement('p');
        pPhonePrevElement.textContent = `Phone Number: ${phoneNum}`;

        const articlePrevElement = document.createElement('article');

        const editBtnPrevElement = document.createElement('button');
        editBtnPrevElement.classList.add('edit-btn');
        editBtnPrevElement.textContent = 'Edit';
        editBtnPrevElement.addEventListener('click', onEdit);

        const nextBtnPrevElement = document.createElement('button');
        nextBtnPrevElement.classList.add('next-btn');
        nextBtnPrevElement.textContent = 'Next';
        nextBtnPrevElement.addEventListener('click', onNext);

        const divBtnPrevElement = document.createElement('div');
        divBtnPrevElement.classList.add('btn-container');

        const liPrevElement = document.createElement('li');

        articlePrevElement.appendChild(pCountPrevElement);
        articlePrevElement.appendChild(pPreferencePrevElement);
        articlePrevElement.appendChild(pToPrevElement);
        articlePrevElement.appendChild(pEmailPrevElement);
        articlePrevElement.appendChild(pPhonePrevElement);

        divBtnPrevElement.appendChild(editBtnPrevElement);
        divBtnPrevElement.appendChild(nextBtnPrevElement);

        liPrevElement.appendChild(articlePrevElement);
        liPrevElement.appendChild(divBtnPrevElement);

        ulTickPreviewElement.appendChild(liPrevElement);

        numTicketsElement.value = '';
        seatPrefElement.value = '';
        fullNameElement.value = '';
        emailElement.value = '';
        phoneNumElement.value = '';

        purchBtnElement.disabled = true;

        function onEdit() {
            numTicketsElement.value = numTickets;
            seatPrefElement.value = seatPref;
            fullNameElement.value = fullName;
            emailElement.value = email;
            phoneNumElement.value = phoneNum;

            purchBtnElement.disabled = false;
            liPrevElement.remove();
        }

        function onNext() {
            divBtnPrevElement.remove();
            
            const buyBtnPurchElement = document.createElement('button');
            buyBtnPurchElement.classList.add('buy-btn');
            buyBtnPurchElement.textContent = 'Buy';
            buyBtnPurchElement.addEventListener('click', onBuy);


            articlePrevElement.appendChild(buyBtnPurchElement);
            ulTickPurchElement.appendChild(liPrevElement);

            function onBuy() {
                liPrevElement.remove();

                const h2BottomContElement = document.createElement('h2');
                h2BottomContElement.textContent = 'Thank you for your purchase!';

                const backBtnBottomContElement = document.createElement('button');
                backBtnBottomContElement.classList.add('back-btn');
                backBtnBottomContElement.textContent = 'Back';
                backBtnBottomContElement.addEventListener('click', onBack);

                divBottomContElement.appendChild(h2BottomContElement);
                divBottomContElement.appendChild(backBtnBottomContElement);

                function onBack() {
                    window.location.reload();
                    purchBtnElement.disabled = false;
                }
            }
        }
    }
}