// Floating WhatsApp button click
document.getElementById("whatsapp-btn").addEventListener("click", function() {
    window.open("https://wa.me/213555555555", "_blank");
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
