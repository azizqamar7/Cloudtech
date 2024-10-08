/**
 * For About page js
 */

console.log('Hello from About folder')

import gsap from 'gsap'
import { marqueeVerticalScroll } from '../helpers/marquee-scroll'

window.addEventListener('DOMContentLoaded', (event) => {
  // gsap.registerPlugin(ScrollTrigger)

  marqueeVerticalScroll()
})
