let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const overlay = document.querySelector(".overlay")

menuToggle.addEventListener("click", () => {
    document.body.style.overflowY = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)

    if (show) {
      overlay.classList.toggle("on")
    } else {
      overlay.classList.remove("on")
    }

    show = !show;
})

overlay.addEventListener("click", () => {
  overlay.classList.remove("on")
  menuSection.classList.remove("on")

  show = !show
  document.body.style.overflowY = show ?  "initial" : "hidden"
})