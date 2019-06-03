export default class ShortenResults {
  constructor(element) {
    element.addEventListener('click', (e) => {
      if (e.target.classList.contains('button')) {
        this.copyURL(e.target.previousElementSibling) // take the url
        // change the styles of button
        e.target.classList.add('copied')
        e.target.innerHTML = 'Copied!'
      }
    })
  }

  copyURL(resultURL) {
    let element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = resultURL.innerHTML
    element.select()
    document.execCommand('copy')
    document.body.removeChild(element)
  }
}
