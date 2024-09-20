import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>

      <Route exac path="/" element={<Home/>}/>
      <Route path="/company" element={<Company/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/newproject" element={<NewProject/>}/>

      <p>Footer</p>
    </Router>
  );
}

export default App;
limpar o fogão