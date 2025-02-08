

window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > window.innerHeight - 50) {
        navbar.classList.remove("transparent");
        navbar.classList.add("solid");
    } else {
        navbar.classList.remove("solid");
        navbar.classList.add("transparent");
    }
});