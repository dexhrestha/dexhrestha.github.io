import uniqid from 'uniqid'
import './CertificationCard.css'


const CertificationCard = ({item}) =>  (

    
    <a href={item.href} className="card">
        <div>
            <img src={item.src} alt={item.alt}/>
            <div className='text'>
            <i className="fa fa-calendar" aria-hidden="true"/><p className='date'>Valid till: {item.date}</p>
        </div>
        </div>
    </a>
)

  
  export default CertificationCard;
  
