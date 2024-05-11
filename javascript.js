// Open login modal
document.querySelector('.icon a').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

// Close modals
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Download button functionality
document.getElementById('downloadButton').addEventListener('click', function() {
    // Add your download logic here
    alert('Download functionality will be implemented here.');
});

// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    alert('Login functionality will be implemented here.');
    // Close the modal after login
    document.getElementById('loginModal').style.display = 'none';
})