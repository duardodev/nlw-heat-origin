const linksSocialMedia = {
  github: 'https://github.com/eduardoalmeida45',
  instagram: 'https://instagram.com/eduardoalmeida280',
  linkedin: 'https://www.linkedin.com/in/deivit-eduardo-1aa65420b/',
  email: 'mailto:eduardoalmeida5547@gmail.com'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// Typing Animation

function typeWriter(element) {
  const textArray = element.innerHTML.split('')
  element.innerHTML = ''
  textArray.forEach((letter, i) => {
    setTimeout(() => (element.innerHTML += letter), 75 * i)
  })
}

const nameUser = document.querySelector('h1')
typeWriter(nameUser)

const aboutUser = document.querySelector('p')
typeWriter(aboutUser)
