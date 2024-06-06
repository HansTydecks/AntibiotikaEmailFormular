function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailContent = `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        message: emailContent,
        to_email: 'max.mustermann@gmail.com'
    })
    .then((response) => {
        alert('Email erfolgreich gesendet!');
    }, (error) => {
        alert('Fehler beim Senden der Email: ' + error.text);
    });
}
