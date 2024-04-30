const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://dipeshrestha.com.np/',
  title: 'DS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dipesh Shrestha',
  role: 'Data Scientist',
  description:
    "A graduate of the University of Greenwich's Master's in Data Science program and a Microsoft-certified Power BI Data Analyst, I possess a solid foundation in analytics. My recent work focused on player modeling behavior and analytics for gambling players, complemented by 2 years of experience in clinical data analytics. I am eager to leverage my expertise in finance and healthcare analytics, as well as behavior analytics, to inform strategic decision-making and drive positive outcomes.",
  resume: 'https://docs.google.com/document/d/1Gbq84i042QLx3rrf2IwB3vF4KiGTajZw/edit?usp=sharing&ouid=115396742587346328900&rtpof=true&sd=true',
  social: {
    linkedin: 'linkedin.com/in/dexhrestha',
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
  // { name: 'SQL', link: 'test' },
  { name: 'SQL'},
  { name: 'Python' },
  { name: 'R' },
  { name: 'Power BI' },
  { name: 'DAX' },
  { name: 'Power Query' },
  { name: 'Shiny' },
  { name: 'Tableau' },
  { name: 'Git' },
  { name: 'CI/CD' },
  { name: 'Excel' },
  { name: 'Azure' },
  { name: 'GCP' }
];


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dipesh.shrestha009@gmail.com',
}

export { header, about, projects, skills, contact }
