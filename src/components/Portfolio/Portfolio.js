import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { ThemeContext } from '../../contexts/theme';

import Header from '../Header/Header';
import '../../App.css';

export default function Portfolio() {
  const [{ themeName }] = useContext(ThemeContext);
  const error = useRouteError();
  console.error(error);

  return (
    <div id="top error-page" className={`${themeName} app`}>
      <Header />
      <main>
        <Container fluid className="vh-100 d-flex justify-content-left">
        <section data-id="portfolio-section">
          {/* <Project /> */}
          proj
        </section>
        </Container>
      </main>
    </div>
  );
}


// export default function Project() {
//     return(
//         <Row>
//         <Col className="text-left">
            
//           <div>
//             <div>
//               <div>
//                 <i aria-hidden="true" className="fas fa-chart-bar" />
//               </div>
//               <div>
//                 <h6>Tableau Dashboard</h6>
//               </div>
//             </div>
//             <div>
//               <h2>Interactive Sales Dashboard in Tableau 📊</h2>
//             </div>
//             <div>
//               <p>
//                 The purpose of the sales dashboard is to present an overview of the sales key performance metrics and
//                 trends to analyze year-over-year sales performance and understand sales trends.
//               </p>
//             </div>
//             <div>
//               <a
//                 href="https://www.linkedin.com/posts/purvamasurkar_sales-dashboard-dynamic-activity-7170734793616252929-MX8a"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span>
//                   <i aria-hidden="true" className="fas fa-link" />
//                 </span>
//                 <span>Open project</span>
//               </a>
//             </div>
//           </div>
        
//             </Col>
//             <Col className="text-left">
//             <div>
              
//                 <img
//                   loading="lazy"
//                   src="#"
//                   alt="sImage"
//                 />
                
              
//             </div>
//             </Col>
//           </Row>
//     )
// }