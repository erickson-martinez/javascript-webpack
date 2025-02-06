import './heading.css'

class Heading {
  title(text) {
    const title = document.createElement('h1')
    title.innerText = text
    title.classList.add("main-title")
    document.querySelector('body').appendChild(title)
  }

  description(text) {
    const description = document.createElement('h2')
    description.innerText = text
    description.classList.add("main-description")
    document.querySelector('body').appendChild(description)
  }
}

export default Heading
