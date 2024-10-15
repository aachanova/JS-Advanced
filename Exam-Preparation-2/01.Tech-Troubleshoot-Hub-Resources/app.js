window.addEventListener('load', solution);

function solution() {
  const employeeInputElement = document.getElementById('employee');
  const categoryInputElement = document.getElementById('category');
  const urgencyInputElement = document.getElementById('urgency');
  const teamInputElement = document.getElementById('team');
  const descriptionInputElement = document.getElementById('description');

  const addButtonElement = document.getElementById('add-btn');
  addButtonElement.addEventListener('click', onAdd);

  const ulPreviewSection = document.getElementById('preview-list');
  const ulPendingSection = document.getElementById('pending-list');
  const ulResolvedSection = document.getElementById('resolved-list');

  const employeeInput = employeeInputElement.value;
  const categoryInput = categoryInputElement.value;
  const urgencyInput = urgencyInputElement.value;
  const teamInput = teamInputElement.value;
  const descriptionInput = descriptionInputElement.value;

  function onAdd(e) {
    e.preventDefault();

    if (!employeeInput || !categoryInput || !urgencyInput || !teamInput || !descriptionInput) {
      return;
    }

  }
}




