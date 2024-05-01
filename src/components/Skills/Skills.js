import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <p>Mastering the Craft, Unraveling Data Spells</p>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            {skill.link ? (
                
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
