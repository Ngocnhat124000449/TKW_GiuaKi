// script.js — CV Nguyễn Ngọc Nhật
// Quản lý active nav, smooth scroll, giữ trang load ở đầu

// Khi load trang => luôn ở đầu
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Smooth scroll cho nav links
const navLinks = document.querySelectorAll(".cv__nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Highlight active nav khi scroll
const sections = document.querySelectorAll(".cv__section, .cv__header");
const options = { root: null, threshold: 0.4 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      if (id) {
        document.querySelectorAll(".cv__nav-link").forEach(link => {
          link.classList.remove("is-active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("is-active");
          }
        });
      }
    }
  });
}, options);

sections.forEach(section => observer.observe(section));

// Optional: hiệu ứng click nhỏ (ripple effect)
navLinks.forEach(link => {
  link.addEventListener("click", function(e){
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = e.clientX - link.getBoundingClientRect().left + "px";
    ripple.style.top = e.clientY - link.getBoundingClientRect().top + "px";
    link.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

