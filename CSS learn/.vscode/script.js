const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});



document.getElementById("email").addEventListener("click", () => {
  console.log("Email link clicked");
});

document.getElementById("phone").addEventListener("click", () => {
  console.log("Phone number clicked");
});

document.getElementById("whatsapp").addEventListener("click", () => {
  console.log("WhatsApp/Telegram link clicked");
});

 