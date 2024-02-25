const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removingClasses();
    panel.classList.add("active");
  });
});

function removingClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
