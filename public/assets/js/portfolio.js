document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for portfolio cards
    const portfolioCards = document.querySelectorAll('.project-card');
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-image img').style.transform = 'scale(1.035)';
            this.querySelector('.project-overlay').style.transform = 'scale(1.1)';
            this.querySelector('.project-overlay').style.opacity = '0.95';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-image img').style.transform = 'scale(1)';
            this.querySelector('.project-overlay').style.transform = 'scale(1)';
            this.querySelector('.project-overlay').style.opacity = '1';
        });
    });
    
    // Add hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects for process cards
    const processCards = document.querySelectorAll('.process-card');
    processCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.step-icon')?.style.transform = 'scale(1.1)';
            this.querySelector('.step-icon')?.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.step-icon')?.style.transform = 'scale(1)';
        });
    });
});