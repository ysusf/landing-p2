window.addEventListener("load", function () {
  //----------------------nav builder-----------------------------

  const navbar = document.getElementById("navbar__list");

  const sections = document.querySelectorAll("section");

  const navItems = [];

  sections.forEach((section) => {
    // declare varialbles-**************************************
    const id = section.id;
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.classList.add("menu__link");

    link.textContent = section.getAttribute("data-nav");

    listItem.appendChild(link);
    navbar.appendChild(listItem);

    link.href = `#${id}`;

    navItems.push({ link, section });
  });

  //-------------------------Navbar--------------------------

  let timeoutId;
  window.addEventListener("scroll", () => {
    clearTimeout(timeoutId);
    navbar.classList.remove("hidden");

    timeoutId = setTimeout(() => navbar.classList.add("hidden"), 2000);
  });

  //-------------------------active state--------------------------

  window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        section.classList.add("your-active-class");

        navItems[index].link.classList.add("active");
      } else {
        n;
        section.classList.remove("your-active-class");

        navItems[index].link.classList.remove("active");
      }
    });
  });
  //-------------------------scroll to top btn--------------------------

  const ToTopBtn = document.getElementById("scrollToTopBtn");
  //add show class
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      ToTopBtn.classList.add("show");
    } else {
      ToTopBtn.classList.remove("show");
    }
  });
  //btn action
  ToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
