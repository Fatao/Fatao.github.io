// Welcome banner in console
console.log(
  "%c👨‍💻 Welcome to Abdul Fatao Abdulrahman’s personal website!",
  "color: #39ff14; font-weight: bold; font-family: 'Fira Code', monospace;"
);

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Smooth scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const sections = document.querySelectorAll('main section');

  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const height = section.offsetHeight;
    if (scrollPos >= top && scrollPos < top + height) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const responseEl = document.getElementById("response");

  if (!name || !email || !message) {
    responseEl.style.color = "red";
    responseEl.innerText = "All fields are required.";
    return;
  }

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbwRvzjFPKdPGG8fEpLSPQtTQYB4XOK6nRkLA0Gst-xoti2IY2r1JTxk4rwliYWrIfu1/exec", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();
    if (data.result === "success") {
      responseEl.style.color = "green";
      responseEl.innerText = "✅ Message sent successfully!";
      this.reset();
    } else {
      throw new Error("Unexpected response format.");
    }
  } catch (err) {
    console.error("❌ Form error:", err);
    responseEl.style.color = "red";
    responseEl.innerText = "⚠️ Error sending message. Please try again later.";
  }
});
