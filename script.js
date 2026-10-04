function entrar() {
    const intro = document.querySelector(".intro");
    const mainContent = document.querySelector("#main-content");

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        mainContent.style.display = "block";

        setTimeout(() => {
            mainContent.style.opacity = "1";
            const musicSection = document.querySelector(".music-section");
            musicSection.style.opacity = "1";
            musicSection.style.transform = "translateY(0)";
        }, 50);
    }, 800);
}
function abrirCarta() {
    document.body.classList.add("page-transition");

    setTimeout(() => {
        window.location.href = "carta.html";
    }, 700);
}
