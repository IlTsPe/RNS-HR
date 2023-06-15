/* Scroll */

const anchor = document.querySelectorAll(".js-anchor");

anchor.forEach(anc => {
  anc.addEventListener("click", function (e) {
    e.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);
    window.scroll({
      top: elem.offsetTop,
      behavior: "smooth",
    });
  });
});
