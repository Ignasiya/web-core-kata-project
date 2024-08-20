import './style/main.scss'
import { SliderGallery } from './scripts/swiper'

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

const swiperElements = document.querySelectorAll('.swiper')

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

swiperElements.forEach((swiperEl, index) => {
  if (!swiperInstances[index]) {
    let widthEl = 272
    if (swiperEl.classList.contains('tablebar')) {
      widthEl = 292
    }

    swiperInstances[index] = new SliderGallery({
      el: swiperEl,
      breakpoint: 'md',
      sliderOptions: {
        spaceBetween: 24,
        width: widthEl,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    })
  }
})
