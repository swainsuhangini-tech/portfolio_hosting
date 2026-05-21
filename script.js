// NAVBAR SHADOW EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.classList.add("nav-scrolled");
    }
    else{

        navbar.classList.remove("nav-scrolled");
    }

});



// TYPING EFFECT

const textArray = [

    "Frontend Developer",
    "Creative Learner",
    "Web Enthusiast"

];

const typingText = document.querySelector(".typing-text");

let arrayIndex = 0;

let charIndex = 0;


function typeEffect(){

    if(charIndex < textArray[arrayIndex].length){

        typingText.textContent +=
        textArray[arrayIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);
    }
    else{

        setTimeout(eraseEffect, 1500);
    }

}


function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        textArray[arrayIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);
    }
    else{

        arrayIndex++;

        if(arrayIndex >= textArray.length){

            arrayIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }

}


document.addEventListener("DOMContentLoaded", () => {

    setTimeout(typeEffect, 500);

});



// REVEAL ELEMENTS

const revealElements = document.querySelectorAll(

    ".about-box, .skill-card, .project-card, .contact-box"

);


function revealOnScroll(){

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active-reveal");
        }

    });

}


window.addEventListener("scroll", revealOnScroll);



// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");
        }

    });

});



