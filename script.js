document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offset = 90;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    if (!name.value.trim()) {
        name.style.borderColor = 'red';
        isValid = false;
    } else {
        name.style.borderColor = '#E5E7EB';
    }
    
    if (!email.value.trim() || !email.value.includes('@')) {
        email.style.borderColor = 'red';
        isValid = false;
    } else {
        email.style.borderColor = '#E5E7EB';
    }
    
    if (!message.value.trim()) {
        message.style.borderColor = 'red';
        isValid = false;
    } else {
        message.style.borderColor = '#E5E7EB';
    }
    
    if (isValid) {
        alert('Thank you for your message!');
        this.reset();
    }
});