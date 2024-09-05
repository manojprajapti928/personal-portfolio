
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}




AOS.init({
    offset: 200,
    duration: 1000,
    easing: 'ease-in-out',
    delay: 100,
});