// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a smooth scroll effect for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a simple dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
        
        // Check for saved preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    }
    
    // Simple form validation example
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            
            // Simple email validation
            if (!emailInput.value.includes('@')) {
                isValid = false;
                alert('Please enter a valid email address');
            }
            
            // Check if message is not empty
            if (messageInput.value.trim() === '') {
                isValid = false;
                alert('Please enter a message');
            }
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    }
});
