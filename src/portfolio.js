const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://dipeshrestha.me',
  title: 'DS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dipesh Shrestha',
  role: 'Software Engineer',
  description:
    'Hey! Thanks for stopping by 😊😊😊😊',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/dipesh-shrestha-1196311b4/',
    github: 'https://github.com/dexhrestha',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Private Cloud',
    description:
      'I will add a project link here. My private cloud demo.',
    stack: ['Cloud', 'SaaS', 'Drive','Node','Analytics'],
    sourceCode: 'https://github.com/dexhrestha',
    livePreview: 'https://github.com/dexhrestha',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Django',
  'AWS',
  'Git',
  'CI/CD',
  'R',
  'Java',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dipesh.shrestha009@gmail.com',
}

export { header, about, projects, skills, contact }
