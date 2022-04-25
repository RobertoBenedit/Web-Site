const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const bloque = document.querySelectorAll(".bloque");
const h2 = document.querySelectorAll(".h2");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};

const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 200,
    reset: true,
});

sr.reveal(".text", { delay: 200, origin: "bottom" });
sr.reveal(".form-container form", { delay: 200, origin: "left" });
sr.reveal(".heading", { delay: 200, origin: "top" });
sr.reveal(".ride-container .box", { delay: 150, origin: "bottom" });
sr.reveal(".services-container .box", { delay: 200, origin: "left" });
sr.reveal(".about-container .box", { delay: 200, origin: "top" });
sr.reveal(".reviews-container", { delay: 200, origin: "top" });
sr.reveal(".newsletter .box", { delay: 200, origin: "top" });

// Cuando CLICK en h2,
// QUITAR la clase activo de TODOS los bloque
// Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h2.forEach((cadaH2, i) => {
    // Asignando un CLICK a cada h2
    h2[i].addEventListener("click", () => {
        // Recorrer TODOS los bloque
        if (bloque[i].classList.contains("activo")) {
            bloque[i].classList.remove("activo");
        } else {
            bloque[i].classList.add("activo");
        }
    });
});


