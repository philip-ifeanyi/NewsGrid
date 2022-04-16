function logSubmit(event) {
  confirm(`Mail Submitted!`);
  event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  prompt('Thanks for Registering With Us, Check Your Email for a Confirmation Mail');
  event.preventDefault();
});