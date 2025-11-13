
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const msg = document.getElementById("cmsg").value.trim();
  const result = document.getElementById("contactResult");

  if (name && email && msg) {
    result.style.color = "lightgreen";
    result.textContent = `Thanks ${name}, your message has been sent successfully!`;
    this.reset();
  } else {
    result.style.color = "tomato";
    result.textContent = "Please fill out all fields before sending.";
  }
});
