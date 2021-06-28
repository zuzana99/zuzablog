export default {
  init: () => {
    const textElementsToReveal = document.querySelectorAll('.text-reveal')

    textElementsToReveal.forEach((element) => {
      const classes = element.classList
      classes.add('text-reveal-show')
    })
  },
}
