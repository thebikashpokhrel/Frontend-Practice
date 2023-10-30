const options = {
  rootMargin: `-20% 0px -80%`,
};

const links = document.querySelectorAll(".navbar__item a");
links.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const linkTo = el.dataset.link;
    const sec = document.getElementById(linkTo);
    console.log(sec.getBoundingClientRect().top + window.scrollY);
    window.scrollTo({
      top: sec.getBoundingClientRect().top + window.scrollY - 60,
      behavior: "smooth",
    });
  });
});

var observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`Current active: ${entry.target.id}`);
      links.forEach((el) => {
        if (el.parentElement.classList.contains("active"))
          el.parentElement.classList.remove("active");

        if (el.dataset.link === entry.target.id)
          el.parentElement.classList.add("active");
      });
    }
  });
}, options);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  observer.observe(section);
});
