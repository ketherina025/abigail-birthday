/* =========================================
   ABIGAIL BIRTHDAY WEBSITE
   JAVASCRIPT - PARTE 1
========================================= */


/* =========================
   LOADING SCREEN
========================= */


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");


    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "1s";


        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);


    }, 1500);


});



/* =========================
   START BUTTON
========================= */


const startButton = document.getElementById("startButton");


if(startButton){

    startButton.addEventListener("click", () => {


        document.querySelector("#story")
        .scrollIntoView({

            behavior:"smooth"

        });


    });


}




/* =========================
   COUNTDOWN
========================= */


function updateCountdown(){


    const birthday =
    new Date("July 24, 2026 00:00:00")
    .getTime();



    const now =
    new Date()
    .getTime();



    const distance =
    birthday - now;



    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );



    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );



    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );



    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );



    document.getElementById("days")
    .textContent = days;



    document.getElementById("hours")
    .textContent = hours;



    document.getElementById("minutes")
    .textContent = minutes;



    document.getElementById("seconds")
    .textContent = seconds;


}



setInterval(updateCountdown,1000);
/* =========================
   CREATE STARS
========================= */


const starsContainer =
document.getElementById("stars");


function createStars(){


    if(!starsContainer) return;



    for(let i = 0; i < 80; i++){


        const star =
        document.createElement("div");



        star.classList.add("star");



        star.style.left =
        Math.random() * 100 + "%";



        star.style.top =
        Math.random() * 100 + "%";



        star.style.animationDelay =
        Math.random() * 5 + "s";



        star.style.opacity =
        Math.random();



        starsContainer.appendChild(star);


    }


}



createStars();




/* =========================
   CREATE FLOATING PARTICLES
========================= */


const particles =
document.getElementById("particles");



function createParticles(){


    if(!particles) return;



    for(let i = 0; i < 30; i++){


        const particle =
        document.createElement("div");



        particle.classList.add("particle");



        particle.style.left =
        Math.random() * 100 + "%";



        particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";



        particle.style.animationDelay =
        Math.random() * 5 + "s";



        particles.appendChild(particle);


    }


}



createParticles();




/* =========================
   SCROLL ANIMATION
========================= */


const elements =
document.querySelectorAll(
".card, .gallery-grid img, .letter"
);



function revealOnScroll(){


    const trigger =
    window.innerHeight * 0.85;



    elements.forEach(element => {


        const position =
        element.getBoundingClientRect()
        .top;



        if(position < trigger){


            element.classList.add("show");


        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();




/* =========================
   PARALLAX CLOUD EFFECT
========================= */


window.addEventListener(
"mousemove",
(event)=>{


    const clouds =
    document.querySelectorAll(".cloud");



    const x =
    event.clientX / window.innerWidth;



    clouds.forEach((cloud,index)=>{


        const movement =
        (x - 0.5) *
        (20 + index * 15);



        cloud.style.transform =
        translateX(${movement}px);


    });



});
/* =========================
   LETTER EFFECT
========================= */


const letter =
document.querySelector(".letter");


if(letter){


    letter.addEventListener(
        "mouseenter",
        ()=>{


            letter.style.transform =
            "translateY(-10px)";


            letter.style.transition =
            "0.5s";


        }
    );



    letter.addEventListener(
        "mouseleave",
        ()=>{


            letter.style.transform =
            "translateY(0)";


        }
    );


}




/* =========================
   MUSIC CONTROL
========================= */


const music =
document.querySelector("audio");



const start =
document.getElementById("startButton");



if(start && music){


    start.addEventListener(
        "click",
        ()=>{


            music.volume = 0.5;


            music.play()
            .catch(()=>{


                console.log(
                "La reproducción necesita interacción del usuario."
                );


            });


        }
    );


}




/* =========================
   YEAR UPDATE
========================= */


const footerYear =
document.querySelector("footer p:last-child");



if(footerYear){


    const year =
    new Date()
    .getFullYear();



    footerYear.innerHTML =
    24 de julio ❤️ ${year};


}




/* =========================
   RANDOM FIREFLY EFFECT
========================= */


function createFireflies(){


    const hero =
    document.querySelector(".hero");



    if(!hero) return;



    for(let i = 0; i < 15; i++){


        const firefly =
        document.createElement("div");



        firefly.classList.add(
            "particle"
        );



        firefly.style.left =
        Math.random()*100 + "%";



        firefly.style.top =
        Math.random()*100 + "%";



        firefly.style.animationDuration =
        (3 + Math.random()*5)+"s";



        hero.appendChild(
            firefly
        );


    }


}



createFireflies();




/* =========================
   SMOOTH NAVIGATION
========================= */


document
.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener(
        "click",
        function(event){


            const target =
            document.querySelector(
                this.getAttribute("href")
            );



            if(target){


                event.preventDefault();



                target.scrollIntoView({

                    behavior:"smooth"

                });


            }


        }
    );


});




/* =========================
   CONSOLE MESSAGE
========================= */


console.log(
`
✨ Nahomy Birthday Website ✨

Hecho con cariño desde Brasil ❤️

Para Nahomy Abigail Pon Blanco
`
);

updateCountdown();
