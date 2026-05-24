console.log("Portfolio Website Loaded Successfully 🚀");

const text = [
    "Full Stack AI Engineer",
    "Web Developer",
    "React Developer",
    "AI Enthusiast"
];

let speed = 100;

const textElements = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

    if(charIndex < text[textIndex].length){

        textElements.innerHTML += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, speed);

    }
    else{

        setTimeout(eraseText, 1000);

    }

}

function eraseText(){

    if(textElements.innerHTML.length > 0){

        textElements.innerHTML =
        textElements.innerHTML.slice(0,-1);

        setTimeout(eraseText, 50);

    }
    else{

        textIndex++;

        if(textIndex >= text.length){

            textIndex = 0;

        }

        charIndex = 0;

        setTimeout(typeWriter, 500);

    }

}

window.onload = typeWriter;

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    sections.forEach((section)=>{

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});

const toggleBtn =
document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("light-mode");

});