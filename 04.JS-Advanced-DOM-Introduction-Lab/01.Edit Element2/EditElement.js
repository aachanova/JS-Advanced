function editElement() {
   const regExp = new RegExp('%insert name here%', 'g');
   const replacer = 'Document Object Model';

   document.querySelectorAll('h1').forEach(e => {
       e.textContent = e.textContent.replace(regExp, replacer);
   });
}