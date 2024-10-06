/**
 * Navbar Switch for different pages
 */

import gsap from 'gsap'

export const navbarSwitch = () => {
  const navbarToggle = () => {
    // Get the section element where navbar has to toggle
    const navbarTriggers = document.querySelectorAll('[navbar-switch]')

    // Get the navbar elements
    const navbar = document.querySelector('[navbar]')
    const navbarLogo = document.querySelector('[nav-logo]')
    const navlinks = document.querySelectorAll('[nav-link]')
    const navButton = document.querySelector('[nav-button]')

    navbarTriggers.forEach((trigger) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top 10%',
          // markers: true,
          onToggle: (self) => {
            if (self.isActive) {
              console.log('Scrolltrigger active')
              navbar.classList.remove('on-white')
              navbarLogo.classList.remove('on-white')
              navlinks.forEach((item) => item.classList.remove('on-white'))
              navButton.classList.remove('on-white')
            } else {
              console.log('Scrolltrigger in-active')
              navbar.classList.add('on-white')
              navbarLogo.classList.add('on-white')
              navlinks.forEach((item) => item.classList.add('on-white'))
              navButton.classList.add('on-white')
            }
          },
        },
      })
    })
  }
  navbarToggle()
}
