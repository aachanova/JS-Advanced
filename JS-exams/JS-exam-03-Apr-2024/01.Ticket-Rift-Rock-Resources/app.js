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

    if (numTicketsElement.value === '' || seatPrefElement.value === '' || fullNameElement.value === '' || emailElement.value === '' || phoneNumElement.value === '') {
      return;
    }

    const pCountPrevElement = document.createElement('p');
    pCountPrevElement.textContent = `Count: ${numTicketsElement.value}`;

    const pPreferencePrevElement = document.createElement('p');
    pPreferencePrevElement.textContent = `Preference: ${seatPrefElement.value}`;

    const pToPrevElement = document.createElement('p');
    pToPrevElement.textContent = `To: ${fullNameElement.value}`;

    const pEmailPrevElement = document.createElement('p');
    pEmailPrevElement.textContent = `Email: ${emailElement.value}`;

    const pPhonePrevElement = document.createElement('p');
    pPhonePrevElement.textContent = `Phone Number: ${phoneNumElement.value}`;

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
    liPrevElement.classList.add('ticket-purchase');


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

    let numTickets = numTicketsElement.value;
    let seatPref = seatPrefElement.value;
    let fullName = fullNameElement.value;
    let email = emailElement.value;
    let phoneNum = phoneNumElement.value;

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
      // divBtnPrevElement.remove();
      // liPrevElement.classList.add('ticket-purchase');
      // ulTickPurchElement.appendChild(liPrevElement);

      const buyBtnPurchElement = document.createElement('button');
      buyBtnPurchElement.classList.add('buy-btn');
      buyBtnPurchElement.textContent = 'Buy';
      buyBtnPurchElement.addEventListener('click', onBuy);

      const articlePurchElement = document.createElement('article');

      const liPurchElement = document.createElement('li');
      liPurchElement.classList.add('ticket-purchase');

      articlePurchElement = articlePrevElement;

      articlePurchElement.appendChild(buyBtnPurchElement);
      liPurchElement.appendChild(articlePurchElement);
      ulTickPurchElement.appendChild(liPurchElement);


      function onBuy() {
        liPurchElement.remove();

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
          //purchBtnElement.disabled = false;
        }
      }
    }
  }
}
