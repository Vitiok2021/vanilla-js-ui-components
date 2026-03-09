const accordions = document.querySelectorAll('.akardeon__btn')

accordions.forEach((accordion) => accordion.addEventListener('click', showAccordion))

function showAccordion(e) {
  const currentItem = e.target.closest('.akardeon__item')
  const currentText = currentItem.querySelector('.akardeon__text')

  if (currentText) {
    const isOpen = currentText.classList.contains('open')
    console.log(isOpen)
    document.querySelectorAll('.akardeon__text').forEach((text) => text.classList.remove('open'))
    if (!isOpen) {
      currentText.classList.add('open')
    }
  }
}
