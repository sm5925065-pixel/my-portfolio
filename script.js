// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.background = window.scrollY > 50 ? '#000' : '#0a0a0a';
    nav.style.boxShadow = window.scrollY > 50 ? '0 5px 20px rgba(0,0,0,0.8)' : 'none';
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent to the developer.');
    this.reset();
});
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ሊንኮቹ ሲነኩ ሜኑው እንዲዘጋ
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
