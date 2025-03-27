const modal = document.getElementById('discountModal');
const closeBtn = document.querySelector('.close');

window.onload = function() {
  setTimeout(function() {
    modal.style.display = 'block';
  }, 3000); // Show modal after 3 seconds
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

  if (!name) {
    alert('Please enter your name.');
    return;
  }
  if (!phone) {
    alert('Please enter your phone number.');
    return;
  }
  if (!email) {
    alert('Please enter your email address.');
    return;
  }

  alert(`Thank you, ${name}! Your 25% discount has been applied. We will contact you shortly.`);
  modal.style.display = 'none';
});