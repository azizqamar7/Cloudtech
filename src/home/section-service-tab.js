import gsap from 'gsap'

export const sectionServiesTabs = () => {
  const tablinks = document.querySelectorAll('[tab-link]')

  if (tablinks) {
    const tabPaneImage = document.querySelectorAll('[tab-pane]')
    const tablinkBody = document.querySelectorAll('[tab-link-body]')

    let count = tablinks.length

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[tabs]',
        start: 'top 10%',
        end: '+=800px',
        scrub: true,
        pin: true,
        // markers: true,
        onUpdate: (self) => {
          // Determine which benefit item has to be active based on the current progress
          let index = Math.floor(self.progress * count)

          if (index < count) {
            // Remove .layout-active class from all items
            tablinks.forEach((item) => {
              item.classList.remove('is-active')
            })
            tabPaneImage.forEach((item) => {
              item.classList.remove('is-active')
            })
            tablinkBody.forEach((item) => {
              item.classList.remove('is-active')
            })
            // tablinkBody.classList.remove('is-active')

            tablinks[index].classList.add('is-active')
            tabPaneImage[index].classList.add('is-active')
            tablinkBody[index].classList.add('is-active')
          }
        },
      },
    }).scrollTrigger

    // Function to scroll to a specific index
    const scrollToTab = (index) => {
      // Calculate the progress based on index
      let progress = index / (tabPaneImage.length - 1) // Normalize progress between 0 and 1
      // Scroll to the calculated position within the ScrollTrigger's start and end range
      tl.scroll(tl.start + progress * (tl.end - tl.start - 100))
    }

    // Attach click event listeners to feature items
    tablinks.forEach((item, index) => {
      item.addEventListener('click', () => scrollToTab(index))
    })
  }
}
