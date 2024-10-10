/**
 * This file is to keep all the global functions that you want in the entire webflow site.
 */

console.log('Hello from Global folder')

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { navbarSwitch } from '../helpers/navbar-switch'
import { marqueeScrollIx } from '../helpers/marquee-scroll'

window.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger)

  navbarSwitch()

  marqueeScrollIx()
})
