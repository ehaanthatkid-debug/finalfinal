
document.addEventListener("DOMContentLoaded", () => {
  
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    
    setTimeout(() => {
      el.classList.add("show");
    }, index * 200);
  });

  
  const contactForm = document.getElementById("contactForm");
  const result = document.getElementById("contactResult");

  if (contactForm && result) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); 

      
      const name = document.getElementById("cname").value.trim();
      const email = document.getElementById("cemail").value.trim();
      const msg = document.getElementById("cmsg").value.trim();

    
      if (!name || !email || !msg) {
        result.textContent = "Please fill out all fields before sending.";
        result.classList.remove("text-success");
        result.classList.add("text-warning");
        return;
      }

      result.textContent = `Thanks, ${name}! We’ll get back to you at ${email} within 1–2 business days.`;
      result.classList.remove("text-warning");
      result.classList.add("text-success");

      
      contactForm.reset();
    });
  }
});
