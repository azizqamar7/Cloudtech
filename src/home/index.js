/**
 * For Home page js
 */

console.log('Hello from Home folder')

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { marqueeScrollIx } from '../helpers/marquee-scroll'
import { sectionServiesTabs } from './section-service-tab'
import { sectionIntegrationSticky } from './section-integration-sticky'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // marqueeScrollIx()

  // Section Services
  sectionServiesTabs()

  // Section Integration Sticky
  sectionIntegrationSticky()
})
