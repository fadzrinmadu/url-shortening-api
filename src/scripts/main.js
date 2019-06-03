import MenuToggle from './components/MenuToggle'
import ShortenForm from './components/ShortenForm'
import ShortenResults from './components/ShortenResults'

const components = [
  {
    class: MenuToggle,
    selector: '.menu-toggle'
  },
  {
    class: ShortenForm,
    selector: '#shorten-form'
  },
  {
    class: ShortenResults,
    selector: '#shorten-results'
  }
]

components.forEach(component => {
  if (document.querySelector(component.selector) !== null) {
    document.querySelectorAll(component.selector).forEach(element => {
      new component.class(element, element.options)
    })
  }
})
