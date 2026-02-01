 emailjs.init("7hJwjzlP7jaWrQz0p");  // From dashboard

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_99nuiug', 'template_mkgjfje', this)
      .then(() => {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        this.reset();
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000); // Hide after 5 seconds
      }, (error) => {
        alert('Oops... ' + JSON.stringify(error));
      });
  });
