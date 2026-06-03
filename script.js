const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");

ham.addEventListener("click",()=>{
    ham.classList.toggle("active");
    menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".st_load");
    const mainContent = document.querySelector("main");

    if (sessionStorage.getItem("visited")) {
        if (loader) {
            loader.style.display = "none";
        }
        if (mainContent) {
            mainContent.style.opacity = "1";
            mainContent.style.animation = "none";
        }
    } else {
        if (loader) {
            sessionStorage.setItem("visited", "true");
        }
    }
});

ScrollReveal({ reset: false, distance: "30px", duration:2000 });
ScrollReveal().reveal('h1', { delay: 100, origin: "top" });
ScrollReveal().reveal('.border', { delay: 100, origin: "top" });
ScrollReveal().reveal('img', { delay: 100, origin: "left" });
ScrollReveal().reveal('.back', { delay: 30, origin: "left" });
ScrollReveal().reveal('.ham', { delay: 50, origin: "right" });
ScrollReveal().reveal('p', { delay: 10, origin: "left" });
ScrollReveal().reveal('h3', { delay: 15, origin: "left" });
ScrollReveal().reveal('.ab_01', { delay: 15, origin: "left" });