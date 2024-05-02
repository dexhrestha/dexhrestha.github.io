import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Research from './components/Research/Research';
import Portfolio from './components/Portfolio/Portfolio';
import ErrorPage from './components/ErrorPage/error404';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="research" element={<Research />} />
      <Route path="portfolio" element={<Portfolio />} />
      {/* <Route path="/*" element={<ErrorPage />} /> */}
    </Routes>
  </Router>
);

export default App;
