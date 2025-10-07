

document.addEventListener("DOMContentLoaded", () => {
    const avatar = document.querySelector(".cv__header-avatar-img");
    const navLinks = document.querySelectorAll(".cv__nav a");
    const sections = document.querySelectorAll("section");
  
    // 1. Thêm glow effect cho avatar khi load
    if (avatar) {
      setTimeout(() => {
        avatar.classList.add("cv__header-avatar-img--glow");
      }, 300); // delay nhẹ để trông tự nhiên
    }
  
    // 2. Smooth scroll khi click nav
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: "smooth"
          });
        }
      });
    });
  
    // 3. Highlight nav khi scroll
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
  
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  });
  