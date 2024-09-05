AOS.init();

function toggleMenu() {
    document.querySelector('.dropdown').classList.toggle('active');
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 200);
    });
}

// Trigger animation when the skills section comes into view
const skillsSection = document.querySelector('.skills-grid');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);


document.addEventListener('DOMContentLoaded', () => {
    // Select all skill items
    const skillItems = document.querySelectorAll('.skill-item');

    // Add click event listener to each skill item
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the 'active' class on the clicked skill item
            item.classList.toggle('active');
        });
    });
});


