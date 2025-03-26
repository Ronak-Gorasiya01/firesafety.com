// Functionality for "Learn More" button
function learnMore() {
    alert("Learn more about our innovative fire detection and extinguishing system!");
}

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received.`);
                contactForm.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});
