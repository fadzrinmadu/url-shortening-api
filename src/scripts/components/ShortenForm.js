export default class ShortenForm {
  constructor(element) {
    const shortenInput = document.querySelector('#shorten-input')
    this.showShortenResults()

    element.addEventListener('submit', async (e) => {
      e.preventDefault()

      // check if there is an invalid message, if 'yes' then delete the message
      let invalidMessage = document.querySelector('.invalid-message')
      if (invalidMessage !== null) {
        shortenInput.classList.remove('invalid')
        element.removeChild(invalidMessage)
      }

      // check if the url is valid
      let message = ''
      if (shortenInput.value !== '') {
        let apiURL = 'https://rel.ink/api/links/'
        let post = { url: shortenInput.value }
        const shortenResult = await this.shortenURL(apiURL, post)
        if (!(shortenResult.hashid == undefined)) {
          this.saveURL(shortenResult)
          this.showShortenResults()
        } else {
          message = shortenResult.url
        }
      } else {
        message = 'Please add a link'
      }
      
      // make an invalid message and add after shorten input
      if (message !== '') {
        invalidMessage = this.createInvalidMessage(message)
        element.insertBefore(invalidMessage, shortenInput.nextSibling)
        shortenInput.classList.add('invalid')
      }

    })
  }

  saveURL(url) {
    let shortenResults = []
    if (localStorage.getItem('shortenResults') === null) {
      shortenResults.push(url)
    } else {
      shortenResults = JSON.parse(localStorage.getItem('shortenResults'))
      if (!shortenResults.find((sr) => sr.url === url.url)) {
        shortenResults.push(url)
      }
    }
    localStorage.setItem('shortenResults', JSON.stringify(shortenResults))
  }

  showShortenResults() {
    let shortenResults = JSON.parse(localStorage.getItem('shortenResults'))
    if (shortenResults !== null) {
      let shortenResultsUI = document.querySelector('#shorten-results')
      let template = shortenResults.map(sr => this.createUIShorten(sr)).join('')
      shortenResultsUI.innerHTML = template
    }
  }

  createUIShorten(sr) {
    return `
      <li class="card">
        <div class="card-header">
          <p>${sr.url}</p>
        </div>
        <div class="card-body">
          <p>https://rel.ink/${sr.hashid}</p>
          <button class="button">Copy</button>
        </div>
      </li>
    `
  }
  
  shortenURL(url = '', data = '') {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => response)
  }

  createInvalidMessage(message) {
    let span = document.createElement('span')
    let spanText = document.createTextNode(message)
    span.appendChild(spanText)
    span.classList.add('invalid-message')
    return span;
  }

  // validURL(url) {
  //   let pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  //   return pattern.test(url);
  // }
}
