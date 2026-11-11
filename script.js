(function () {
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (navToggle && mobileMenu) {
    const iconOpen = navToggle.querySelector("[data-icon-open]");
    const iconClose = navToggle.querySelector("[data-icon-close]");

    function setMenuState(isOpen) {
      mobileMenu.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? "none" : "block";
        iconClose.style.display = isOpen ? "block" : "none";
      }
    }

    navToggle.addEventListener("click", function () {
      const nextState = !mobileMenu.classList.contains("open");
      setMenuState(nextState);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
        setMenuState(false);
        navToggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && mobileMenu.classList.contains("open")) {
        setMenuState(false);
      }
    });
  }

  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "404.html";
    });
  }
})();
