import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import * as sounds from './sounds.js'

export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }

    actions[action]()
  })
}

export function increaseMinutesByFive() {
  el.increaseMinutesButton.addEventListener('click', () => {
    if (el.minutes.textContent >= 60) {
      return
    }
    el.minutes.textContent = Number(el.minutes.textContent) + 5
  })
}

export function decreaseMinutesByFive() {
  el.decreaseMinutesButton.addEventListener('click', () => {
    if (el.minutes.textContent <= 5) {
      return
    }
    el.minutes.textContent = Number(el.minutes.textContent) - 5
    if (el.minutes.textContent < 10) {
      el.minutes.textContent = el.minutes.textContent.padStart(2, '0')
    }
    
  })
}

export function playForestMusic() {
   el.forestBtn.addEventListener('click', () => {
     state.isMute = el.forestBtn.classList.toggle('music-on')

     if (state.isMute) {
      sounds.forest.play()
      return
     }

     sounds.forest.pause()
  })
}

export function playRainMusic() {
  el.rainBtn.addEventListener('click', () => {
    state.isMute = el.rainBtn.classList.toggle('music-on')

    if (state.isMute) {
     sounds.rain.play()
     return
    }

    sounds.rain.pause()
 })
}

export function playCoffeeShopMusic() {
  el.coffeeShopBtn.addEventListener('click', () => {
    state.isMute = el.coffeeShopBtn.classList.toggle('music-on')

    if (state.isMute) {
     sounds.coffeeShop.play()
     return
    }

    sounds.coffeeShop.pause()
 })
}

export function playFireplaceMusic() {
  el.fireplaceBtn.addEventListener('click', () => {
    state.isMute = el.fireplaceBtn.classList.toggle('music-on')

    if (state.isMute) {
     sounds.fireplace.play()
     return
    }

    sounds.fireplace.pause()
 })
}