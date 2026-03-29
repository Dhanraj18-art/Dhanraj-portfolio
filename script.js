// =============================
// Typing Animation (Home Page)
// =============================
const textArray = ["Dhanraj Y", "Embedded Engineer", "IoT Developer", "Web Developer"];
let textIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function typeEffect() {
    if (!typingElement) return;

    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(typeEffect, 200);
    }
}

typeEffect();


// =============================
// Scroll Reveal Animation
// =============================
const revealElements = document.querySelectorAll(".slide-up, .slide-left, .zoom-in");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translate(0,0) scale(1)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// =============================
// Active Navbar Highlight
// =============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === current + ".html") {
            link.classList.add("active");
        }
    });
});


// =============================
// Smooth Page Transition
// =============================
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.href && this.href.includes(".html")) {
            e.preventDefault();
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        }
    });
});


// =============================
// Button Ripple Effect
// =============================
const buttons = document.querySelectorAll(".btn-orange");

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});


// =============================
// Image Tilt Effect
// =============================
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let rotateX = (y / 10) - 10;
        let rotateY = (x / 10) - 10;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});