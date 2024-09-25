function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rows = document.querySelectorAll('tbody tr');
      const searchField = document.getElementById('searchField');

      for (const row of rows) {         
         if (row.textContent.includes(searchField.value)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }       
      }  

      searchField.value = '';
   }
}  