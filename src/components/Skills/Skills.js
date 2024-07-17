import React from 'react';
import uniqid from 'uniqid';
import './Skills.css';

const calculateRotation = (percentage) => {
  return 1.8 * percentage; // 1.8 degrees per percentage point for a semi-circle (180 degrees max)
};

const Skills = ({ skills, header, filter, skillsRef }) => {
  if (!skills.length) return null;

  return (
    <section
      className={`skills ${filter ? '' : 'fade-in bordered'}`}
      id='skills'
      ref={skillsRef}
    >
      {header ? (
        <>
          <h2 className='skills__title'>SKILLS</h2>
          <p className='skills__subtitle'>Mastering the Craft, Unraveling Data Spells</p>
        </>
      ) : null}
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item'>
            <section className={`model-${skill.model}`}>
              <div className='graph'>
                <p className='graph__title'>{skill.label}</p>
                {!skill.multiGraph && (
                  <>
                    <div
                      className={`graph__segment skill-level-${skill.level}`}
                      
                      style={{ transform: `rotate(${calculateRotation(skill.percentage)}deg)` }}
                    />
                    <div className='graph__segment--background'   />
                  </>
                )}
                
              </div>
              <span tooltip={`${skill.percentage}%`}  className={`tooltip skill-level-${skill.level}`}>{skill.label}</span>
            </section>
            <p className='description'>{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
