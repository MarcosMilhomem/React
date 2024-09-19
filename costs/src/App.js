import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';

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
      <Route path="/newwproject" element={<NewProject/>}/>

      <p>Footer</p>
    </Router>
  );
}

export default App;
