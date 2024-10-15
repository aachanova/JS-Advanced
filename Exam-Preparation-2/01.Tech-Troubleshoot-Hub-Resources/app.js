window.addEventListener('load', solution);

function solution() {
  const employeeInputElement = document.getElementById('employee');
  const categoryInputElement = document.getElementById('category');
  const urgencyInputElement = document.getElementById('urgency');
  const teamInputElement = document.getElementById('team');
  const descriptionInputElement = document.getElementById('description');

  const addButtonElement = document.getElementById('add-btn');
  addButtonElement.addEventListener('click', onAdd);

  const ulPreviewSectionElement = document.querySelector('.preview-list');
  const ulPendingwSectionElement = document.querySelector('.pending-list');
  const ulResolvedSectionElement = document.querySelector('.resolved-list');

  let employeeInput;
  let categoryInput;
  let urgencyInput;
  let teamInput;
  let descriptionInput;

  function onAdd(e) {
    e.preventDefault();

    employeeInput = employeeInputElement.value;
    categoryInput = categoryInputElement.value;
    urgencyInput = urgencyInputElement.value;
    teamInput = teamInputElement.value;
    descriptionInput = descriptionInputElement.value;

    if (!employeeInput || !categoryInput || !urgencyInput || !teamInput || !descriptionInput) {
      return;
    }

    createPreviewSection();

    employeeInputElement.value = '';
    categoryInputElement.value = '';
    urgencyInputElement.value = '';
    teamInputElement.value = '';
    descriptionInputElement.value = '';

    addButtonElement.disabled = true;
  }

  function createPreviewSection() {
    const articlePreviewElement = document.createElement('article');

    const pPreviewFromElement = document.createElement('p');
    pPreviewFromElement.textContent = `From: ${employeeInputElement.value}`;

    const pPreviewCategoryElement = document.createElement('p');
    pPreviewCategoryElement.textContent = `Category: ${categoryInputElement.value}`;

    const pPreviewUrgencyElement = document.createElement('p');
    pPreviewUrgencyElement.textContent = `Urgency: ${urgencyInputElement.value}`;

    const pPreviewAssignToElement = document.createElement('p');
    pPreviewAssignToElement.textContent = `Assigned to: ${teamInputElement.value}`;

    const pPreviewDescriptionElement = document.createElement('p');
    pPreviewDescriptionElement.textContent = `Description: ${descriptionInputElement.value}`;

    const editPreviewBtnElement = document.createElement('button');
    editPreviewBtnElement.classList.add('edit-btn');
    editPreviewBtnElement.textContent = 'Edit';
    editPreviewBtnElement.addEventListener('click', onEdit);

    const continuePreviewBtnElement = document.createElement('button');
    continuePreviewBtnElement.classList.add('continue-btn');
    continuePreviewBtnElement.textContent = 'Continue';
    continuePreviewBtnElement.addEventListener('click', () => onContinue(liPreviewElement));

    const liPreviewElement = document.createElement('li');
    liPreviewElement.classList.add('problem-content');

    articlePreviewElement.appendChild(pPreviewFromElement);
    articlePreviewElement.appendChild(pPreviewCategoryElement);
    articlePreviewElement.appendChild(pPreviewUrgencyElement);
    articlePreviewElement.appendChild(pPreviewAssignToElement);
    articlePreviewElement.appendChild(pPreviewDescriptionElement);

    liPreviewElement.appendChild(articlePreviewElement);
    liPreviewElement.appendChild(editPreviewBtnElement);
    liPreviewElement.appendChild(continuePreviewBtnElement);

    ulPreviewSectionElement.appendChild(liPreviewElement);
  }

  function onEdit() {
    employeeInputElement.value = employeeInput;
    categoryInputElement.value = categoryInput;
    urgencyInputElement.value = urgencyInput;
    teamInputElement.value = teamInput;
    descriptionInputElement.value = descriptionInput;

    addButtonElement.disabled = false;
    ulPreviewSectionElement.innerHTML = '';
  }

  function onContinue(liPreviewElement) {
    ulPendingwSectionElement.appendChild(liPreviewElement);
    addButtonElement.disabled = false;
    editPreviewBtnElement.remove();
    continuePreviewBtnElement.remove();

    const resolvedBtnElement = document.createElement('button');
    resolvedBtnElement.textContent = 'Resolved';
    resolvedBtnElement.classList.add('resolve-btn');
    liPreviewElement.appendChild(resolvedBtnElement);
  }

}




