const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Intersection Observer pentru animatii de scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Observam toate elementele care trebuie animate
document.querySelectorAll('.hero-content, .portfolio-grid, .card, .evolution-step, .about-card').forEach(element => {
    observer.observe(element);
});

// Adaugam delay pentru carduri
const cards = document.querySelectorAll('.project-card');
cards.forEach((card, index) => {
    card.style.setProperty('--delay', index.toString());
    observer.observe(card);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        nav?.classList.remove('active');
        menuToggle?.setAttribute('aria-expanded', 'false');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Modal handling
const modal = document.getElementById('contact-modal');
const contactBtn = document.getElementById('open-contact-modal');
const closeBtn = document.querySelector('.close-modal');
const contactForm = document.getElementById('contact-form');
const contactSubject = document.getElementById('contact-subject');

if (contactForm && contactSubject) {
    contactForm.addEventListener('submit', () => {
        const name = contactForm.elements.namedItem('name').value.trim();
        contactSubject.value = name
            ? `Mesaj nou de la ${name} — Nikaz Web Studio`
            : 'Mesaj nou — Nikaz Web Studio';
    });
}

if (contactBtn && modal) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
}

if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

/* Parallax effect for hero mockup */
let ticking = false;
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const laptop = document.querySelector('.laptop');
            const phone = document.querySelector('.phone');
            if (laptop) laptop.style.transform = `translate(calc(-22px + ${mouseX}px), calc(-10px + ${mouseY}px)) rotateY(-7deg) rotateX(2deg)`;
            if (phone) phone.style.transform = `rotate(5deg) translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)`;
            ticking = false;
        });
        ticking = true;
    }
});

// Efecte pentru butoane
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 15px 30px rgba(0, 119, 255, 0.3)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 12px 35px rgba(0, 119, 255, 0.25)';
    });
});
