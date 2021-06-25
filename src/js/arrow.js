window.scrollTo(0, 0)

const arrow = document.querySelector('.arrow')

arrow.addEventListener("click", () => {
  // window.scrollTo(0, document.body.scrollHeight)
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
})