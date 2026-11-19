const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}

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
