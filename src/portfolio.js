const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://dipeshrestha.com.np/',
  title: 'DS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dipesh Shrestha',
  role: 'Data Analyst',
  description:
    'Passionate data analyst with a keen interest in behavior analysis. Leveraging prior internship experience, adept at collecting and analysing data to uncover patterns and trends, ultimately enhancing user experience and engagement. Proficient in statistical analysis, data visualization, and machine learning techniques, with a focus on delivering actionable insights to drive business strategies.',
  resume: 'https://drive.google.com/file/d/1CnLaoBg92O1mEJ5ntn-GvIlROZnLQ9s0/',
  social: {
    linkedin: 'https://www.linkedin.com/in/dipesh-shrestha-1196311b4/',
    github: 'https://github.com/dexhrestha',
    instagram: 'https://instagram.com/dexhrestha',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Exploring London\'s Travel Network',
    description:
      'How do Londoners get around? Transport for London (TfL) is a vast public transport network that allows London\'s residents to efficiently travel around the UK\'s capital, to the tune of over 1.5 million journeys per day!',
    stack: ['Snowflake', 'Amazon Redshift' ,'SQL', 'Google BigQuery'],
    // sourceCode: 'https://github.com/dexhrestha',
    // livePreview: 'https://github.com/dexhrestha',
  },
  {
    name: 'Predicting Credit Card Approvals',
    description:
      'Build a machine learning model to predict if a credit card application will get approved.The dataset used in this project is the Credit Card Approval dataset from the UCI Machine Learning Repository.',
    stack: ['ML','Python','Pytorch','Logisitc Regression'],
    sourceCode: 'https://huggingface.co/dexhrestha/Nepali-DistilBERT',
    livePreview: 'https://huggingface.co/dexhrestha/Nepali-DistilBERT',
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
