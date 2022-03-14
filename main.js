const linksSocialMedia = {
  github: 'https://github.com/sampaiocode',
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

function getGithubProfileInfos() {
  const url = "https://api.github.com/users/sampaiocode"

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
    })
}

getGithubProfileInfos()
