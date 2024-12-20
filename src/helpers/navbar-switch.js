/**
 * Navbar Switch for different pages
 */

import gsap from 'gsap'

export const navbarSwitch = () => {
  const navbarToggle = () => {
    const navOverlay = document.querySelector('[navbar-overlay]')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top -5%',
        // markers: true,
        onEnter: () => {
          gsap.fromTo(navOverlay, { opacity: 0 }, { opacity: 1 })
        },
        onLeaveBack: () => {
          gsap.fromTo(navOverlay, { opacity: 1 }, { opacity: 0 })
        },
      },
    })

    tl.set(navOverlay, { opacity: 0 })
  }
  navbarToggle()
}
