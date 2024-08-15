import './style/main.scss'

const elBtnOpenSidebar = document.querySelector('#openSidebar')
const elBtnCloseSidebar = document.querySelector('#closeSidebar')
const elSidebar = document.querySelector('#sidebarOverlay')
const elShadingBackground = document.querySelector('#shadingBackground')
const elsNavigateShowToggle = document.querySelectorAll('.navbar__show-toggle')

elBtnOpenSidebar?.addEventListener('click', () => {
  elSidebar.classList.toggle('sidebar--show')
  elShadingBackground.classList.toggle('shading-background--show')
})

elBtnCloseSidebar?.addEventListener('click', () => {
  elSidebar.classList.toggle('sidebar--show')
  elShadingBackground.classList.toggle('shading-background--show')
})

elsNavigateShowToggle?.forEach(el => {
  el.addEventListener('click', () => {
    const elList = el.previousElementSibling
    el.classList.toggle('show-toggle--active')
    elList.classList.toggle('navbar__list--show-all')

    if (el.classList.contains('show-toggle--active')) {
      el.lastElementChild.textContent = 'Скрыть'
    } else {
      el.lastElementChild.textContent = 'Показать все'
    }
  })
})

let mySwiper

function initSwiper() {
  if (window.innerWidth < 768) {
    if (!mySwiper) {
      mySwiper = new Swiper('.mySwiper', {
        spaceBetween: 24,
        width: 272,
        height: 280,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      })
    }
  } else {
    if (mySwiper) {
      mySwiper.destroy(true, true)
      mySwiper = null
    }
  }
}

window.addEventListener('resize', initSwiper)
initSwiper()
