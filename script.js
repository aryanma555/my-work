const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const quickForm = document.getElementById('quickForm');
const serviceForm = document.getElementById('serviceForm');

menuBtn?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function handleFormSubmit(form, outputId, message) {
  const output = document.getElementById(outputId);
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    output.textContent = message;
    form.reset();
  });
}

handleFormSubmit(quickForm, 'quickMsg', 'Thanks! Our team will contact you shortly.');
handleFormSubmit(serviceForm, 'serviceMsg', 'Service request submitted successfully.');
