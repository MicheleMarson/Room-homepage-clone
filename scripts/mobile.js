const menu = document.querySelector(".slidebox__mobileNav")
const navbar = document.querySelector(".slidebox__nav")
const bar = document.querySelector(".fa-bars")
const close = document.querySelector(".fa-times")
const links = document.querySelector(".slidebox__links")

close.style.display = "none"

menu.addEventListener("click", () => {
  if(navbar.classList.contains("active")){
    navbar.classList.remove("active")
    close.style.display = "none"
    bar.style.display = "block"
  }else{
    navbar.classList.add("active")
    close.style.display = "block"
    bar.style.display = "none"
  }
})

// -------prevent scrolling of fixed element ---
links.addEventListener("touchmove", (e) => {
  e.preventDefault()
})