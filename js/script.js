
document.addEventListener("DOMContentLoaded", () => {
  // 1. Fade-in animation for elements with .fade-in
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    // Staggered delay so elements come in one after another
    setTimeout(() => {
      el.classList.add("show");
    }, index * 200);
  });

  // 2. Contact form interaction
  const contactForm = document.getElementById("contactForm");
  const result = document.getElementById("contactResult");

  // Only run this logic on pages that actually have the form
  if (contactForm && result) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Stop the page from refreshing

      // Grab values from inputs
      const name = document.getElementById("cname").value.trim();
      const email = document.getElementById("cemail").value.trim();
      const msg = document.getElementById("cmsg").value.trim();

      // Basic validation check
      if (!name || !email || !msg) {
        result.textContent = "Please fill out all fields before sending.";
        result.classList.remove("text-success");
        result.classList.add("text-warning");
        return;
      }

      // Success message
      result.textContent = `Thanks, ${name}! We’ll get back to you at ${email} within 1–2 business days.`;
      result.classList.remove("text-warning");
      result.classList.add("text-success");

      // Clear form inputs after sending
      contactForm.reset();
    });
  }
});
