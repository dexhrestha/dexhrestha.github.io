import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({projectsRef}) => {
  if (!projects.length) return null

  return (
    <section id='projects' ref={projectsRef} className='section projects'>
      <h2 className='section__title'>PROJECTS</h2>
      <p> Crunching Numbers, Unveiling Stories: Your Data Odyssey Awaits! </p>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
