import gsap from 'gsap'

export const sectionIndustry = () => {
  const industryList = document.querySelector('[industry-list]')
  const industryItems = document.querySelectorAll('[industry-item]')

  let count = industryItems.length

  const vh = (coef) => window.innerHeight * (coef / 100)
  const vw = (coef) => window.innerWidth * (coef / 100)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: industryList,
      start: () => `top ${vh(15)}`,
      end: () => '+=900px',
      pin: true,
      refreshPriority: 1,
      onUpdate: (self) => {
        // Determine which benefit item has to be active based on the current progress
        let index = Math.floor(self.progress * count)

        if (index < count) {
          // Remove .is-active class from all items
          industryItems.forEach((item) => {
            item.classList.remove('is-active')
          })

          industryItems[index].classList.add('is-active')
        }
      },
    },
  }).scrollTrigger

  // Function to scroll to a specific index
  const scrollToTab = (index) => {
    // Calculate the progress based on index
    let progress = index / (industryItems.length - 1) // Normalize progress between 0 and 1
    // Scroll to the calculated position within the ScrollTrigger's start and end range
    tl.scroll(tl.start + progress * (tl.end - tl.start - 100))
  }

  // Attach click event listeners to feature items
  industryItems.forEach((item, index) => {
    item.addEventListener('click', () => scrollToTab(index))
  })
}
