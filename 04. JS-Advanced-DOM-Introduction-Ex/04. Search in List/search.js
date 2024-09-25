function search() {
   const townsLiElements = document.querySelectorAll('#towns li');
   const searchField = document.getElementById('searchText');
   const result = document.getElementById('result');
   let counter = 0;

   townsLiElements.forEach(town => {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = '';

      if (town.textContent.includes(searchField.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counter++;
      }
   });

   result.textContent = `${counter} matches found`; 
}
