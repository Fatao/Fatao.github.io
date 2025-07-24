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

  const form = this;
  const formData = new FormData(form);
  const responseEl = document.getElementById("response");

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbwRvzjFPKdPGG8fEpLSPQtTQYB4XOK6nRkLA0Gst-xoti2IY2r1JTxk4rwliYWrIfu1/exec", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (data.result === "success") {
      responseEl.style.color = "green";
      responseEl.innerText = "✅ Message sent successfully!";
      form.reset();
    } else {
      throw new Error("Unexpected response");
    }
  } catch (err) {
    console.error("❌ Form error:", err);
    responseEl.style.color = "red";
    responseEl.innerText = "⚠️ Error sending message. Please try again later.";
  }
});
// Terminal simulation for loading effect

const terminalLines = [
  "Initializing system scan...",
  "Target acquired: 192.168.1.1",
  "System fingerprint matched: localhost",
  "Launching Nmap aggressive scan...",
  "Bypassing firewall rules...",
  "Launching port scan...",
  "Deploying payloads...",
  "Dumping credentials...",
  "Exfiltrating data via covert channel...",
  "Leaving no logs behind...",
  "Bootstrapping post-exploit toolkit...",
  "Root shell initialized.",
  "Session persisted.",
  "Access granted. Welcome to my Digital Space ! ! !"
];

const terminalEl = document.getElementById("terminal");
const overlay = document.getElementById("terminal-overlay");
const mainContent = document.getElementById("main-content");
let line = 0;

function typeLine(text, i = 0) {
  if (i < text.length) {
    terminalEl.innerHTML += text.charAt(i);
    setTimeout(() => typeLine(text, i + 1), 30);
  } else {
    terminalEl.innerHTML += "<br>";
    line++;
    if (line < terminalLines.length) {
      setTimeout(() => typeLine(terminalLines[line]), 5); // 1s delay between lines
    } else {
      // Finished: Hide overlay, show site
      setTimeout(() => {
        overlay.style.display = "none";
        mainContent.style.display = "block";
      }, 2000);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typeLine(terminalLines[line]);
});
