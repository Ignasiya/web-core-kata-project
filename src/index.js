import Swiper from 'swiper/bundle'
import 'swiper/css'
import 'swiper/css/pagination'
import './style/main.scss'

const elBtnOpenSidebar = document.querySelector('#openSidebar')
const elBtnCloseSidebar = document.querySelector('#closeSidebar')
const elSidebar = document.querySelector('#sidebarOverlay')

const elsBtnOpenFeedback = document.querySelectorAll('#openFeedback')
const elBtnCloseFeedback = document.querySelector('#closeFeedback')
const elFeedback = document.querySelector('#feedbackModal')

const elsBtnOpenCall = document.querySelectorAll('#openCall')
const elBtnCloseCall = document.querySelector('#closeCall')
const elCall = document.querySelector('#callModal')

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

elsBtnOpenFeedback.forEach(el => {
  el.addEventListener('click', () => {
    elFeedback.showModal()

    if (elSidebar.classList.contains('sidebar--show')) {
      elSidebar.classList.remove('sidebar--show')
      elShadingBackground.classList.toggle('shading-background--show')
    }
  })
})

elBtnCloseFeedback.addEventListener('click', () => {
  elFeedback.close()
})

elsBtnOpenCall.forEach(el => {
  el.addEventListener('click', () => {
    elCall.showModal()

    if (elSidebar.classList.contains('sidebar--show')) {
      elSidebar.classList.remove('sidebar--show')
      elShadingBackground.classList.toggle('shading-background--show')
    }
  })
})

elBtnCloseCall.addEventListener('click', () => {
  elCall.close()
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

let swiperInstances = []

function initSwiper() {
  const swiperElements = document.querySelectorAll('.swiper')

  if (window.innerWidth < 768) {
    swiperElements.forEach((swiperEl, index) => {
      if (!swiperInstances[index]) {
        swiperInstances[index] = new Swiper(swiperEl, {
          spaceBetween: 24,
          width: 272,
          height: 280,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        })
      }
    })
  } else {
    swiperInstances.forEach((swiper, index) => {
      if (swiper) {
        swiper.destroy(true, true)
        swiperInstances[index] = null
      }
    })
  }
}

window.addEventListener('resize', initSwiper)
initSwiper()
