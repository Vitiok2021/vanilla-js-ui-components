const btn = document.querySelector('.btn-open')
const popup = document.querySelector('.pop-up')
const popupBtn = document.querySelector('.popup-btn')
btn.addEventListener('click', showPopUp)
function showPopUp() {
  popup.classList.toggle('hidden')
  document.body.classList.add('no-scroll')
}
popupBtn.addEventListener('click', hidePopup)
function hidePopup() {
  popup.classList.add('hidden')
  document.body.classList.remove('no-scroll')
}
popup.addEventListener('click', hideOnBg)
function hideOnBg(e) {
  console.log(e)
  if (e.target === popup) {
    hidePopup()
  }
}
document.addEventListener('keydown', escHid)
function escHid(e) {
  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    hidePopup()
  }
}
