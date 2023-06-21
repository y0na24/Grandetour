const modal = document?.querySelector('#modal')
const modalOpenButton = document?.querySelectorAll('.program__images-image')
const modalCloseButton = document?.querySelector('.modal__close-btn')

modalOpenButton?.forEach((button) => {
  button.addEventListener('click', () => {
    modal.showModal()
  })
})

modalCloseButton?.addEventListener('click', () => {
  modal.close()
})
