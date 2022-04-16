function logSubmit(event) {
  confirm(`Mail Submitted!`);
  event.preventDefault();
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);