document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.querySelector('input[name="email"]');
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If email is valid, you can send it to the server for further processing
        sendEmailToServer(email);
    });

    function isValidEmail(email) {
        // Basic email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function sendEmailToServer(email) {
        // You can send the email to the server using AJAX or fetch API
        // For simplicity, let's just log it to the console here
        console.log('Email submitted:', email);
        alert('Thank you for signing up!');
    }
});
