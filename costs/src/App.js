import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/pages/layout/Container';
import Navbar from './components/pages/layout/Navbar';
import Footer from './components/pages/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>

      <Container customClass="min-height">
      <Routes>
        <Route exac path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
    </Container> 
    <Footer/>
    </Router>
  );
}

export default App;