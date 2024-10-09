import gsap from 'gsap'

export const sectionIntegrationSticky = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '[sticky-trigger]',
      start: 'top 444px',
      onEnter: () => {
        gsap.to('[sticky-target]', { opacity: 0.5 })
      },
      onLeaveBack: () => {
        gsap.to('[sticky-target]', { opacity: 1 })
      },
    },
  })
}
