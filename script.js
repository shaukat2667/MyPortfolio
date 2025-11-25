// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .contact-item');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const statusMessage = document.createElement('p');
    statusMessage.className = 'form-status';
    contactForm.appendChild(statusMessage);

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);

        const validationErrors = validateContactForm(formData);
        if (validationErrors.length) {
            statusMessage.textContent = validationErrors.join(' ');
            statusMessage.classList.remove('success');
            statusMessage.classList.add('error');
            return;
        }
        
        statusMessage.textContent = 'Sending...';
        statusMessage.classList.remove('error', 'success');

        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                statusMessage.textContent = 'Thank you! Your message has been sent.';
                statusMessage.classList.add('success');
                this.reset();
            } else {
                return response.json().then(data => {
                    throw new Error(data.errors?.map(error => error.message).join(', ') || 'Failed to send message.');
                });
            }
        }).catch(error => {
            statusMessage.textContent = error.message || 'There was an error sending your message. Please try again.';
            statusMessage.classList.add('error');
        });
    });
}

function validateContactForm(formData) {
    const errors = [];
    const name = (formData.get('name') || '').trim();
    const email = (formData.get('email') || '').trim();
    const subject = (formData.get('subject') || '').trim();
    const message = (formData.get('message') || '').trim();

    if (name.length < 2) {
        errors.push('Please enter your full name.');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push('Please enter a valid email address.');
    }

    if (subject.length < 3) {
        errors.push('Subject must be at least 3 characters.');
    }

    if (message.length < 10) {
        errors.push('Message must be at least 10 characters.');
    }

    return errors;
}

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = `${prefix}${Math.floor(start)}${suffix}`;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = `${prefix}${target}${suffix}`;
        }
    }
    
    updateCounter();
}

// Initialize counter animations when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.dataset.target, 10);
                if (!isNaN(target) && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat, target, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}
