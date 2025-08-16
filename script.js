// Log to confirm JS is loaded
console.log("Meuble Maison showroom loaded!");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Floating WhatsApp button
const whatsappNumber = "213658038620"; // Your phone with country code
const btn = document.createElement("a");
btn.href = `https://wa.me/${whatsappNumber}`;
btn.target = "_blank";
btn.innerHTML = "💬";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.background = "#25D366";
btn.style.color = "white";
btn.style.fontSize = "24px";
btn.style.padding = "12px 16px";
btn.style.borderRadius = "50%";
btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
btn.style.zIndex = "999";
btn.style.textDecoration = "none";
btn.style.textAlign = "center";
btn.style.lineHeight = "1";
btn.style.transition = "transform 0.3s ease";
btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.1)");
btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1.0)");
document.body.appendChild(btn);
