const accordions = document.querySelectorAll('.akardeon__btn')

accordions.forEach((accordion) => accordion.addEventListener('click', showAccordion))

function showAccordion(e) {
  const currentItem = e.target.closest('.akardeon__item')
  const currentText = currentItem.querySelector('.akardeon__text')

  if (currentText) {
    currentText.classList.toggle('open')
  }
}
