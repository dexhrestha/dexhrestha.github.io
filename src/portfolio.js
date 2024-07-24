const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://dipeshrestha.com.np/',
  title: 'DS',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dipesh Shrestha',
  role: 'Data Scientist',
  description:
    "As a Certified Data Professional with a Masters in Data Science, I bring versatile experience and expertise in Machine Learning, Big Data, and AI Technologies. Passionate about solving complex problems, I offer unique insights and proven success in data-driven decision making, effectively communicating intricate data insights to drive impactful results.",
  resume: 'https://drive.google.com/drive/u/2/folders/1GAvWeUYWbapuSBMexuAEtzK--iEmxyU8',
  social: {
    linkedin: 'https://linkedin.com/in/dexhrestha',
    github: 'https://github.com/dexhrestha',
    instagram: 'https://instagram.com/dexhrestha',
  },
};


const blogs = [
  {name:'Blog 1'},
  {name: 'Blog 2'}
]
const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AirBnb Analytics',
    src: 'projlects/airbnb.svg',
    blog: '#/blog/28e26135d87b4a0db9fd701312c95eb3',
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
];

const skills = [
  { model: 1, label: 'SQL', percentage: 85, multiGraph: false,level:5,description:"Proficient in SQL for expert-level database management, complex querying, and in-depth data analysis, enhancing data-driven decision-making in data science projects." },
  { model: 2, label: 'Python', percentage: 95, multiGraph: false ,level:5,description:"Highly proficient in Python, utilizing it for advanced data analytics, scripting data workflows, and automating processes, enabling impactful data-driven decision-making in data science."  },
  { model: 3, label: 'R', percentage: 92, multiGraph: false ,level:3,description:"Experienced in R for advanced statistical analysis, compelling data visualization, and robust machine learning applications" },
  { model: 4, label: 'Power BI', percentage: 91, multiGraph: false ,level:5 ,description:"Skilled in Power BI for creating interactive dashboards and data visualization." },
  { model: 5, label: 'Databricks', percentage: 78, multiGraph: false ,level:4,description:"Proficient in Databricks for big data analytics and collaborative data science."  },
  { model: 6, label: 'Azure', percentage: 71, multiGraph: false ,level:4 ,description:"Experienced with Azure for cloud-based data solutions, including storage, databases, and analytics." },
];


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'dipesh.shrestha009@gmail.com',
};


const certifications = [
  {'name':'Microsoft','src':'certifications/pbi_badge.png',href:"https://learn.microsoft.com/api/credentials/share/en-us/DipeshShrestha-3413/BE92B44902DEFAC0?sharingId=A171CB937994744D",'date':'20/04/2025',},
  {'name':'DataCamp','src':'certifications/ds_badge.svg',href:"https://www.datacamp.com/certificate/DS0020536161448",'date':'11/04/2026',},
  {'name':'DataCamp','src':'certifications/da_badge.svg',href:"https://www.datacamp.com/certificate/DA0027078983162",'date':'02/03/2026',},
  {'name':'DataCamp','src':'certifications/sql_badge.svg',href:"https://www.datacamp.com/certificate/SQA0019399922684",'date':'17/04/2026',},
  
];

export { header, about, blogs, projects, skills, contact, certifications }

