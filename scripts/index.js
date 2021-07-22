import {data} from "./data.js"


// ----------------btn--------------------------------
const prevBtn = document.querySelector(".slidebox__prev")
const nextBtn = document.querySelector(".slidebox__next")
// ----------------btn--------------------------------


// ----------------elements----------------------------
const slideInfo = document.querySelector(".slidebox__info")
const img = document.querySelector(".slidebox__img")
const title = document.querySelector(".slidebox__title")
const desc = document.querySelector(".slidebox__text")
let current = 0
let imgScreen
window.addEventListener("load",() => {
    imgScreen = window.innerWidth >= 500 ? "desktop" : "mobile"
    showData(current)
  }
)
// ----------------elements----------------------------


// ---------------events----------------------
prevBtn.addEventListener("click", () => {
  opacityBg()
  current--
  if(current < 0){
    current = data.length - 1
  }
  showData(current)
})

nextBtn.addEventListener("click", () => {
  opacityBg()
  current++
  if(current > data.length - 1){
    current = 0
  }
  showData(current)
})
// ---------------events----------------------

// -------------------show data---------------------------
const showData = (i) => {
  img.src = `./images/${imgScreen}-image-hero-${i + 1}.jpg`
  desc.textContent = data[i].desc
  title.textContent = data[i].title
}
// -------------------show data---------------------------


// ------------------on click animation--------------------
const opacityBg = () => {
  img.style.opacity = .4
  slideInfo.style.opacity = .4
  setTimeout(() => {
    img.style.opacity = 1
    slideInfo.style.opacity = 1
  }, 300)
}
// ------------------on click animation--------------------
