document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

       
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

       
        console.log("Form Data:", data);

        
        form.reset();
    });
});


AOS.init();

// Navbar hide on scroll down, show on scroll up
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.style.top = '-80px'; // Adjust based on your navbar height
    } else {
        // Upscroll
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});


document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});

function hamburg() {
    document.querySelector('.dropdown').classList.add('show');
    document.querySelector('.hamburg').style.display = 'none';
}

function cancel() {
    document.querySelector('.dropdown').classList.remove('show');
    document.querySelector('.hamburg').style.display = 'block';
}
