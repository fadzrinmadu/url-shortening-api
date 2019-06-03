export default class MenuToggle {
  constructor(element) {
    const menuContainer = document.querySelector('.menu-container')
    element.addEventListener('click', () => {
      this.showMenu(menuContainer)
    })
  }

  showMenu(menuContainer) {
    menuContainer.classList.toggle('active')
  }
}
