

export const clickLayout = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget)
  }
}