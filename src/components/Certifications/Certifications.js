import uniqid from 'uniqid'
import { certifications } from '../../portfolio'
import CertificationCard from '../CertificationCard/CertificationCard'
import './Certifications.css'


const Certifications = () => {
    if (!certifications.length) return null
    
    return (
      <section id='certifications' className='section certifications bordered'>
        <h2 className='section__title'>Certifications</h2>
        <p>Weaving the Spells, Earning the Badges</p>  
        <div className='certifications__grid'>
          {certifications.map((item) => (
            <CertificationCard key={uniqid()} item={item} />
          ))}
        </div>
      </section>
    )
  }
  
  export default Certifications
  
