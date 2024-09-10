function create(words) {
   const contentDiv = document.getElementById('content');

   words.forEach(w => {
      const divElement = document.createElement('div');
      divElement.addEventListener('click', displayHiddenWord);

      const paragraphElement = document.createElement('p');
      paragraphElement.textContent = w;
      paragraphElement.style.display = 'none';    

      divElement.appendChild(paragraphElement);
      contentDiv.appendChild(divElement);
   });

   function displayHiddenWord(e) {
      e.target.querySelector('p').style.display = 'block';
   }
}