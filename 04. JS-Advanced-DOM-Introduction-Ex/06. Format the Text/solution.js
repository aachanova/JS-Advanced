function solve() {
  const textarea = document.getElementById('input');
  const sentenceArr = textarea.value.split('.').filter(s => s !== '');
  const outputDiv = document.getElementById('output');

  while (sentenceArr.length > 0) {
    let pElement = document.createElement('p');
    outputDiv.appendChild(pElement);

    pElement.textContent = sentenceArr.splice(0, 3).join('.') + '.';    
  }
}
