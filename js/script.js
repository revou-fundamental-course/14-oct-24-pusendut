document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const nameInput = document.getElementById('name');

    // Change welcome message when name is entered
    nameInput.addEventListener('input', function() {
        if (nameInput.value) {
            welcomeMessage.textContent = `Hi ${nameInput.value}, Welcome to the Website`;
        } else {
            welcomeMessage.textContent = 'Hi, Welcome to the Website';
        }
    });
});

document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && phone && message) {
        // Update the submitted box with values
        document.getElementById("submitted-name").innerText = "Name: " + name;
        document.getElementById("submitted-email").innerText = "Email: " + email;
        document.getElementById("submitted-phone").innerText = "Phone: " + phone;
        document.getElementById("submitted-message").innerText = "Message: " + message;

        // Show the submitted box
        document.getElementById("submitted-box").style.display = "block";
        
        // Clear the form fields
        document.getElementById("message-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});


// Navigate to section based on selection box
function navigateToSection() {
    const selectedSection = document.getElementById('nav-select').value;
    if (selectedSection) {
        window.location.href = selectedSection;
    }
}
