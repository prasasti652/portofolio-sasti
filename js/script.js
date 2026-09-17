// Menu mobile
const menuButton = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Tutup menu setelah memilih menu
document.querySelectorAll(".nav-menu a").forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// Form Contact
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Terima kasih, " +
        name +
        "! Pesan kamu berhasil dikirim."
    );

    contactForm.reset();

});