import { contact } from '../../portfolio'
import './Contact.css'

const Contact = ({contactRef}) => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact' ref={contactRef}>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
