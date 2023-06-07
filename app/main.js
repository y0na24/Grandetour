const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.nav__list')
const navLinks = document.querySelectorAll('.nav__list-item')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  navMenu.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('hidden')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burger.classList.remove('active')
    navMenu.classList.remove('active')
    overlay.classList.remove('active')
    document.body.classList.remove('hidden')
  })
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 690) {
    burger.classList.remove('active')
    navMenu.classList.remove('active')
    overlay.classList.remove('active')
    document.body.classList.remove('hidden')
  }
})
