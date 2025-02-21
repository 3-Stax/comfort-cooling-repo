 const modal = document.getElementById('discountModal');
 const closeBtn = document.querySelector('.close');

 window.onload = function() {
   modal.style.display = 'block';
 };

 closeBtn.onclick = function() {
   modal.style.display = 'none';
 };

 window.onclick = function(event) {
   if (event.target === modal) {
     modal.style.display = 'none';
   }
 };

 const form = document.getElementById('discountForm');
 form.addEventListener('submit', function(event) {
   event.preventDefault(); 

   const name = document.getElementById('name').value;
   const phone = document.getElementById('phone').value;
   const email = document.getElementById('email').value;

   if (name && phone && email) {
     alert(`Thank you, ${name}! Your 25% discount has been applied. We will contact you shortly.`);
     modal.style.display = 'none'; 
   } else {
     alert('Please fill out all fields.');
   }
 });