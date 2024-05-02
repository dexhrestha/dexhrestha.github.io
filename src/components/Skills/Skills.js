import uniqid from 'uniqid'

import './Skills.css'

const Skills = ({skills,header,filter}) => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>

      {header ? (
              <>
                <h2 className='section__title'>Skills</h2>
                <p>Mastering the Craft, Unraveling Data Spells</p>
              </>
            ) : null}
      <ul className='skills__list'>
      <li key={uniqid()} className='skills__list-item'>
      {filter ?(
          
        <a href="/portfolio/?q=all">
                <span type='button' className='btn btn--outline'>
              All
            </span>
                    
                </a>):null}</li>

        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            

            {
            skill.link ? (
                
              <a href={skill.link}>
                <span type='button' className='btn btn--plain'>
              {skill.name}
            </span>
                    
                </a>
                
                ) : (
                  <span type='button' className='btn btn--plain'>
                  {skill.name}
                </span>
                )}
            
            
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
