const buttons = document.querySelectorAll(".btn-ghost");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const gallery = document.querySelector("#galeria");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  });
});
