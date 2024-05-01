import uniqid from 'uniqid'
import './Timeline.css';

const Timeline = ({ data }) => (
    <section id='timeline' className='section timeline'>
      <div className="timeline" style={{ '--items': data.length }}>
      <ul>
        {data.map((item, index) => (
            <li key={uniqid()} style={{ '--index': index + 1 }}>
            
            {item.link ? (
                <h3>
                <a href={item.link}>
                    <span>{item.title}</span>
                </a>
                </h3>
                ) : (
                <h3>{item.title}</h3>
                )}
            <div>
                <p style={{'margin':0,'fontWeight':'bold'}}>{item.date}</p>        
                <p>{item.description}</p>
            </div>
            </li>
        ))}
        </ul>


    </div>

    </section>



  );
export default Timeline;
