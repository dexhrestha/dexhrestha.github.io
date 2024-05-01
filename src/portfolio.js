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
    "Data-driven decision making leads to informed strategies, empowered teams, and measurable success in today's competitive business landscape.",
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
    name: 'AirBnb Analytics',
    src: 'projects/airbnb.svg',
    description:
      'What type of property is popular?',
    stack: ['ML','Python','Pytorch','Logisitc Regression'],
    sourceCode: 'https://github.com/dexhrestha',
    livePreview: 'https://github.com/dexhrestha',
  },
  {
    name: 'Exploring London\'s Travel Network',
    src: 'projects/tfl.svg',
    description:
      'How do Londoners get around? Transport for London (TfL) is a vast public transport network that allows London\'s residents to efficiently travel around the UK\'s capital, to the tune of over 1.5 million journeys per day!',
    stack: ['Snowflake', 'Amazon Redshift' ,'SQL', 'Google BigQuery'],
    sourceCode: 'https://github.com/dexhrestha',
    livePreview: 'https://github.com/dexhrestha',
  },
  
  {
    name: 'Analyzing Efficiency of Hospitals in New York',
    src: 'projects/health.png',
    description:
      'Analysis of Efficiency of hospitals in New York measuring the length of stay(LOS) after surger of patients.',
    stack: ['SQL','Python','PowerBI','DAX'],
    sourceCode: 'https://github.com/dexhrestha',
    livePreview: 'https://github.com/dexhrestha',
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


const certifications = [
  {'name':'Microsoft','src':'certifications/pbi_badge.png',href:"https://learn.microsoft.com/api/credentials/share/en-us/DipeshShrestha-3413/BE92B44902DEFAC0?sharingId=A171CB937994744D",'date':'20/04/2025',},
  {'name':'DataCamp','src':'certifications/ds_badge.svg',href:"https://www.datacamp.com/certificate/DS0020536161448",'date':'11/04/2026',},
  {'name':'DataCamp','src':'certifications/da_badge.svg',href:"https://www.datacamp.com/certificate/DA0027078983162",'date':'02/03/2026',},
  {'name':'DataCamp','src':'certifications/sql_badge.svg',href:"https://www.datacamp.com/certificate/SQA0019399922684",'date':'17/04/2026',},
  
]

export { header, about, projects, skills, contact, certifications }

