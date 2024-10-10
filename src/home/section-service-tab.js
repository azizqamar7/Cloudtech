import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const sectionServiesTabs = () => {
  const tabLinks = document.querySelectorAll('[tab-link]')

  if (tabLinks) {
    // const tablinkBody = document.querySelectorAll('[tab-link-body]')
    const tabPanes = document.querySelectorAll('[tab-pane]')
    console.log(tabPanes)

    // Variables to keep track of the current tab and the interval
    let currentTab = 0
    let intervalId

    // Function to handle tab switching
    function switchTab(targetIndex) {
      // Remove the 'is-active' class from all tab links
      tabLinks.forEach((link) => link.classList.remove('is-active'))
      // Add the 'is-active' class to the target tab link
      tabLinks[targetIndex].classList.add('is-active')
      // Remove the 'active' class from all tab panes
      tabPanes.forEach((pane) => pane.classList.remove('is-active'))
      // Get the target tab pane
      const targetTabPane = document.querySelector(
        `[data-tab-content="tab${targetIndex + 1}"]`
      )
      // Animate the target tab pane using GSAP
      gsap.to(targetTabPane, {
        duration: 0.3,
        opacity: 1,
        onComplete: () => targetTabPane.classList.add('is-active'),
      })
      // Animate the other tab panes using GSAP
      tabPanes.forEach((pane) => {
        if (pane !== targetTabPane) {
          gsap.to(pane, {
            duration: 0.3,
            opacity: 0,
            onComplete: () => pane.classList.remove('is-active'),
          })
        }
      })
    }

    // Function to start the automatic tab switching
    // function startAutomaticSwitch() {
    //   clearInterval(intervalId) // Clear any existing interval
    //   intervalId = setInterval(() => {
    //     currentTab = (currentTab + 1) % tabLinks.length
    //     switchTab(currentTab)
    //   }, 3000) // Switch tabs every 3 seconds
    // }

    // Add click event listeners to tab links
    tabLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
        currentTab = index
        switchTab(currentTab)
        // startAutomaticSwitch() // Restart the automatic switching after user interaction
      })
    })

    // Initialize GSAP ScrollTrigger for the section-tab
    ScrollTrigger.create({
      trigger: '[tabs]',
      start: 'top 80%', // Trigger when the top of .section-tab is 80% from the top of the viewport
      onEnter: () => {
        switchTab(currentTab) // Trigger the tab switch function
        // startAutomaticSwitch() // Start the automatic tab switching
      },
      // markers: true,
    })
  }
}
