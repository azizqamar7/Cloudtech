/**
 * For Home page js
 */

console.log('Hello from Home folder')

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { sectionIntegrationSticky } from './section-integration-sticky'
import { sectionIndustry } from './section-industry'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // Section Integration Sticky
  //   sectionIntegrationSticky()

  // Section Industry
  if (window.innerWidth > 767) {
    sectionIndustry()
  }
})
