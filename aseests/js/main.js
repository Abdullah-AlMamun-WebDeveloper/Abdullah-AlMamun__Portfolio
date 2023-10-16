


var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});








//////// Scroll Reveal Animation////////

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true Animation repeat
})

sr.reveal('.home-data, .home-social, .contact-container, .footer-container')
sr.reveal('.home-image', {origin: 'bottom'})
sr.reveal('.about-data, .skills-data', {origin: 'left'})
sr.reveal('.about-image, .skills-content', {origin: 'right'})
sr.reveal('.services-card, .projects-card', {interval: 100})











