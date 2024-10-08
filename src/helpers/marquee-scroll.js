import gsap from 'gsap'

export const marqueeScrollIx = () => {
  const tl = gsap.timeline({ repeat: -1 })

  tl.to('[marquee-track]', { x: '-50%', ease: 'none', duration: 50 })
}

export const marqueeVerticalScroll = () => {
  const tl = gsap.timeline({ repeat: -1 })

  tl.to('[marquee-track-vertical]', { y: '-50%', ease: 'none', duration: 100 })
}
