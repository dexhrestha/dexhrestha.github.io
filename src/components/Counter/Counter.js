import { useContext,useState,useEffect } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../App.css'

const LiveClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h2>Current Time:</h2>
      <p>{formattedTime}</p>
    </div>
  );
};



const CountdownTimer = () => {
  const targetDate = new Date('June 12, 2025 00:00:00 GMT+00:00');

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      // If the target date has passed, set timeRemaining to 0
      return 0;
    }

    return timeRemaining;
  };

  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div>
      <h2>Time Remaining:</h2>
      <p>{`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}</p>
    </div>
  );
};

const Counter = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header hideNav/>

      <main>
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
        <Row>
          <Col className="text-center">
            <CountdownTimer />
          </Col>
        </Row>
      </Container>
      </main>

      <Footer />
    </div>
  )
};

export default Counter;
