const form = document.querySelector('.blog-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const subject = form.elements['subject'].value;
  const message = form.elements['message'].value;

  const mailtoLink = `mailto:margevity@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0A${encodeURIComponent(name)}%0D%0A${encodeURIComponent(email)}`;

  window.location.href = mailtoLink;
});
