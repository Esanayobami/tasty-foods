// menu for mobile
const navMenu = document.getElementById("nav_menu")
    navToggle = document.getElementById("open_menu"),
    navClose  = document.getElementById("close_menu")
    

if(navToggle){
    navToggle.addEventListener("click" , () =>{
        navMenu.classList.add("open-nav-menu")
    })
}
if(navClose){
    navClose.addEventListener("click" , ()=>{
        navMenu.classList.remove("open-nav-menu")
    })
}

const navLink = document.querySelectorAll("#nav_item")

const linkAction = () =>{
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("open-nav-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// scroll up button 

const scrollUp = () =>{
    const scrollUp = document.getElementById("scroll-up")
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
   this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

// this would change the background header once the scroll is greater than 50 viewport width
const scrollHeader = () =>{
    const header = document.getElementById('home')
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll reveal 

ScrollReveal().reveal(`.home-title, .about-title, .offer-title ,.special-title,.app-title,.contact-title`)
ScrollReveal().reveal(`.home-description, .about-subtitle, .offer-description ,.special-subtitle,.app-subtitle,.contact-subtitle`, {delay:500})
ScrollReveal().reveal(`.home-button , .about-button,.contact-button` , {delay:600 , origin:"bottom"})
ScrollReveal().reveal(`.home-section-second-column` , {delay:700})
ScrollReveal().reveal(`.about-section-first-column,.second-app-subsection` , {origin:"left" , delay:800})
ScrollReveal().reveal(`.about-section-second-column` , {origin:"right" , delay:800})
ScrollReveal().reveal(`.offer-first-column, .offer-second-column,.offer-third-column` , {interval:100, delay:900})
ScrollReveal().reveal(`.first-special-menu,.second-special-menu,.third-special-menu,.fourth-special-menu,.app-play-store` ,{interval:100, delay:900})
ScrollReveal().reveal(`app-description,.about-description,.contact-description` , {interval:100, origin:'bottom'})
ScrollReveal().reveal(`.first-footer-subsection,.second-footer-subsection,.third-footer-subsection,.fourth-footer-subsection`, {interval:100 ,delay:200})