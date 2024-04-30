import { useContext } from 'react'
import { useRouteError } from "react-router-dom"
import {Container,Row,Col} from 'react-bootstrap'

import { ThemeContext } from '../../contexts/theme'

import Header from "../Header/Header";
import '../../App.css'


export default function ErrorPage() {
    const [{ themeName }] = useContext(ThemeContext)

  const error = useRouteError();
  console.error(error);

  return (


    <div id="top error-page" className={`${themeName} app`} >
            <Header hideNav/>
            <main>
            <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
  <Row>
    <Col className="text-center">
      <h1 style={{"color":"#e74c3c"}}>Oops!</h1>
      <p>You&apos;ve reached the restricted section: <span style={{"color":"green"}}>£1.99</span> to unlock</p>
      <h3>OR</h3>
      <p>
        <a href='/'>Click here 🚀</a> to portal back home. 
      </p>
    </Col>
  </Row>
</Container>
            
            </main>

      
    </div>
  );
}

