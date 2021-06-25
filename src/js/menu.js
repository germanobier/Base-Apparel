let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

const overlay = document.querySelector(".overlay")

menuToggle.addEventListener("click", () => {
    console.log(show)
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)

    if (show) {
      overlay.classList.toggle("on")
    } else {
      overlay.classList.remove("on")
    }

    show = !show;
})

overlay.addEventListener("click", () => {
  console.log('detectou')
  overlay.classList.remove("on")
  menuSection.classList.remove("on")

  show = !show

  document.body.style.overflow = show ?  "initial" : "hidden"
})